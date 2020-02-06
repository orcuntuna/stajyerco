import React from "react";
import {Input,Button,Checkbox} from "antd";

export default class Login extends React.Component {
    render() {
        return (
            <div className="card">
                <div className="card-title">
                    <h3>Giriş Yap</h3>
                    <p>Mevcut üyeliğinize giriş yapın</p>
                </div>
                <div className="card-body">
                    <Input className="input" size="large" placeholder="E-posta Adresiniz" />
                    <Input.Password className="input" size="large" placeholder="Parolanız" />
                    <div className="other">
                        <Checkbox>Oturumu Açık Tut</Checkbox>
                        <a href="#!" className="forget-password">Parolamı Unuttum</a>
                    </div>
                    <Button className="login-button" block={true} size={"large"} type="primary">Giriş Yap</Button>
                </div>
            </div>
        );
    }
}
