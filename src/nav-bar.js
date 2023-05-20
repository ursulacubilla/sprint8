import { Link  } from "react-router-dom";

export function NavBar() {
 return(
    <nav className="App-navBar-div">
        <hr className="hr" />
    <ul className="App-navBar-ul">
    <li className="App-navBar"><Link to="welcome">WELCOME</Link></li>
    <li className="App-navBar"><Link to="/home">HOME</Link></li>
    <li className="App-navBar"><Link to="/application">STARSHIPS</Link></li>
    <li className="App-navBar-login"><Link to="/login">LOGIN</Link></li>
    <li className="App-navBar-login"><Link to="/register">REGISTER</Link></li>
    </ul>
    <hr className="hr" />
    </nav>
 );

}