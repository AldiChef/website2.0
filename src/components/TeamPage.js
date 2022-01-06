import  "./styles/TeamPage.css";
import NavBar from "./NavBar";

function TeamPage(){
    return (
        <div class="overWrapper">

    
        <NavBar></NavBar>
        <div class="teamWrapper">

            <div class="teamMemberArea">
                <h1 class="membersTitle">Das Team</h1>
                <div class="teamMemberContent">
                    <div class="topMember fourMembers members">
                        <div class="rightContent">
                            <div class="fourMember member">
                                <img class="memberImage" src={'http://cravatar.eu/head/req_Ticasch/130.png'} alt="join" />
                                <h2 class="memberTitle">req_Ticasch </h2>
                                <p class="memberSubTitle"> <mark class="rank">Inhaber</mark></p>
                            </div>

                            <div class="fourMember member">
                                <img class="memberImage" src={'http://cravatar.eu/head/AldiChef/130.png'} alt="join" />
                                <h2 class="memberTitle">AldiChef </h2>
                                <p class="memberSubTitle"> <mark class="rank">Leitung</mark></p>
                            </div>
                        </div>

                        <div class="leftContent">
                            <div class="fourMember member">
                                <img class="memberImage" src={'http://cravatar.eu/head/Krautwickel75/130.png'} alt="join" />
                                <h2 class="memberTitle">Krautwickel75 </h2>
                                <p class="memberSubTitle"> <mark class="rank">Admin</mark></p>
                            </div>

                            <div class="fourMember member">
                                <img class="memberImage" src={'http://cravatar.eu/head/0_Saft/130.png'} alt="join" />
                                <h2 class="memberTitle">0_Saft </h2>
                                <p class="memberSubTitle"> <mark class="rank">Admin</mark></p>
                            </div>
                        </div>

                    </div>

                    <div class="bottomMember fourMembers members">
                        <div class="rightContent">
                            <div class="fourMember member">
                                <img class="memberImage" src={'http://cravatar.eu/head/MHF_Steave/130.png'} alt="join" />
                                <h2 class="memberTitle">??</h2>
                                <p class="memberSubTitle"> <mark class="rankDev">H-Developer</mark></p>
                            </div>

                            <div class="fourMember member">
                                <img class="memberImage" src={'http://cravatar.eu/head/Zaibyy/130.png'} alt="join" />
                                <h2 class="memberTitle">Zaibyy </h2>
                                <p class="memberSubTitle"> <mark class="rankBuilder">H-Builder</mark></p>
                            </div>
                        </div>

                        <div class="leftContent">
                            <div class="fourMember member">
                                <img class="memberImage" src={'http://cravatar.eu/head/Nasa521/130.png'} alt="join" />
                                <h2 class="memberTitle">Nasa521 </h2>
                                <p class="memberSubTitle"> <mark class="rankBuilder">H-Builder</mark></p>
                            </div>

                            <div class="fourMember member">
                                <img class="memberImage" src={'http://cravatar.eu/head/MHF_Steave/130.png'} alt="join" />
                                <h2 class="memberTitle">??</h2>
                                <p class="memberSubTitle"> <mark class="rankContent">H-Content</mark></p>
                            </div>
                        </div>
                    </div>

                    <div class="middleMember sixMembers members">
                        <div class="rightContent">
                            <div class="sixMember member">
                                <img class="sixMemberImage" src={'http://cravatar.eu/head/MHF_Steave/130.png'} alt="join" />
                                <h2 class="memberTitlesix">?? </h2>
                                <p class="memberSubTitlesix"> <mark class="sixRank" >Builder</mark></p>
                            </div>

                            <div class="sixMember member">
                                <img class="sixMemberImage" src={'http://cravatar.eu/head/MHF_Steave/130.png'} alt="join" />
                                <h2 class="memberTitlesix">?? </h2>
                                <p class="memberSubTitlesix"> <mark class="sixRank">Builder</mark></p>
                            </div>

                            <div class="sixMember member">
                                <img class="sixMemberImage" src={'http://cravatar.eu/head/MHF_Steave/130.png'} alt="join" />
                                <h2 class="memberTitlesix">?? </h2>
                                <p class="memberSubTitlesix"> <mark class="sixRank">Moderator</mark></p>
                            </div>
                        </div>

                        <div class="leftContent">
                            <div class="sixMember member">
                                <img class="sixMemberImage" src={'http://cravatar.eu/head/MHF_Steave/130.png'} alt="join" />
                                <h2 class="memberTitlesix">?? </h2>
                                <p class="memberSubTitlesix"> <mark class="sixRank">Supporter</mark></p>
                            </div>

                            <div class="sixMember member">
                                <img class="sixMemberImage" src={'http://cravatar.eu/head/MHF_Steave/130.png'} alt="join" />
                                <h2 class="memberTitlesix">?? </h2>
                                <p class="memberSubTitlesix"> <mark class="sixRank">Supporter</mark></p>
                            </div>

                            <div class="sixMember member">
                                <img class="sixMemberImage" src={'http://cravatar.eu/head/MHF_Steave/130.png'} alt="join" />
                                <h2 class="memberTitlesix">?? </h2>
                                <p class="memberTitlesix"> <mark class="sixRank">Supporter</mark></p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>


        

        </div>
    );
}

export default TeamPage;