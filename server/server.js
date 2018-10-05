require('dotenv').config();
const express = require('express');
const session = require('express-session');
const massive = require('massive');
const ctrl = require('./controller');
const bodyParser = require('body-parser');



const app = express();
app.use(bodyParser.json());
app.use( express.static( `${__dirname}/../build` ) );
// const checkUserSession = require('./checkUserSession')

const {
SERVER_PORT,
SESSION_SECRET,
DB_CONNECTION,
ENVIRONMENT
} = process.env

//*****************SESSIONS*****************//
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized:true
  }))

// app.use(checkUserSession)

app.use((req,res,next) => {
    if (ENVIRONMENT === 'dev') {
        req.app.get('db').set_data().then(userData => {
            req.session.user = userData[0]
            next();
        })
    } else {
        next();
    }
})

// *******AUTH0***************************//
app.get(`/auth/callback/`, ctrl.login)
app.get(`/api/user-data/`, ctrl.userData) 
app.get('/logout/', ctrl.logout) 


// ************ENDPOINTS**************** //
app.get('/api/products/', ctrl.getProducts)
app.get('/api/products/shirts', ctrl.getShirts)
app.get('/api/products/mugs', ctrl.getMugs)
app.get('/api/products/hats', ctrl.getHats)
app.get('/api/products/bags', ctrl.getBags)
app.get('/api/products/stickers', ctrl.getStickers)

app.post('/api/cart/', ctrl.addToCart)
app.get('/api/cart/', ctrl.getCart)
app.put(`/api/cart/:cart_id`, ctrl.increaseProductQty)
app.put(`/api/cart/:cart_id`, ctrl.decreaseProductQty)
app.delete(`/api/cart/:cart_id`, ctrl.deleteProduct)
app.delete(`/api/cartData/`, ctrl.deleteCart)


// ****************NODEMAILER**************/
app.post('/api/email/', ctrl.sendEmailToCustomer)


//****************STRIPE*******************/
app.post('/api/payment/', ctrl.handlePayment)



//****************LISTENINGTOPORT******* //
app.listen(SERVER_PORT, () => {
    console.log(`Listening on port ${SERVER_PORT}`)
})

massive(DB_CONNECTION).then(db=>app.set('db',db));