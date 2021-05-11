const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
import IOwner from '../../MODEL/INTERFACE/owner-interface';
import {owner_json} from "../../MODEL/ENTITY/owner.entity"
import OwnerRepository from "../../REPOSITORY/REPOSITORY-MODEL/owner-repository"

interface Tinfo {
    status: boolean,
    message: string,
    token: string
}
class Owner{

    public model: IOwner = new OwnerRepository();

    public async ValidateUser(req: any, res: any, next: any) {
        console.log(req.session);
        res.json({message: "True"})
        // if (req.user) {
        //     next();
        // } else {
        //     res.sendStatus(401);
        // }
    }
    public async SingUpOwner(req: any, res: any) {
        const info: Tinfo = await this.model.sendMail("confirm_authentication", req.header("oauth"));
        this.SendNotToken(info, res)
    }

    public async SingInOwner(req: any, res: any) {
        const info: Tinfo = await this.model.SingInOwner(req.header("oauth"));
        await this.SendToken(info, req, res);
    }

    public async SendNewPasswordOwner(req: any, res: any) {
        const info: Tinfo = await this.model?.sendMail("new_password", req.header("new-password"));
        this.SendNotToken(info, res)
    }

    public async NewPasswordOwner(req: any, res: any) {
        const info: Tinfo = await this.model?.NewPassword(req.query.v, req.header("new-password"))
        this.SendNotToken(info, res);
    }

    public async Authenticate(req: any, res: any) {
        const info = await this.model?.SingUpOwner(req.query.authentication)
        this.SendToken(info, req, res);
    }

    private async SendToken(info: any, req: any, res: any) {
        if(info.status){
            /* Bearer */
            req.session.user = `${info.token}`
            const jsonToken: owner_json = info.token
            res.status(200).cookie('Authorization', `Bearer ${jsonToken}`).send(info.message)
        }
        else { 
            res.status(404);
            res.json(info.message);
        }
    }

    private async SendNotToken(info: any, res: any) {
        if(info.status){
            res.status(200);
            res.json(info.message);
        }
        else { 
            res.status(404);
            res.json(info.message);
        }
    }

    public AddOwnerGoogle(): void {
        passport.serializeUser(function (user: any, done: any) {
            return done(null, user);
        });

        passport.deserializeUser(function (user: any, done: any) {
            return done(null, user);
        });

        passport.use(new GoogleStrategy({
            clientID: process.env.GOOGLE_CONSUMER_KEY,
            clientSecret: process.env.GOOGLE_CONSUMER_SECRET,
            callbackURL: process.env.OAUTH_URL
        },
            async  (token: any, tokenSecret: any, profile: any, done: any) => {
                return await this.model?.OwnerGoogle(
                    {
                        id: profile.id, 
                        displayName: profile.displayName, 
                        email: profile.emails[0].value, 
                        verified: profile.emails[0].verified, 
                        photo: profile.photos[0].value
                    }, done)
            }
        ));
    }
}

export default Owner;