require('dotenv').config();
const express = require('express');
const session = require('express-session');
const massive = require('massive');
const ctrl = require('./controller');
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.json());

const {
SERVER_PORT,
SESSION_SECRET,
DB_CONNECTION
} = process.env

//*****************SESSIONS*****************//
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized:true
  }))
// *******AUTH0*******************************//
app.get(`/auth/callback`, ctrl.login)
app.get(`/api/user-data`, ctrl.userData) 
app.get('/logout', ctrl.logout) 


// ************ENDPOINTS**************** //
app.get('/api/products/', ctrl.getProducts)


//****************STRIPE*********************** */
app.post('/api/payment/', ctrl.handlePayment)



//****************LISTENINGTOPORT******* //
app.listen(SERVER_PORT, () => {
    console.log(`Listening on port ${SERVER_PORT}`)
})

massive(DB_CONNECTION).then(db=>app.set('db',db));