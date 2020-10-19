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

export default class Menu extends React.Component {
    render() {
        return <React.Fragment>
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                            <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/mma">MMA</Link>
                            </li>
                            <li>
                                <Link to="/jiu-jitsu">Jiu Jitsu</Link>
                            </li>
                            <li>
                                <Link to="/boxing">Boxing</Link>
                            </li>
                            <li>
                                <Link to="/wrestling">Wrestling</Link>
                            </li>
                            <li>
                                <Link to="/muay-thai">Muay Thai</Link>
                            </li>
                            <li>
                                <Link to="/judo">Judo</Link>
                            </li>
                        </ul>
                    </nav>
                    <Route exact path="/"component={Home} />
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
