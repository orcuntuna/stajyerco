import React from "react";
import CompanyHeader from "./CompanyHeader";
import {Card,Row,Col} from "antd";
import Location from "./Map";
import Footer from "../layout/Footer";
import HorizontalNotice from "../notice/HorizontalNotice";

export default class CompanyProfile extends React.Component {
    render() {
        return (
            <div className="company-profile">
                <CompanyHeader/>
                <div className="container mb-4 mt-2">
                    <div className="row">
                        <div className="company-details col-12 col-md-4">
                            <Card title={<b>Hakkında</b>} size={"small"}>
                                <p>Google’s mission is to organize the world‘s information and make it universally accessible and useful.</p>
                                <p>Since our founding in 1998, Google has grown by leaps and bounds. From offering search in a single language we now offer dozens of products and services—including various forms of advertising and web applications for all kinds of tasks—in scores of languages. And starting from two computer science students in a university dorm room, we now have thousands of employees and offices around the world. A lot has changed since the first Google search engine appeared. But some things haven’t changed: our dedication to our users and our belief in the possibilities of the Internet itself.</p>
                            </Card>
                            <Card title={<b>Lokasyonlar</b>} size={"small"}>
                                <Location location={{lat: 39.922391959040795, lng: 32.83331734785463}} zoom={13} />
                            </Card>
                        </div>
                        <div className="company-notice-list col-12 col-md-8">
                            <Card title={<b>Aktif İlanlar</b>} size={"small"}>
                                <HorizontalNotice/>
                                <HorizontalNotice/>
                                <HorizontalNotice/>
                                <HorizontalNotice/>
                                <HorizontalNotice/>
                            </Card>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}
