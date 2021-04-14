const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
import IOwner from '../../MODEL/INTERFACE/owner-interface';

class Owner{

    constructor(private model: IOwner){}

    public AddOwnerUserPassword (): any {
        passport.use('signup', new localStrategy({
            usernameField: 'email',
            passwordField: 'password'
        }, async (email: string, password: string, done: any) => {
            await this.model.SingUpOwner(email, password, done)
        }))
        
        passport.use('login', new localStrategy({
            usernameField: 'email',
            passwordField: 'password',
        }, async (email: string, password: string, done: any) => {
            await this.model.SingInOwner(email, password, done)
        }))
    }

    public AddOwnerGoogle (): any {

    }
}

export default Owner;