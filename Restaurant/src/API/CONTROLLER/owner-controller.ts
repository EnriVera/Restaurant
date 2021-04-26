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

    public async SingUpOwner(req: any, res: any) {
        const info: Tinfo = await this.model.sendMail("confirm_authentication", req.header("oauth"));
        this.SendNotToken(info, res)
    }

    public async SingInOwner(req: any, res: any) {
        const info: Tinfo = await this.model.SingInOwner(req.header("oauth"));
        await this.SendToken(info, res);
    }

    public async SendNewPasswordOwner(req: any, res: any) {
        const info: Tinfo = await this.model.sendMail("new_password", req.header("new-password"));
        this.SendNotToken(info, res)
    }

    public async NewPasswordOwner(req: any, res: any) {
        const info: Tinfo = await this.model.NewPassword(req.body.v)
        this.SendToken(info, res);
    }

    public async Authenticate(req: any, res: any) {
        const info = await this.model.SingUpOwner(req.query.authentication)
        this.SendToken(info, res);
    }

    private async SendToken(info: any, res: any) {
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