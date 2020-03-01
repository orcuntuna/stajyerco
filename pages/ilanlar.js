import React from "react";
import {Header,ListNotices,NoticeFilter,Footer} from "../src/components";
import {Row,Col} from "antd";

export default class Ilanlar extends React.Component {
    render() {
        return (
            <div className="main">
                <Header />
                <div className="notices">
                    <div className="container">
                        <Row gutter={20}>
                            <Col span={7}><NoticeFilter /></Col>
                            <Col span={17}><ListNotices /></Col>
                        </Row>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}
