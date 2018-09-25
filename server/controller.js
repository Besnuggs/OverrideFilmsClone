require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET)
const {REACT_APP_CLIENT_ID, CLIENT_SECRET, REACT_APP_DOMAIN} = process.env
const axios = require('axios');

module.exports={
getProducts: (req,res,then) => {
        const db = req.app.get('db');
        db.getProducts().then(products => {
            res.status(200).send(products)
        }).catch(err =>{
            console.log(err);
            res.status(500).send(err)
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
            },
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
login:  async (req,res) => {
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
            res.redirect('/#/cart/');
        },
userData: (req,res) => {
    if (req.session.user) {
        res.status(200).send(req.session.user);
    } else {
        res.status(401).send('Go log in.')
    }
},
logout: (req, res) => {
    req.session.destroy();
    res.redirect('http://localhost:3000/')
}  
}