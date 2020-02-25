import React from "react";
import {Input,Button,Checkbox,Icon} from "antd";

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
                    <Button className="button" block={true} size={"large"} type="primary">Giriş Yap</Button>
                    <hr />
                    <Button className="button google-login" block={true} size={"large"} type="primary"><Icon type="google" />Google ile Giriş Yap</Button>
                    <Button className="button linkedin-login" block={true} size={"large"} type="primary"><Icon type="linkedin" />LinkedIn ile Giriş Yap</Button>
                </div>
            </div>
        );
    }
}
