import React from "react";
import {Icon,Button} from "antd";

export default class CompanyHeader extends React.Component {
    render() {
        return (
            <div className="company-header">
                <div className="container">
                    <div className="header-flex">
                        <div className="company-info">
                            <img src="/img/brand3.png" alt="logo"/>
                            <div>
                                <h1>Google <Icon type="check-circle" theme="twoTone" /></h1>
                                <p className="desc">Google’s mission is to organize the world‘s information and make it universally accessible and useful.</p>
                            </div>
                        </div>
                        <div className="company-link">
                            <a href="https://google.com" target={"_blank"} rel={"nofollow"}>
                                <Button className={"website"}><Icon type="link" /> İnternet Sitesi</Button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
