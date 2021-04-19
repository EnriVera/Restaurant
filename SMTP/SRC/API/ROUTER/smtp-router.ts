const express = require("express")
import SMTPController from "../CONTROLLER/smtp-controller"
const router = express.Router();

const smtp = new SMTPController();

router.post('/send-email', async (req, res) => {
    const respon: any = await smtp.SendEmail(req.body.varible, req.header("verifytoken"))
    if(respon){
        res.status(200)
        res.json({message: "Send Mail"})
    }
    else { 
        res.status(404)
        res.json({message: "Not Send Mail"})
    }
})


export default router;