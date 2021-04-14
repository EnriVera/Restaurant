const express = require('express');
const passport = require('passport')
const jwt = require('jsonwebtoken')
import OwnerRepository from '../../REPOSITORY/REPOSITORY-MODEL/owner-repository';
import Owner from "../CONTROLLER/owner-controller";
const router = express.Router();

const owner = new Owner(new OwnerRepository());
owner.AddOwnerUserPassword();
const secret = process.env.SECRET_JWT

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

module.exports = router;