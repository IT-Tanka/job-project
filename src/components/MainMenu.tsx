import {useState} from 'react';
import {NavLink} from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const MainMenu: React.FC  = () => {
  const {t} = useTranslation();
  const [isLogin, setIsLogin]=useState((localStorage.getItem('enter'))==='done');
  const getIsLogin=()=>{
        setIsLogin(localStorage.getItem('enter')=== 'done')
  }
  // const navItems=[{"to":".", "text":"HOME"}, {"to":"news", "text":"NEWS"}, {"to":"profile", "text":"PROFILE"}]
  return (
    <nav onClick={getIsLogin}>
        <NavLink to="." end style={{marginRight:"20px" }}>{t("HOME")}</NavLink>
        <NavLink to="news" style={{marginRight:"20px" }}>{t("NEWS")}</NavLink>
        {isLogin &&  <NavLink to= "profile">{t("PROFILE")}</NavLink> }
        {!isLogin &&  <NavLink to= "profile">{t("PROFILE")}</NavLink> }
    </nav>
    
    // <nav>  {
    //           navItems.map((item) => (
    //           <NavLink to={item.to} key={item.text} style={{margin:"20px" }}>
    //             {item.text}
    //           </NavLink>
    //         ))
    //       }
    // </nav>
  )
}

export default MainMenu