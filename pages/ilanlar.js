import React from "react";
import {Header,ListNotices,NoticeFilter,Footer} from "../src/components";
import {Row, Col, Card, Icon} from "antd";

export default class Ilanlar extends React.Component {
    render() {
        return (
            <div className="main">
                <Header />
                <div className="notices">
                    <div className="container">
                        <Row gutter={20}>
                            <Col span={24} md={7}>
                                <Card title={<b>Arama Filtreleri</b>} size={"small"}>
                                    <NoticeFilter />
                                </Card>
                            </Col>
                            <Col span={24} md={17}>
                                <ListNotices />
                            </Col>
                        </Row>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}
