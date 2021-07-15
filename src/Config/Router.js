import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";
import { Home } from "../Screens/Home";
import { Contact } from "../Screens/Contact";
import { About } from "../Screens/About";

export default function AppRouter() {
    return (
        <div>
            <Router>
                <Route exact path="/" component={Home} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/about" component={About} />
            </Router>
        </div>
    )
}
