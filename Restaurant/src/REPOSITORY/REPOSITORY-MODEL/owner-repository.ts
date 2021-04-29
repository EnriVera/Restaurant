const bcrypt = require('bcrypt');
const axios = require('axios');
const jwt = require('jsonwebtoken')
const { sequelize } = require("../../REPOSITORY/DTO/sequelize/sequelize");
const EventEmitter = require('events')
import EntityOwner from "../../MODEL/ENTITY/owner.entity";
import IOwner from "../../MODEL/INTERFACE/owner-interface"

class Emisor extends EventEmitter { }

const emisor = new Emisor();

const { SMTP, SECRET_JWT } = process.env;
class OwnerRepository implements IOwner {

    public async SingUpOwner(token: string): Promise<any> {
        const owner: typeof EntityOwner.owner_smtp = await jwt.verify(token, SECRET_JWT).owner;
        return await new Promise((resolve, reject) => {
            sequelize.query(`INSERT INTO owner(id, email, password, name) VALUES (uuid_generate_v4(), '${owner.email}', '${owner.password}', '${owner.name}');`)
                .then(() => emisor.emit('signupOwner'))
                .catch(() => { reject({ status: false, message: { message: 'Insert not complete' } }) });

            emisor.on('signupOwner', async () => {
                resolve(await this.ReturnOwner(owner))
            })

        })
    }

    public async NewPassword(tokenUser: string, tokenPassword: string): Promise<any> {
        try{
            const owner: typeof EntityOwner.owner_smtp = await jwt.verify(tokenUser, SECRET_JWT).owner;
            const password: typeof EntityOwner.owner_smtp = await jwt.verify(tokenPassword, SECRET_JWT).owner;
            return await new Promise((resolve, reject) => {
                sequelize.query(`UPDATE owner SET password='${password.password}' WHERE email = '${owner.email}'`)
                    .then(() => emisor.emit('new-password-owner'))
                    .catch(() => resolve({ status: false, message: { message: 'Error in update' } }));
    
                emisor.on('new-password-owner', async () => {
                    resolve(await this.ReturnOwner(owner))
                })
            })
        }
        catch (error){
            return { status: false, message: { message: 'Error info of user' } }
        }
    }

    public async SingInOwner(token: string): Promise<any> {
        const owner: typeof EntityOwner.owner_smtp = await jwt.verify(token, SECRET_JWT).owner;
        return await new Promise(async (resolve, reject) => {
            const sql = await sequelize.query(` SELECT * FROM owner WHERE email = '${owner.email}';`);
            if (sql[1].rowCount === 0) {
                resolve({ status: false, message: { message: 'User not found' } })
            }
            else {

                let sqlowner: typeof EntityOwner.owner_no_restaurant = sql[0][0];

                const validPassword = await bcrypt.compare(owner.password, sqlowner.password)

                if (!validPassword) {
                    resolve({ status: false, message: { message: 'Wrong password' } })
                }

                const token = jwt.sign({ owner: sqlowner }, SECRET_JWT, {
                    expiresIn: 60 * 60 * 24 * 7 // equivalente a 7 dias
                })

                resolve({ status: true, message: { message: 'SingIn successfull' }, token: token })
            }
        })
    }

    public async sendMail(varible: string, token: string): Promise<any> {
        const owner: typeof EntityOwner.owner_smtp = await jwt.verify(token, SECRET_JWT).owner;
        const ownerSQL = await sequelize.query(` SELECT * FROM owner WHERE email = '${owner.email}';`);
        return new Promise(async (resolve, reject) => {
            if (ownerSQL[1].rowCount > 0) {
                resolve({ status: false, message: { message: 'Email not valid' } })
            }
            else {
                if (owner.password !== undefined) owner.password = await bcrypt.hash(owner.password, 10);

                const newtoken = await jwt.sign({ owner: owner }, SECRET_JWT)

                await axios.post(`${SMTP}send-email`, { varible: varible }, { headers: { "token": newtoken } })
                    .then((data: any) => resolve({ status: true, message: { message: "Send Mail" } }))
                    .catch((data: any) => resolve({ status: false, message: { message: "Not Send Mail" } }))
            }

        })
    }

    public async OwnerGoogle(user_google: typeof EntityOwner.google, done: any): Promise<void> {
        const user: typeof EntityOwner.google = user_google;
        const ownerSQL = await sequelize.query(` SELECT * FROM owner WHERE email = '${user.email}';`);
        if (ownerSQL[1].rowCount > 0) {
            let owner: typeof EntityOwner.owner_no_restaurant = ownerSQL[0][0];
            if (owner.googleVerified === false) {
                sequelize.query(`UPDATE owner SET logo = '${owner.logo}', googleID = '${owner.googleID}', googleVerified = ${owner.googleVerified} WHERE email = '${owner.email}'`)
                    .then(() => emisor.emit('googleOwner'))
                    .catch(() => done(null, false, { message: 'Error in update' }))
            }
            else { emisor.emit('googleOwner') }
        }
        else {
            sequelize.query(`INSERT INTO owner(id, name, email, logo, googleID, googleVerified) VALUES (uuid_generate_v4(), '${user.displayName}', '${user.email}', '${user.photo}', '${user.id}', '${user.verified}');`)
                .then(() => emisor.emit('googleOwner'))
                .catch(() => { done(null, false, { message: 'Insert not complete' }) });
        }

        emisor.on('googleOwner', async () => {
            const info = await this.ReturnOwner(user)
            info.status ? done(null, info.token, info.message) : done(null, false, info.message)
        })
    }


    public async ReturnOwner(owner: any): Promise<any> {
        return await new Promise(async (resolve, reject) => {
            await sequelize.query(`SELECT * FROM owner WHERE email = '${owner.email}';`)
                .then((data: any) => {
                    const owner: typeof EntityOwner.owner_no_restaurant = data[0][0];
                    const token = jwt.sign({ owner: owner }, SECRET_JWT, {
                        expiresIn: 60 * 60 * 24 * 7 // equivalente a 7 dias
                    })
                    resolve({ status: true, message: { message: 'SingUp successfull' }, token: token })
                })
                .catch(() => { resolve({ status: false, message: { message: 'Error SingUp' } }) });
        })
    }

}

export default OwnerRepository;