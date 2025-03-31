import { BrowserRouter as Router } from "react-router";


function NavigationBar() {
    return (

    <Router>
        <span className="nav-bar">
            <h1 className="title">Lydia Pauly</h1>
                <nav>
                    <ul className="item-list">
                        <li className="item"><a href="/">Home</a></li>
                        <li className="item"><a href="/about">Quick CV</a></li>
                        <li className="item"><a href="/contact">Writing</a></li>
                        <li className="item">Cool work</li>
                    </ul>
                </nav>
        </span>
    </Router>
    );
}

export default NavigationBar;