import React from "react";
import {Icon} from "antd";

export default class NoticeInfo extends React.Component {
    render() {
        return (
            <div className="notice-info">
                <div className="icon">
                    <Icon type={this.props.icon} />
                </div>
                <div className="info-info">
                    <div className="info-title">{this.props.title}</div>
                    <div className="info-desc">{this.props.description}</div>
                </div>
            </div>
        );
    }
}
