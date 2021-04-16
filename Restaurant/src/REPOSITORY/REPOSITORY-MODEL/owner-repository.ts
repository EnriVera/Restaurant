const bcrypt = require('bcrypt');
const { sequelize } = require("../../REPOSITORY/DTO/sequelize/sequelize");
const EventEmitter = require('events')
import Owner from "../../MODEL/ENTITY/owner.entity";
import IOwner from "../../MODEL/INTERFACE/owner-interface"

class Emisor extends EventEmitter{ }

const emisor = new Emisor();

class OwnerRepository implements IOwner{

    public async SingUpOwner(email: string, password: string, done: any): Promise<any> {
        try {
            const owner = await sequelize.query(` SELECT * FROM owner WHERE email = '${email}';`);
            if(owner[1].rowCount > 0) 
                return done(null, false, {message: 'Email not valid'})
            else
            { 
                sequelize.query(`INSERT INTO owner(id, email, password, name) VALUES (uuid_generate_v4(), '${email}', '${await bcrypt.hash(password, 10)}', '${name}');`)
                    .then(() => emisor.emit('signupOwner'))

                emisor.on('signupOwner', () => {
                    sequelize.query(`SELECT * FROM owner WHERE email = '${email}';`)
                        .then((data: any) => {return done(null, data[0][0], { message: 'SingUp successfull' })});
                })
            }
        } catch (err) {
            return done(err)
        }
    }

    public async SingInOwner(email: string, password: string, done: any): Promise<any> {
        try {
            const sqlowner = await sequelize.query(` SELECT * FROM owner WHERE email = '${email}';`);
            if (sqlowner[1].rowCount === 0) {
                return done(null, false, { message: 'User not found' })
            }
            const owner: Owner = sqlowner[0][0];
            
            const validPassword = await bcrypt.compare(password, owner.password)
    
            if (!validPassword) {
                return done(null, false, { message: 'Wrong password' })
            }
    
            return done(null, owner, { message: 'Login successfull' })
        } catch (e) {
            return done(e)
        }
    }

    public AddOwnerGoogle(): any {
    }
    
}

export default OwnerRepository;