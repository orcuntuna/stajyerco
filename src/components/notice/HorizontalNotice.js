import React from "react";
import {Icon} from "antd";

export default class HorizontalNotice extends React.Component {
    render() {
        return (
            <div className="horizontal-notice">
                <div className="image">
                    <a href="#">
                        <img src="/img/brand3.png" alt="firma" />
                    </a>
                </div>
                <div className="details">
                    <a href="#" className="brand">Turkcell</a>
                    <a href="#" className="title">Front-end Geliştirici</a>
                    <p className="info">3 gün önce paylaşıldı</p>
                    <p className="location"><Icon type="pushpin" /> İstanbul/Anadolu</p>
                </div>
                <div className="right">
                    <a className="show_more" href="#!" title="ilan başlığı">İncele</a>
                </div>
            </div>
        );
    }
}
