import React from "react";
import {Icon} from "antd";
import HorizontalNotice from "./HorizontalNotice";

export default class ListNotices extends React.Component {
    render() {
        return (
            <div className="notice-list">
                <HorizontalNotice />
                <HorizontalNotice />
                <HorizontalNotice />
                <HorizontalNotice />
                <button href="#" className="show-more">Daha Fazla İlan Listele</button>
            </div>
        );
    }
}
