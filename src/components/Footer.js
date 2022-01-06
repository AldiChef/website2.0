import { Link } from "react-router-dom";
import "./styles/Footer.css";

function Footer(){
    return (
        <>
        
        <div class="footerSection">
            <div class="footerContent">

                <div class="innerFooterContent">
                    <div class="IconContent">
                            <img class="footerIcon" src={require('../recources/twitter.png')} alt="footer" />
                            <p class="footerIconSubTitle">Twitter</p>
                    </div>

                    <div class="IconContent">
                            <img class="footerIcon" src={require('../recources/youtube.png')} alt="footer" />
                            <p class="footerIconSubTitle">Youtube</p>
                    </div>

                    <div class="IconContent">
                            <img class="bigFooterIcon" src={require('../recources/chat.png')} alt="footer" />
                            <p class="bigFooterIconSubTitle">Forum</p>
                    </div>

                    <div class="IconContent">
                            <img class="footerIcon" src={require('../recources/email.png')} alt="footer" />
                            <p class="footerIconSubTitle">Support<br/>Mail</p>
                    </div>

                    <div class="IconContent">
                            <img class="footerIcon" src={require('../recources/instagram.png')} alt="footer" />
                            <p class="footerIconSubTitle">Instagram</p>
                    </div>
                </div>

                <div class="footerTextContent">
                    <Link to="/datenschutz"><a>Datenschutz</a></Link> © 2021 Alle Rechte vorbehalten Addictzone.net <Link to="/impressum"><a>Impressum</a></Link>
                </div>
            </div>
        </div>

        </>
    );
}

export default Footer;