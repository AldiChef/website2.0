import "./styles/Impressum.css";
import NavBar from "./NavBar";

function ImpressumPage() {
    return (
        <>
        <div class="overWrapper">
            <NavBar></NavBar>
            <div class="impressumWrapper">
                <div class="ipressumArea">
                    <h1 class="impressumTitle">Impressum</h1>
                    <div class="impressumContent">
                        <div class="sectionLeft">
                            <div class="inhaber">
                                <div class="sectionTitle">Seitenbetreiber</div>
                                <div class="one">
                                    <img class="oneImage" src={require('../recources/1.png')} alt="1" /> 
                                    <p class="imageSubTitle oneImageSubTitle">Ruben Fischer <br/> Baden-Württemberg</p>
                                </div>

                                <div class="two">
                                    <img class="twoImage" src={require('../recources/2.png')} alt="2" /> 
                                    <p class="imageSubTitle twoImageSubTitle">Tiam Schaumm <br/> Saarland</p>
                                </div>
                            </div>

                            <div class="support">
                                <div class="sectionTitle">Support</div>
                                <p class="subTitle"><b>Email:</b> <a href="mailto://support@addictzone.net">support@addictzone.net</a> <br/> <b>Discord:</b> <a href="https://discord.gg/eMKefvPkVx">klicke hier</a> <br/> <b>TeamSpeak³:</b> <a href="ts3server://addictzone.net">AddictZone.net</a> </p>
                            </div>

                            <div class="kontakt">
                                <div class="sectionTitle">Kontakt</div>
                                <p class="subTitle"><b>Email:</b> <a href="mailto://info@addictzone.net">info@addictzone.net</a> <br/> <b>Discord:</b> <a href="https://discord.gg/eMKefvPkVx">klicke hier</a> <br/> <b>TeamSpeak³:</b> <a href="ts3server://addictzone.net">AddictZone.net</a> </p>
                            </div>

                        </div>
                        <div class="sectionRight">
                            <img class="rightImage" src={require('../recources/pc.png')} alt="pc" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default ImpressumPage;