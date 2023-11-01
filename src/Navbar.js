import './styles/Navbar.css';
import { useState, useEffect } from 'react';
import { useGlobalContext } from './GlobalContext';
import mainLogo from './images/softLogo.png';
import iphoneLogo from './images/iphone-icon.png';
import airpodsLogo from './images/airpods.png';
import iwatchIcon from './images/iwatch-icon.png';
import accesoriesLogo from './images/iphone-case.png';
import energyLogo from './images/charger-icon.png';
import sidebarMenuIcon from './images/sidebar-menu-icon.png';
import contactIcon from './images/contact-icon.png';
import addProductIcon from "./images/addproduct.png";
import logOutIcon from "./images/logout.png"

function Navbar(props) {
    const {temporaryToken, handleLogout} = useGlobalContext();
    
    const handleSetActive = (value) => {
        if (typeof props.setActive === 'function') {
            props.setActive(value);

        } else {
            console.error("props.setActive is not a function");
        }
    };
    return (
        <div>
            <div className="sideBar show">
                <div className="sideItemContainer">
                    <div className="sideSelector menuButton" onClick={expandSideBar}>
                        <img src={sidebarMenuIcon} alt="Menu Button" />
                    </div>
                </div>
                <div className="navSeparator"></div>
                <div className="sideItemContainer">
                    <div className={`sideSelector ${props.active === 'iphone' ? 'active' : ''}`}>
                        <img src={iphoneLogo} alt="Menu Button" onClick={() => handleSetActive("iphone")} />
                    </div>
                </div>
                <div className="sideItemContainer" onClick={() => handleSetActive("airpods")}>
                    <div className="sideSelector">
                        <img src={airpodsLogo} alt="Menu Button" />
                    </div>
                </div>
                <div className="sideItemContainer">
                    <div className="sideSelector" onClick={() => handleSetActive("applewatch")}>
                        <img src={iwatchIcon} alt="Menu Button" />
                    </div>
                </div>
                <div className="sideItemContainer" onClick={() => handleSetActive("accesorios")}>
                    <div className="sideSelector">
                        <img src={accesoriesLogo} alt="Menu Button" />
                    </div>
                </div>
                <div className="sideItemContainer" onClick={() => handleSetActive("cargadores")}>
                    <div className="sideSelector">
                        <img src={energyLogo} alt="Menu Button" className='energy-icon'/>
                    </div>
                </div>
                {temporaryToken && (
                    <div className="navSeparator"></div>
                )}
                {temporaryToken && (                    
                    <div className="sideItemContainer" onClick={() => {
                        handleSetActive("addproduct");
                        
                    }}>
                        <div className="sideSelector">
                            <img src={addProductIcon} alt="Menu Button" className="addprod-icon" />
                        </div>
                    </div>
                )}
                {temporaryToken && (                    
                    <div className="sideItemContainer" onClick={() => {
                        handleSetActive("home");
                        handleLogout();
                    }}> 
                        <div className="sideSelector">
                            <img src={logOutIcon} alt="Menu Button" className="logout-icon" />
                        </div>
                    </div>
                )}


                <div className="sideItemContainer">
                    <div className="sideSelector">
                        <img src={contactIcon} alt="Menu Button" />
                    </div>
                </div>
            </div>
            <div className="sideBarExtend">
                <div className="sideItemContainer menuButton">
                    <div className="sideSelector" onClick={expandSideBar}>
                        <img src={sidebarMenuIcon} alt="Menu Button" />
                    </div>
                    <span className="sideText" onClick={() => handleSetActive("home")} >Home</span>
                </div>
                <div className="navSeparator"></div>
                <div className="sideItemContainer" onClick={() => handleSetActive("iphone")}>
                    <div className="sideSelector">
                        <img src={iphoneLogo} alt="Menu Button" />
                    </div>
                    <span className="sideText">iPhone</span>
                </div>
                <div className="sideItemContainer" onClick={() => handleSetActive("airpods")}>
                    <div className="sideSelector">
                        <img src={airpodsLogo} alt="Menu Button" />
                    </div>
                    <span className="sideText">AirPods</span>
                </div>
                <div className="sideItemContainer" onClick={() => handleSetActive("applewatch")}>
                    <div className="sideSelector">
                        <img src={iwatchIcon} alt="Apple Watch" />
                    </div>
                    <span className="sideText">Apple Watch</span>
                </div>
                <div className="sideItemContainer" onClick={() => handleSetActive("accesorios")}>
                    <div className="sideSelector">
                        <img src={accesoriesLogo} alt="Menu Button" />
                    </div>
                    <span className="sideText">Accesorios</span>
                </div>
                <div className="sideItemContainer" onClick={() => handleSetActive("cargadores")}>
                    <div className="sideSelector">
                        <img src={energyLogo} alt="Menu Button" className='energy-icon' />
                    </div>
                    <span className="sideText">Cargadores</span>
                </div>
                {temporaryToken && (
                    <div className="navSeparator"></div>
                )}
                {temporaryToken && (                    
                    <div className="sideItemContainer" onClick={() => {
                        handleSetActive("addproduct");
                        
                    }}>
                        <div className="sideSelector">
                            <img src={addProductIcon} alt="Menu Button" className="addprod-icon" />
                        </div>
                        <span className="sideText">Agregar Producto</span>
                    </div>
                )}
                {temporaryToken && (                    
                    <div className="sideItemContainer" onClick={() => {
                        handleSetActive("home");
                        handleLogout();
                    }}> 
                        <div className="sideSelector">
                            <img src={logOutIcon} alt="Menu Button" className="logout-icon" />
                        </div>
                        <span className="sideText">Cerrar Sesión</span>
                    </div>
                )}
                <div className="sideItemContainer">
                    <div className="sideSelector">
                        <img src={contactIcon} alt="Menu Button" />
                    </div>
                    <span className="sideText">Contacto</span>
                </div>

            </div>
        </div>
    );
}
async function expandSideBar() {
    var sideText = document.getElementsByClassName("sideText");
    var sideBar = document.getElementsByClassName("sideBar")[0];
    var sideBarExtend = document.getElementsByClassName("sideBarExtend")[0];

    if (sideBar.classList.contains("show")) {
        sideBar.classList.remove("show");
        sideBarExtend.classList.add("sideBarShowAnimation");
        for (let i = 0; i < sideText.length; i++) {
            sideText[i].classList.add("sideTextShowAnimation");
        }
        sideBarExtend.classList.add("show");
        await delay(500);
        sideBarExtend.classList.remove("sideBarShowAnimation");
        for (let i = 0; i < sideText.length; i++) {
            sideText[i].classList.remove("sideTextShowAnimation");
        }
    }
    else if (sideBarExtend.classList.contains("show")) {
        sideBarExtend.classList.add("sideBarHideAnimation");
        for (let i = 0; i < sideText.length; i++) {
            sideText[i].classList.add("sideTextHideAnimation");
        }
        await delay(500);
        sideBarExtend.classList.remove("sideBarHideAnimation");
        for (let i = 0; i < sideText.length; i++) {
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