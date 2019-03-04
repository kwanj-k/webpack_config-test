import React, { Component } from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import Login from '../Login';


class Home extends Component {
    render(){
        return(
            <div>
                <div className="helper">
                    <h1>Store Manager.inc</h1>
                    <p>Store Manager is a web application that helps store owners manage sales and product inventory records. 
                        This application is meant for use in a single store.</p>
                        <p>Store Manager is a web application that helps store owners manage sales and product inventory records. 
                                This application is meant for use in a single store.</p>
                    <div className="start">
                        <Link to="signup"><input type="submit" value="Get Started"/></Link>
                    </div>
                    
                </div>
                < Login />
            </div>
        );
    }
}
export default Home;
