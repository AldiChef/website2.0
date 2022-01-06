import '../components/styles/LandingPage.css'
import NavBar from './NavBar';

function LandingPage(){
    return (
        <div class="root">

            <div class="pageContent">
                <NavBar/>

                
                <div class="welcomeContent">
                    <div class="left">
                        <img src={require('../recources/feuerwerk.png')} alt="placeholder" />
                    </div>
                    <div class="divider"></div>
                    <div class="right">
                        <p class="heading">Willkommen auf AddictZone, <br/>deinem <mark class="primary">Citybuild Netzwerk.</mark></p>
                        <p class="subheading">Wir sind ein neuer und kleiner Citybuild Server. Wir  wollen frischen Wind in die Citybuild Szene bringen und wollen den etablierten Servern zeigen, dass und wie es auch kreativer geht. Vom PvP’ler zum Aktienhändler, fürjeden ist was dabei! </p>
                        <div class="buttons">
                            <button class="bewerbenButton">Bewerben</button>
                            <button class="shopButton">Shop</button>
                        </div>

                    </div>

                </div>

                <div class="stats">
                    <div class="statsLeft">
                        <div class="statisticLeft">
                            <div class="statIcon"><img src={require('../recources/mann.png')} alt="man" /></div>
                            <p><mark class="primary">---</mark><br/>Spieler</p>

                        </div>
                        <div class="statisticLeft">
                            <div class="statIcon"><img src={require('../recources/join.png')} alt="join" /></div>
                            <p><mark class="primary">---</mark><br/>Joins</p>
                        </div>
                    </div>
                    <div class="statsDivider"></div>
                    <div class="statsRight">
                        <div class="statisticRight">
                            <div class="statIcon"><img src={require('../recources/money.png')} alt="man" /></div>
                            <p><mark class="primary">---</mark><br/>Ø-Geld</p>
                        </div>
                        <div class="statisticRight">
                            <div class="statIcon"><img src={require('../recources/search.png')} alt="man" /></div>
                            <p><mark class="primary">---</mark><br/>Pings</p>
                        </div>
                    </div>

                </div>
                    
   
                
            </div>

        </div>
    );
}

export default LandingPage;