import './Navbar.css';
import mainLogo from './softLogo.png';

function Navbar() {
    return (
        <div>
            <div className="sideBar show">
                <div className="sideItemContainer">
                    <div className="sideSelector menuButton" onClick={expandSideBar}>
                    <img src={mainLogo} alt="Menu Button"/>
                    </div>
                </div>
                <div className="sideItemContainer">
                    <div className="sideSelector">
                    <img src={mainLogo} alt="Menu Button"/>
                    </div>
                </div>
                <div className="sideItemContainer">
                    <div className="sideSelector">
                    <img src={mainLogo} alt="Menu Button"/>
                    </div>
                </div>
                <div className="sideItemContainer">
                    <div className="sideSelector">
                    <img src={mainLogo} alt="Menu Button"/>
                    </div>
                </div>
                <div className="sideItemContainer">
                    <div className="sideSelector">
                    <img src={mainLogo} alt="Menu Button"/>
                    </div>
                </div>
                <div className="sideItemContainer">
                    <div className="sideSelector">
                    <img src={mainLogo} alt="Menu Button"/>
                    </div>
                </div>
                <div className="sideItemContainer">
                    <div className="sideSelector">
                    <img src={mainLogo} alt="Menu Button"/>
                    </div>
                </div>
            </div>
            <div className="sideBarExtend">
                <div className="sideItemContainer menuButton" onClick={expandSideBar}>
                    <div className="sideSelector">
                    <img src={mainLogo} alt="Menu Button"/>
                    </div>
                    <span className="sideText">RGBSoft</span>
                </div>
                <div className="sideItemContainer">
                    <div className="sideSelector">
                    <img src={mainLogo} alt="Menu Button"/>
                    </div>
                    <span className="sideText">iPhone</span>
                </div>
                <div className="sideItemContainer">
                    <div className="sideSelector">
                    <img src={mainLogo} alt="Menu Button"/>
                    </div>
                    <span className="sideText">AirPods</span>
                </div>
                <div className="sideItemContainer">
                    <div className="sideSelector">
                    <img src={mainLogo} alt="Apple Watch"/>
                    </div>
                    <span className="sideText">Apple Watch</span>
                </div>
                <div className="sideItemContainer">
                    <div className="sideSelector">
                    <img src={mainLogo} alt="Menu Button"/>
                    </div>
                    <span className="sideText">Accesorios</span>
                </div>
                <div className="sideItemContainer">
                    <div className="sideSelector">
                    <img src={mainLogo} alt="Menu Button"/>
                    </div>
                    <span className="sideText">Cargadores</span>
                </div>
                <div className="sideItemContainer">
                    <div className="sideSelector">
                    <img src={mainLogo} alt="Menu Button"/>
                    </div>
                    <span className="sideText">Contacto</span>
                </div>
                
            </div>
        </div>
    );
}
async function expandSideBar(){
    var sideText = document.getElementsByClassName("sideText");
    var sideBar = document.getElementsByClassName("sideBar")[0];
    var sideBarExtend = document.getElementsByClassName("sideBarExtend")[0];

    if(sideBar.classList.contains("show")){
        sideBar.classList.remove("show");
        sideBarExtend.classList.add("sideBarShowAnimation");
        for (let i = 0; i < sideText.length; i++){
           sideText[i].classList.add("sideTextShowAnimation"); 
        }        
        sideBarExtend.classList.add("show");
        await delay(500);
        sideBarExtend.classList.remove("sideBarShowAnimation");
        for (let i = 0; i < sideText.length; i++){
            sideText[i].classList.remove("sideTextShowAnimation"); 
        }    
    }
    else if(sideBarExtend.classList.contains("show")){
        sideBarExtend.classList.add("sideBarHideAnimation");
        for (let i = 0; i < sideText.length; i++){
            sideText[i].classList.add("sideTextHideAnimation"); 
         } 
        await delay(500);
        sideBarExtend.classList.remove("sideBarHideAnimation");
        for (let i = 0; i < sideText.length; i++){
            sideText[i].classList.remove("sideTextHideAnimation"); 
         } 
        sideBarExtend.classList.remove("show");
        sideBar.classList.add("show");
    }
}
function delay(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}

export default Navbar;