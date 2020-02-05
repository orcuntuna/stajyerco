import React from "react";
import {Icon} from "antd";

export default class HomeNotice extends React.Component {
    render() {
        return (
            <div className="home-notice">
                <div className="image">
                    <a href="#!" title="ilan başlığı">
                        <img src="img/brand3.png" alt="firma" />
                    </a>
                </div>
                <p className="brand"><a href="#!" title="firma ismi">Turkcell</a></p>
                <p className="title"><a href="#!" title="ilan başlığı">Front-end Geliştirici</a></p>
                <p className="time">3 gün önce paylaşıldı</p>
                <div className="location"><Icon type="pushpin" /> İstanbul/Anadolu</div>
                <a className="show_more" href="#!" title="ilan başlığı">İncele</a>
            </div>
        );
    }
}
