const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
import IOwner from '../../MODEL/INTERFACE/owner-interface';

class Owner{

    constructor(private model: IOwner){}

    public AddOwnerUserPassword (name: string): void {
        passport.use('signup', new localStrategy({
            usernameField: 'email',
            passwordField: 'password'
        }, async (email: string, password: string, done: any) => {
            await this.model.sendMail({email: email, password: password, name: name}, done)
        }))
        
        passport.use('login', new localStrategy({
            usernameField: 'email',
            passwordField: 'password',
        }, async (email: string, password: string, done: any) => {
            await this.model.SingInOwner(email, password, done)
        }))
    }

    public async Authenticate(token: string): Promise<any> {
        return await this.model.SingUpOwner(token)
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
            function (token: any, tokenSecret: any, profile: any, done: any) {
                console.log("Token: ", token);
                console.log("TokenSecret: ", tokenSecret);
                console.log("GoogleStrategy: ", profile)
                return done(null, profile);
            }
        ));
    }
}

export default Owner;