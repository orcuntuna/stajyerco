import React from "react";
import {Icon, Button} from "antd";

export default class StudentProfileSidebar extends React.Component {
    render() {
        return (
            <div className="col-md-3 col-xl-2 profile-left">
                <div className="photo">
                    <img src="https://avatars3.githubusercontent.com/u/22179849?s=460&v=4" alt="profile"/>
                </div>
                <div className="name-info">
                    <h1>Orçun Tuna</h1>
                    <div className="username">
                        <a href="/">@orcuntuna</a>
                    </div>
                </div>
                <div className="social-links">
                    <a href={"/"}>
                        <Icon className={"facebook"} type="facebook" theme={"filled"} />
                    </a>
                    <a href={"/"}>
                        <Icon className={"twitter"} type="twitter-square" theme={"filled"} />
                    </a>
                    <a href={"/"}>
                        <Icon className={"linkedin"} type="linkedin" theme={"filled"} />
                    </a>
                    <a href={"/"}>
                        <Icon className={"instagram"} type="instagram" theme={"filled"} />
                    </a>
                    <a href={"/"}>
                        <Icon className={"github"} type="github" theme={"filled"} />
                    </a>
                </div>
                <div className="email">
                    <a href="mailto:iletisim@stajyer.co" className="btn btn-info btn-sm btn-block">
                        <Icon type="mail" /> E-posta Gönder
                    </a>
                </div>
            </div>
        );
    }
}
