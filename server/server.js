require('dotenv').config();
const express = require('express');
const session = require('express-session');
const axios = require('axios');
const massive = require('massive');
const ctrl = require('./controller')

const app = express();
const {
SERVER_PORT,
SESSION_SECRET,
DB_CONNECTION,
REACT_APP_DOMAIN,
REACT_APP_CLIENT_ID,
CLIENT_SECRET

} = process.env

//*****************SESSIONS*****************//
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized:true
  }))


// ************ENDPOINTS**************** //
app.get('/api/products/', ctrl.getProducts)
app.post('/api/cart', ctrl.addToCart)
app.post('/api/payment', ctrl.handlePayment)



//****************LISTENINGTOPORT******* //
app.listen(SERVER_PORT, () => {
    console.log(`Listening on port ${SERVER_PORT}`)
})

massive(DB_CONNECTION).then(db=>app.set('db',db));