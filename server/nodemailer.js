require('dotenv').config()
let nodemailer = require('nodemailer')
let smtpTransport = require('nodemailer-smtp-transport')



  let {RGE,EPW} = process.env
  // console.log(RGE, EPW)
  let transporter = nodemailer.createTransport(smtpTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    secure: false,
    auth: {
      user: RGE,
      pass: EPW
    },
    tls: {
      rejectUnauthorized: false
    }
    
  }))

  let mailOptions = {
    from: 'buymystuff@gmail.com',
    to: 'bradyesnuggs@gmail.com',
    subject: 'Order Confirmation',
    text: 'Thank you for your purchase from Overriden Films Shop!'
  }

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error)
    } else {
      console.log('email has been sent', info)
    }
  })
