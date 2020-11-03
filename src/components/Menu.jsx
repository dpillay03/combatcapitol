import React from "react";
import Home from './Home.jsx';
import MMA from './MMA.jsx';
import Boxing from './Boxing.jsx';
import Wrestling from './Wrestling.jsx';
import MuayThai from './MuayThai.jsx';
import Judo from './Judo.jsx';
import JiuJitsu from './JiuJitsu.jsx';
import {
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom";
import Logo from '../assets/combat_capitol_logo.png'
import '../style/menu.css'

export default class Menu extends React.Component {
    constructor() {
        super();
        this.state = {
            showMenu: false,
        }
        this.showMenu = this.showMenu.bind(this);
    }
    showMenu(event) {
        event.preventDefault();
        this.setState({
            showMenu: !this.state.showMenu
        });
    }


    render() {
        return <React.Fragment>
            <Router>
                <div>
                    <div class="menu-container">
                        <a href="https://combatcapital.com" ><img src={Logo} id="logo" alt="the combat capital logo" /></a>
                    </div>
                    <div className="main-menu">
                        <nav className="main-menu-nav">
                            <ul className="main-menu-ul">
                                <li className="main-menu-li">
                                    <Link to="/">Home</Link>
                                </li>
                                <li className="main-menu-li">
                                    <Link to="/mma">MMA</Link>
                                </li>
                                <li className="main-menu-li">
                                    <Link to="/jiu-jitsu">Jiu Jitsu</Link>
                                </li>
                                <li className="main-menu-li">
                                    <Link to="/boxing">Boxing</Link>
                                </li>
                                <li className="main-menu-li">
                                    <Link to="/wrestling">Wrestling</Link>
                                </li>
                                <li className="main-menu-li">
                                    <Link to="/muay-thai">Muay Thai</Link>
                                </li>
                                <li className="main-menu-li">
                                    <Link to="/judo">Judo</Link>
                                </li>
                            </ul>
                        </nav>
                        <div id="hamburger"
                        onClick={this.showMenu}
                        tabindex="1">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    {
                        this.state.showMenu
                            ? (
                                <nav id="mobile-menu-nav">
                                    <ul id="mobile-ul-nav">
                                        <li className="mobile-menu-li">
                                            <Link to="/">Home</Link>
                                        </li>
                                        <li className="mobile-menu-li">
                                            <Link to="/mma">Mixed Martial Arts</Link>
                                        </li>
                                        <li className="mobile-menu-li">
                                            <Link to="/jiu-jitsu">Jiu Jitsu</Link>
                                        </li>
                                        <li className="mobile-menu-li">
                                            <Link to="/boxing">Boxing</Link>
                                        </li>
                                        <li className="mobile-menu-li">
                                            <Link to="/wrestling">Wrestling</Link>
                                        </li>
                                        <li className="mobile-menu-li">
                                            <Link to="/muay-thai">Muay Thai</Link>
                                        </li>
                                        <li className="mobile-menu-li">
                                            <Link to="/judo">Judo</Link>
                                        </li>
                                    </ul>
                                </nav>
                            )
                            : (
                                null
                            )
                    }
                    </div>
                    <div class="clearfix"></div>
                    <div>
                </div>


                    <Route exact path="/" component={Home} />
                    <Route path="/mma" component={MMA} />
                    <Route path="/boxing" component={Boxing} />
                    <Route path="/wrestling" component={Wrestling} />
                    <Route path="/muay-thai" component={MuayThai} />
                    <Route path="/judo" component={Judo} />
                    <Route path="/jiu-jitsu" component={JiuJitsu} />
                </div>
            </Router>
        </React.Fragment>
    }
}


