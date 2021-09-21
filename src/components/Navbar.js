import { Route, BrowserRouter as Router, Switch, NavLink } from "react-router-dom";
import About from "../pages/AboutPage";
import Home from "../pages/HomePage";
import Share from "../pages/SharePage";
import SigningPage from "../pages/SigningPage"
import nav from "./Navbar.module.css"


export default function Navbar() {


    return (
        <Router>
            <nav>
                <ul className={nav.container}>
                    <li className={nav.list}>
                        <NavLink exact activeClassName={nav.activePageLink} to="/" className={nav.Link}>Home</NavLink>
                    </li>
                    <li className={nav.list}>
                        <NavLink activeClassName={nav.activePageLink} to="/share" className={nav.Link}>Add Post</NavLink>
                    </li>
                    <li className={nav.list}>
                        <NavLink activeClassName={nav.activePageLink} to="/about" className={nav.Link}>About</NavLink>
                    </li>
                    <li className={nav.list}>
                        <NavLink activeClassName={nav.activePageLink} to="/signin" className={nav.Link}>Sign In</NavLink>
                    </li>
                </ul>
            </nav>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" exact component={About} />
                <Route path="/share" exact component={Share} />
                <Route path="/signin" exact component={SigningPage} />
            </Switch>
        </Router>
    );
}

