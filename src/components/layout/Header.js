import React from "react";
import {observer, inject} from "mobx-react";
import {Icon} from "antd";

@inject("store")
@observer
export default class Header extends React.Component {
    render(){
        return(
            <div className="header">
                <div className="container header-container">
                    <a href="/" className="logo">
                        <img src="/img/logo-white.png" />
                    </a>
                    <ul className="menu show-desktop">
                        <li><a href="#">Anasayfa</a></li>
                        <li><a href="#">Firmalar</a></li>
                        <li><a href="#">İlanlar</a></li>
                        <li><a href="#">CV Oluştur</a></li>
                    </ul>
                    <div className="right">
                        <div href="#" className="login-button show-desktop">
                            Giriş Yap / Kayıt Ol
                        </div>
                        <div href="#" className="toggle-button show-mobile">
                            <Icon type="user" style={{fontSize: "20px"}} />
                        </div>
                        <div onClick={() => this.props.store.main.mobile_header_menu_toggle()} className="toggle-button show-mobile">
                            <Icon type="menu" style={{fontSize: "20px"}} />
                        </div>
                    </div>
                </div>
                {
                    this.props.store.main.mobile_header_menu_visible ? (
                        <ul className="mobile-menu">
                            <li><a href="#">Anasayfa</a></li>
                            <li><a href="#">Firmalar</a></li>
                            <li><a href="#">İlanlar</a></li>
                            <li><a href="#">CV Oluştur</a></li>
                        </ul>
                    ) : null
                }
            </div>
        )
    }
}
