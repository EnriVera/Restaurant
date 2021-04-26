const express = require("express")
import SMTPController from "../CONTROLLER/smtp-controller"
const router = express.Router();

const smtp = new SMTPController();

router.post('/send-email', async (req, res) => {
    const respon: any = await smtp.SendEmail(req.body.varible, req.header("token"))
    if(respon){
        res.status(200)
        res.json({})
    }
    else { 
        res.status(404)
        res.json({})
    }
})


export default router;