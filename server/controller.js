require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET)
const {REACT_APP_CLIENT_ID, CLIENT_SECRET, REACT_APP_DOMAIN, REACT_APP_LOGIN} = process.env
const axios = require('axios');
const nodemailer = require('nodemailer')
const smtpTransport = require('nodemailer-smtp-transport')

module.exports={
getProducts: (req,res,next) => {
        const db = req.app.get('db');
        db.getProducts().then(products => {
            res.status(200).send(products)
        }).catch(err =>{
            console.log(err);
            res.status(500).send(err)
        })
    },
increaseProductQty: (req,res,next) => {
const {quantity} = req.body
const {cart_id} = req.params
const user_id = req.session.user.user_id
const db = req.app.get('db');
db.editProductQty([quantity, cart_id, user_id]).then(cart => {
    console.log(cart)
    res.status(200).send(cart)
}).catch(err => {
    console.log(err);
    res.status(500).send(err)
})
},
decreaseProductQty: (req,res,next) => {
    const {quantity} = req.body
    const {cart_id} = req.params
    const user_id = req.session.user.user_id
    const db = req.app.get('db');
    db.editProductQty([quantity, cart_id, user_id]).then(cart => {
        console.log(cart)
        res.status(200).send(cart)
    }).catch(err => {
        console.log(err);
        res.status(500).send(err)
    })
},
addToCart: (req,res,next) => {
    console.log(req.session)
    const user_id = req.session.user.user_id
    const {id} = req.body
    const product_id = id
    const quantity = 1
    const db = req.app.get('db')
    db.checkCart({product_id}).then((response) => {
    if (response.length === 0) {
    db.addToCart({user_id, product_id, quantity})
    .then(cart => {
        res.status(200).send(cart)
    }).catch(err => {
        console.log(err);
        res.status(500).send(err)
    })
    } else {
        response.length
    }
 })    
},
deleteProduct: (req,res,next) => {
   const {cart_id} = req.params
   const user_id = req.session.user.user_id
   const db = req.app.get('db');
   db.deleteProduct({cart_id, user_id}).then (cart => {
       res.status(200).send(cart)
       console.log(cart)
   }).catch(err => {
       console.log(err);
       res.status(500).send(err)
   })
},
getCart: (req, res, next) => {
    const user_id = req.session.user.user_id
    const db = req.app.get('db');
    db.getCart({user_id}).then( cart => {
        res.status(200).send(cart)
    }).catch(err => {
        console.log(err);
        res.status(500).send(err)
    })
},
getShirts: (req,res,next) => {
        const db = req.app.get('db');
        db.getShirts().then(products => {
            res.status(200).send(products)
        }).catch(err => {
            console.log(err);
            res.status(500).send(err)
        })
},
getMugs: (req,res,next) => {
    const db = req.app.get('db');
    db.getMugs().then(products => {
        res.status(200).send(products)
    }).catch(err => {
        console.log(err);
        res.status(500).send(err)
    })
},
getBags: (req,res,next) => {
        const db = req.app.get('db');
        db.getBags().then(products => {
            res.status(200).send(products)
        }).catch(err => {
            console.log(err);
            res.status(500).send(err)
        })
},
getHats: (req, res, next) => {
    const db = req.app.get('db');
    db.getHats().then(products => {
        res.status(200).send(products)
    }).catch(err => {
        console.log(err);
        res.status(500).send(err)
    })
},
getStickers: (req, res, next) => {
    const db = req.app.get('db');
    db.getStickers().then(products => {
        res.status(200).send(products)
    }).catch(err => {
        console.log(err);
        res.status(500).send(err);
    })
},
handlePayment: (req, res) => {
        const { amount, token:{id}} = req.body
        stripe.charges.create(
            {
                amount: amount,
                currency: "usd",
                source: id,
                description: "Test charge from Brady"
            }
            ,
            (err, charge) => {
                if(err) {
                    console.log(err)
                    return res.status(500).send(err)
                } else {
                    console.log(charge)
                    return res.status(200).send(charge)
                }
            })
        },
sendEmailToCustomer: (req,res,next) => {
const {USR,PASS} = process.env
const email = req.session.user.email
const name = req.session.user.user_name
let transporter = nodemailer.createTransport(smtpTransport({
    server:'gmail',
    host:'smtp.gmail.com',
    secure: false,
    auth: {
        user:USR,
        pass:PASS
    },
    tls: {
        rejectUnauthorized: false
    }
}))
const mailOptions = {
    from: 'overriddenFilms@gmail.com',
    to: `${email}`,
    subject: 'Order Confirmation',
    html: `<p>Thank you for your purchase, ${name}!</p>`
}
transporter.sendMail
(mailOptions, (error, info) => {
    if (error) {
        console.log(error)
    } else {
        console.log('email has been sent!', info)
    }
})
},
deleteCart: (req,res,then) => {
let user_id = req.session.user.user_id
console.log(user_id)
const db = req.app.get('db')
db.deleteCartData({user_id}).then(cart => {
res.status(200).send(cart)
}).catch(err => {
    console.log(err);
    res.status(500).send(err);
})
},
login:  async (req,res, next) => {
            //code ---> req.query.code
            let payload = {
                client_id: REACT_APP_CLIENT_ID,
                client_secret: CLIENT_SECRET,
                code: req.query.code,
                grant_type: 'authorization_code',
                redirect_uri: `http://${req.headers.host}/auth/callback`
            }
            //post request with code for token
           let tokenRes = await axios.post(`https://${REACT_APP_DOMAIN}/oauth/token`, payload);
           //use token to get user data
           let userRes = await axios.get(`https://${REACT_APP_DOMAIN}/userinfo?access_token=${tokenRes.data.access_token}`)
           console.log()
        
            const db = req.app.get('db');
            const {email, name, picture, sub} = userRes.data;
        
            let foundUser = await db.find_user([sub])
            if (foundUser[0]) {
                req.session.user = foundUser[0];
            } else {
               let createdUser = await db.create_user([ name, email, picture, sub ]);
               // [ {name, email, picture, auth_id }]
               req.session.user = createdUser[0]
            }
            res.redirect('/#/shop/');
        },
userData: (req,res, next) => {
    if (req.session.user) {
        res.status(200).send(req.session.user);
    } else {
        res.status(401).send('Go log in.')
    }
},
logout: (req, res, next) => {
    req.session.destroy();
    res.redirect(`${REACT_APP_LOGIN}`)
}  
}