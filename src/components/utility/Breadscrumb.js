import React from "react";
import {Icon} from "antd";

export default class Breadscrumb extends React.Component {
    render() {
        return (
            <div className="breadscrumb">
                <div className="container">
                    <div className="breadscrumb-flex">
                        <h2>{this.props.title}</h2>
                        <ul>
                            <li><a href="/">Anasayfa</a></li>
                            <Icon type="caret-right" />
                            <li className="active">{this.props.title}</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
