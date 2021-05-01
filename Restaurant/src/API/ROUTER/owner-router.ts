const express = require('express');
const passport = require('passport')
const jwt = require('jsonwebtoken')
import OwnerRepository from '../../REPOSITORY/REPOSITORY-MODEL/owner-repository';
import Owner from "../CONTROLLER/owner-controller";
const router = express.Router();

const owner = new Owner(new OwnerRepository());
owner.AddOwnerGoogle();
const { ACSESS_URL } = process.env;

const isLoggedIn = (req: any, res: any, next: any) => {
    if (req.user) {
        next();
    } else {
        res.sendStatus(401);
    }
}

router.get('/', (req: any, res: any) => res.send('Express + TypeScript Server'));

router.post('/signup', async (req: any, res: any) => await owner.SingUpOwner(req, res))

router.post('/signin', async (req: any, res: any) => await owner.SingInOwner(req, res))

router.get('/confirm-authentication', async (req: any, res: any) => await owner.Authenticate(req, res))

router.post('/send-password', async (req: any, res: any) => await owner.SendNewPasswordOwner(req, res))

router.post('/new-password', async (req: any, res: any) => await owner.NewPasswordOwner(req, res))

// OAuth con google
router.get('/google', passport.authenticate('google', { scope: ["profile", "email"] }));

router.get('/google/OAuth', passport.authenticate('google', { failureRedirect: ACSESS_URL }),
    function (req: any, res:any) {
        res.status(302);
        req.session.restaurantSession = req.user
        res.redirect(`${ACSESS_URL}/dashboard`);
    }
);

router.get('/logout', (req: any, res: any) => {
    req.session = null;
    req.logout();
    res.redirect('/');
})

module.exports = router;