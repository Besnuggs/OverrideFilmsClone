import React, {Component} from 'react'
import './dashboard.css'
import styled from 'styled-components'

const AppDiv = styled.div`
    text-align: center;
    color:red;
    font-size: 72px;
    `

class Dashboard extends Component {


    render() { 

        return (
            <AppDiv>
            <div className="dashboard">
                <h1>home</h1>   
            </div>
            </AppDiv>
          );
    }
}
 
export default Dashboard;