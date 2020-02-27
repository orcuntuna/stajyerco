import React from "react";
import {Input,Button,Checkbox,Row,Col} from "antd";

export default class Register extends React.Component {
    render() {
        return (
            <div className="card">
                <div className="card-title">
                    <h3>Üyelik Oluştur</h3>
                    <p>Staj başvurusunda bulunmak için kayıt ol</p>
                </div>
                <div className="card-body">
                    <Row gutter={[16, 0]}>
                        <Col span={12}>
                            <Input className="input" size="large" placeholder="Adınız" />
                        </Col>
                        <Col span={12}>
                            <Input className="input" size="large" placeholder="Soyadınız" />
                        </Col>
                    </Row>
                    <Input className="input" size="large" placeholder="E-posta Adresiniz" />
                    <Row gutter={[16, 0]}>
                        <Col span={12}>
                            <Input.Password className="input" size="large" placeholder="Parolanız" />
                        </Col>
                        <Col span={12}>
                            <Input.Password className="input" size="large" placeholder="Parolanız (Tekrar)" />
                        </Col>
                    </Row>
                    <Input className="input" size="large" placeholder="Telefon Numaranız" />
                    <div className="other">
                        <Checkbox>Kullanım koşullarını okudu ve onaylıyorum.</Checkbox>
                    </div>
                    <Button className="button" block={true} size={"large"} type="primary">Üyelik Oluştur</Button>
                </div>
            </div>
        );
    }
}
