import { Link } from "react-router-dom";
import "./styles/SecondPage.css"

function SecondPage(){
    return (
        <>

        <div class="section">

            <h1 class="title">Vielfältigkeit</h1>
            <div class="infoContent">
                <div class="top">
                    <div class="content1 content">
                        <h2 class="contentTitle">⚗️ | Stetige Weiterentwicklung</h2>
                        <p class="contentSubTitle">
                            Das Addictzone Serverteam hat sich zum Ziel gesetzt den Server immer aktuell zu halten und Wünsche der Nutzer schnell umzusetzen.
                        </p>
                        <a href="http://forum.addict-zone.com/index.php?category-article-list/3-news/"><button class="contentButton">News</button></a>
                    </div>
                    <div class="content2 content">
                        <h2 class="contentTitle">📯️ | Aktiven Ts³ Support</h2>
                        <p class="contentSubTitle">
                            Bei allen Fragen ist der Teamspeak³ Support immer für euch da und kann euch meistens weiterhelfen. (Wir bieten Auch Discord Support!)
                        </p>
                        <a href="ts3server://addictzone.net"><button class="contentButton">Zum Ts³</button></a>
                    </div>
                </div>

                <div class="bottom">
                    <div class="content3 content">
                        <h2 class="contentTitle">📝️ | Selbst Programmiert</h2>
                        <p class="contentSubTitle">
                            Die meisten Systeme auf dem AddictZone Netzwerk sind selbst programmiert und optimiert. Das gibt uns die Chance einzigartiges zu erschaffen!
                        </p>
                        <a href="http://forum.addict-zone.com/index.php?category-article-list/4-dev-blog/"><button class="contentButton">Dev-Blog</button></a>
                    </div>
                    <div class="content4 content">
                        <h2 class="contentTitle">🎓️ | Professionelles Team</h2>
                        <p class="contentSubTitle">
                            Das AddictZone Serverteam besteht aus ausgewählten Teammitgliedern. So versuchen wir ein möglichst gutes Arbeitsklima im Team zu ermöglichen.
                        </p>
                        <Link to="/team" style={{ textDecoration: 'none' }}><button class="contentButton">Das Team</button></Link>
                    </div>
                </div>
            </div>

        </div>

        </>
    )
}

export default SecondPage;