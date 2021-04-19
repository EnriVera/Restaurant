const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken')

interface smtpOwner {
    name: string,
    email: string,
    password: string,
}
class SMTPController {

    public async SendEmail(varible: string, token: string): Promise<any> {
        const { SMTP_HOTS, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env
        const transporter = await nodemailer.createTransport({
            host: SMTP_HOTS,
            port: SMTP_PORT,
            secure: false,
            auth: {
                user: SMTP_USER,
                pass: SMTP_PASS
            }
        })

        const message = await this.message(varible, token)

        return new Promise((resolve: any, reject: any) => {
            transporter.sendMail(message, (err, info) => {
                if (err) {
                    console.log('Error occurred. ' + err.message);
                    resolve(false);
                }
    
                console.log('Message sent: %s', info.messageId);
                console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
                resolve(true);
            })
        })
    }

    public async message(varible: string, token: string): Promise<Object>{
        const {URL,SECRET_JWT} = process.env;
        const infoOwner: smtpOwner = await jwt.verify(token, SECRET_JWT).owner
        switch (varible)
        {
            case "confirm_authentication":
                return {
                    from: 'Sender Name <veracarlosenrique99@gmail.com>',
                    to: `Recipient <${infoOwner.email}>`,
                    subject: 'Confirm Authentication ✔',
                    text: `Hello to ${infoOwner.name}!`,
                    html: `
                    <div>
                        <h1>
                            <b>
                                Hello
                            </b>
                            ${infoOwner.name}!
                        </h1>
                        </br>
                        <h3>
                            Click on the link to confirm the authentication:
                        </h3>
                        </br>
                        <a href="${URL}owner/confirm-authentication?authentication=${token}">
                            Confirm Authentication
                        </a>
                    </div>
                    `
                };
                break;
            default:
                break;
        }
    }
}

export default SMTPController;