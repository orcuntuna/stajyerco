import React from "react";

export default class Header extends React.Component {
    render(){
        return(
            <div className="header">
                <div className="container header-container">
                    <a href="#" className="logo">
                        <img src={"https://apusthemes.com/wp-demo/careerup/wp-content/uploads/2019/04/logo-white.png"} />
                    </a>
                    <ul className="menu">
                        <li><a href="#">Anasayfa</a></li>
                        <li><a href="#">Firmalar</a></li>
                        <li><a href="#">İlanlar</a></li>
                        <li><a href="#">CV Oluştur</a></li>
                    </ul>
                    <div className="right">
                        <a href="#" className="login-button">
                            Giriş Yap / Kayıt Ol
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}
