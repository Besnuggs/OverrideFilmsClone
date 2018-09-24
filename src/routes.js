import React from 'react';
import {Switch, Route} from 'react-router-dom';
import dashboard from './components/dashboard/dashboard';
import account from './components/account/account';
import cart from './components/cart/cart';
import portfolio from './components/portfolio/portfolio';
import shop from './components/shop/shop'
import about from './components/about/about';

export default (
    <Switch>
        <Route exact path="/" component={dashboard} />
        <Route path="/account" component={account} />
        <Route path="/cart" component={cart} />
        <Route path="/portfolio" component={portfolio} />
        <Route path="/shop" component={shop} />
        <Route path="/about" component={about} />
    </Switch>
)