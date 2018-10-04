import React, {Component} from 'react';
import './account.css'


export default class account extends Component{

    login(){
        let {REACT_APP_DOMAIN, REACT_APP_CLIENT_ID} = process.env
        // url = 'http://localhost:3000/auth/callback'
        let url = `${encodeURIComponent(window.location.origin)}/auth/callback`;
        window.location = `https://${REACT_APP_DOMAIN}/authorize?client_id=${REACT_APP_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${url}&response_type=code`
    }

    render(){
        return(
            <div className="account">
            <button onClick={this.login}>Login</button>

             <a href={process.env.REACT_APP_LOGIN}>
                <button>
                    Logout
                </button>
                </a>
            </div>
        )
    }
}