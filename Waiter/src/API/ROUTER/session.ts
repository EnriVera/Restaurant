const jwt = require('jsonwebtoken')

export default function Session(req: any, res: any, next: any) {
    const session = req.session;
    const {SECRET_JWT} = process.env;
    if(session) {
        req.user = jwt.verify(session.user, SECRET_JWT).owner;
        next();
    }
    else {
        res.status(401).json(new Error("Not session"))
    }
}