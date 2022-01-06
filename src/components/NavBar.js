import { Link } from "react-router-dom";
import "../components/styles/NavBar.css"

function showNavBar(){
    const nav = document.getElementById('hamburger-nav');

    nav.classList.toggle('show');
    document.getElementById('navBarContent').classList.toggle('colored');

        console.log("clicked");
    
}

function NavBar(){
    return (
        <>
        <div id="navBarContent" class="navBarContent">
            <div class="nameTextArea">
                <p>AddictZone</p>
            </div>

            <button class="hamburger" id="hanburger" onClick={showNavBar}>
                <i class="fa fa-bars"></i>
            </button>
            
            <nav id="nav" class="nav">
                <ul class="nav-ul" id="nav-ul">
                    <li><Link to="/" style={{ textDecoration: 'none' }}><img src={require('../recources/zuhause.png')} alt="zuhause" />Startseite</Link></li>
                    <li><a href="#" ><img src={require('../recources/statistiken.png')} alt="stats" />Statistiken</a></li>
                    <li><a href="http://forum.addict-zone.com/forum/" ><img src={require('../recources/buch.png')} alt="book" />Forum</a></li>
                    <li><Link to="/team" style={{ textDecoration: 'none' }}><img src={require('../recources/fuhrer.png')} alt="team" />Team</Link></li>
                </ul>
            </nav>

            
        </div>

        <nav id="hamburger-nav" class="hamburger-nav">
            <ul class="nav-ul" id="nav-ul">
                <li><Link to="/" style={{ textDecoration: 'none' }}>Startseite</Link></li>
                <li><a href="#" >Statistiken</a></li>
                <li><a href="http://forum.addict-zone.com/forum/" >Forum</a></li>
                <li><Link to="/team" style={{ textDecoration: 'none' }}>Team</Link></li>
            </ul>
        </nav>

</>
    );
}

export default NavBar;