const bcrypt = require('bcrypt');
const axios = require('axios');
const jwt = require('jsonwebtoken')
const { sequelize } = require("../../REPOSITORY/DTO/sequelize/sequelize");
const EventEmitter = require('events')
import EntityOwner from "../../MODEL/ENTITY/owner.entity";
import IOwner from "../../MODEL/INTERFACE/owner-interface"

class Emisor extends EventEmitter { }

const emisor = new Emisor();
class OwnerRepository implements IOwner {

    public async SingUpOwner(token: string): Promise<any> {
        const { SECRET_JWT } = process.env;
        let owner = EntityOwner.owner_smtp;
        owner = await jwt.verify(token, SECRET_JWT).owner;
        return await new Promise((resolve, reject) => {
            sequelize.query(`INSERT INTO owner(id, email, password, name) VALUES (uuid_generate_v4(), '${owner.email}', '${owner.password}', '${owner.name}');`)
                .then(() => emisor.emit('signupOwner'))
                .catch(() => { reject({ status: false, message: { message: 'Insert not complete' } }) });

            emisor.on('signupOwner', async () => {
                await sequelize.query(`SELECT * FROM owner WHERE email = '${owner.email}';`)
                    .then((data: any) => {
                        let owner = EntityOwner.owner_no_restaurant;
                        owner = data[0][0];
                        const token = jwt.sign({ owner: owner }, SECRET_JWT, {
                            expiresIn: 60 * 60 * 24 * 7 // equivalente a 7 dias
                        })
                        resolve({ status: true, message: { message: 'SingUp successfull' }, token: token }) 
                    })
                    .catch(() => { reject({ status: false, message: { message: 'Error SingUp' } }) });
            })

        })
    }

    public async SingInOwner(email: string, password: string, done: any): Promise<any> {
        try {
            const sqlowner = await sequelize.query(` SELECT * FROM owner WHERE email = '${email}';`);
            if (sqlowner[1].rowCount === 0) {
                return done(null, false, { message: 'User not found' })
            }
            let owner = EntityOwner.owner_no_restaurant;
            owner = sqlowner[0][0];

            const validPassword = await bcrypt.compare(password, owner.password)

            if (!validPassword) {
                return done(null, false, { message: 'Wrong password' })
            }

            return done(null, owner, { message: 'Login successfull' })
        } catch (e) {
            return done(e)
        }
    }

    public async sendMail(ownerObj: typeof EntityOwner.owner_smtp, done: any): Promise<any> {
        const { SMTP, SECRET_JWT } = process.env
        let owner = EntityOwner.owner_smtp;
        owner = ownerObj;
        const ownerSQL = await sequelize.query(` SELECT * FROM owner WHERE email = '${owner.email}';`);
        if (ownerSQL[1].rowCount > 0)
            return done(null, false, { message: 'Email not valid' })
        owner.password = await bcrypt.hash(owner.password, 10);
        const token = await jwt.sign({ owner: owner }, SECRET_JWT)
        await axios.post(`${SMTP}send-email`, { varible: "confirm_authentication" }, { headers: { "verifytoken": token } })
            .then(({ message }: any) => {
                return done(null, true, message)
            })
            .catch(({ message }: any) => { return done(null, false, message) })
    }

    public AddOwnerGoogle(): any {
    }

}

export default OwnerRepository;