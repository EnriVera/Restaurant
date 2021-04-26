const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
import IOwner from '../../MODEL/INTERFACE/owner-interface';

interface Tinfo {
    status: boolean,
    message: string,
    token: string
}
class Owner{

    constructor(private model: IOwner){}

    public AddOwnerUserPassword (name: string): void {
        passport.use('signup', new localStrategy({
            usernameField: 'email',
            passwordField: 'password'
        }, async (email: string, password: string, done: any) => {
            // await this.model.sendMail("confirm_authentication", {email: email, password: password, name: name}, done)
        }))
        
        passport.use('login', new localStrategy({
            usernameField: 'email',
            passwordField: 'password',
        }, async (email: string, password: string, done: any) => {
            await this.model.SingInOwner(email, password, done)
        }))
    }


    public async SingUpOwner(req: any, res: any) {
        const info: Tinfo = await this.model.sendMail("confirm_authentication", req.header("oauth"));
        if(info.status){
            res.status(200);
            res.json(info.message);
        }
        else { 
            res.status(404);
            res.json(info.message);
        }
    }

    public async SingInOwner(req: any, res: any) {
        const info: Tinfo = await this.model.sendMail("confirm_authentication", req.header("oauth"));
        if(info.status){
            res.status(200);
            res.json(info.message);
        }
        else { 
            res.status(404);
            res.json(info.message);
        }
    }

    public async SendNewPasswordOwner(req: any, res: any) {
        const info: Tinfo = await this.model.sendMail("new_password", req.header("new-password"));
        if(info.status){
            res.status(200);
            res.json(info.message);
        }
        else { 
            res.status(404);
            res.json(info.message);
        }
    }

    public async NewPasswordOwner(req: any, res: any) {
        const info: Tinfo = await this.model.NewPassword(req.body.v)
        if(info.status){
            res.status(200);
            res.session = "Bearer"+info.token;
            res.cookie("session", "Bearer"+info.token)
            res.header("Access-Control-Allow-Session", "Bearer"+info.token)
            res.json(info.message);
        }
        else { 
            res.status(404);
            res.json(info.message);
        }
    }

    public async Authenticate(req: any, res: any): Promise<any> {
        const info = await this.model.SingUpOwner(req.query.authentication)
        if(info.status){
            res.status(200);
            res.session = "Bearer"+info.token;
            res.cookie("session", "Bearer"+info.token)
            res.header("Access-Control-Allow-Session", "Bearer"+info.token)
            res.json(info.message);
        }
        else { 
            res.status(404);
            res.json(info.message);
        }
    }

    public AddOwnerGoogle(): void {
        passport.serializeUser(function (user: any, done: any) {
            console.log("serializeUser: ", user)
            return done(null, user);
        });

        passport.deserializeUser(function (user: any, done: any) {
            console.log("deserializeUser: ", user)
            return done(null, user);
        });

        passport.use(new GoogleStrategy({
            clientID: process.env.GOOGLE_CONSUMER_KEY,
            clientSecret: process.env.GOOGLE_CONSUMER_SECRET,
            callbackURL: process.env.OAUTH_URL
        },
            async  (token: any, tokenSecret: any, profile: any, done: any) => {
                return await this.model.OwnerGoogle(
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