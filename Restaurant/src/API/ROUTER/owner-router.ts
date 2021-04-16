const express = require('express');
const passport = require('passport')
const jwt = require('jsonwebtoken')
import OwnerRepository from '../../REPOSITORY/REPOSITORY-MODEL/owner-repository';
import Owner from "../CONTROLLER/owner-controller";
const router = express.Router();

const owner = new Owner(new OwnerRepository());
owner.AddOwnerUserPassword();
owner.AddOwnerGoogle();
const secret = process.env.SECRET_JWT

const isLoggedIn = (req: any, res: any, next: any) => {
    if (req.user) {
        next();
    } else {
        res.sendStatus(401);
    }
}

router.get('/', (req: any, res: any) => res.send('Express + TypeScript Server'));
router.get('/credential', (req: any, res: any) => {
    fetch('https://www.googleapis.com/oauth2/v1/certs')
    .then((data: any) => {
        console.log("Data: ",data)
        res.json(data)
    })
})
router.get('/failed', (req: any, res: any) => res.send('You Failed to log in!'))

// In this route you can see that if the user is logged in u can acess his info in: req.user
router.get('/good', isLoggedIn, (req: any, res: any) => res.send(`Welcome mr ${req.user.displayName}!`))

// SignIn and SignUp
router.post('/signup', async (req: any, res: any, next: any) => {
    passport.authenticate('signup', async (err: any, user: any, info: any) => {
        if (err) {
            console.log(err)
            const error = new Error('new Error')
            return next(error)
        }

        if(!user)
        {
            res.status(404)
            res.json(info)
        }
        else
        {
            const token = jwt.sign({ owner: user }, secret, {
                expiresIn: 60 * 60 * 24 // equivalente a 24 horas
            })
            res.status(200)
            res.cookie('session', token)
            res.json(info)
        }
    })(req, res, next)
}
);


router.post('/login', async (req: any, res: any, next: any) => {
    passport.authenticate('login', async (err: any, user: any, info: any) => {
        try {
            if (err) {
                console.log(err)
                const error = new Error('new Error')
                return next(error)
            }

            if(!user){
                res.status(404)
                return res.json(info)
            }
            else
            {
                req.login(user, { session: false }, async (err: any) => {
                    if (err) return next(err)
    
                    const token = jwt.sign({ owner: user }, secret, {
                        expiresIn: 60 * 60 * 24 // equivalente a 24 horas
                    })
                    res.status(200)
                    res.cookie('session', token)
                    return res.json(info)
                })
            }
        }
        catch (e) {
            return next(e)
        }
    })(req, res, next)
})

// OAuth con google
router.get('/google', passport.authenticate('google', { scope: ["profile", "email"] }));

router.get('/google/OAuth', passport.authenticate('google', { failureRedirect: '/owner/failed' }),
    function (req: any, res:any) {
        res.redirect('/owner/good');
    }
);

router.get('/logout', (req: any, res: any) => {
    req.session = null;
    req.logout();
    res.redirect('/');
})

module.exports = router;