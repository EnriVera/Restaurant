const jwt = require('jsonwebtoken')

export const Session = (req: any, res: any, next: any) => {
    const session = req.session;
    const {SECRET_JWT} = process.env;
    if(session) {
        try{
            req.user = jwt.verify(session.user, SECRET_JWT).owner;
            next();
        }
        catch(e) {
            res.status(401).json({message: "Not session"})
        }
    }
    else {
        res.status(401).json({message: "Not session"})
    }
}


export const SessionJson = (req: any, res: any) => {
    const session = req.session;
    const {SECRET_JWT} = process.env;
    if(session) {
        try{
            jwt.verify(session.user, SECRET_JWT).owner;
            res.status(200).json({message: "True"})
        }
        catch(e) {
            res.status(401).json({message: "Not session"})
        }
    }
    else {
        res.status(401).json({message: "Not session"})
    }
}