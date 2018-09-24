require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET)

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
        }
        
}