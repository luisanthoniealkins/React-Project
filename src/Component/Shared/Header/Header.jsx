import React from 'react';
import './Header.css';

import Home from '../../../Page/Home/Home'
import Feedback from '../../../Page/FeedBack/Feedback'
import Blog from '../../../Page/Blog/Blog'
import Target from '../../../Page/Target/Target'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class Header extends React.Component{
    render(){
        return(
            <Router>      
                <main class="header">
                    <aside class="welcomebar">Welcome!</aside>
                    <section class="nav">
                        <div class = "dropbtn">Navigation</div>
                        <nav class="nav-right">  
                            <Link to="/" class="active">Home</Link>
                            <Link to="/target">Target</Link>
                            <Link to="/blog">Blog</Link>
                            <Link to="/feedback">Feedback</Link>
                        </nav>
                    </section>                
                </main>

                <div class="wh100 flex-center martop100p">
                    
                    <Switch>
                        <Route path="/target">
                            <Target />
                        </Route>
                        <Route path="/blog">
                            <Blog />
                        </Route>
                        <Route path="/feedback">
                            <Feedback />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default Header;