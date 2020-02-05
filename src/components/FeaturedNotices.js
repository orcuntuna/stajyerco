import React from "react";
import HomeNotice from "./HomeNotice";

export default class FeaturedNotices extends React.Component {
    render() {
        return (
            <section className="featured-notices">
                <div className="container">
                    <div className="section-header">
                        <h3 className="title">Öne Çıkan İlanlar</h3>
                        <button className="browse-all">Tüm İlanları Göster</button>
                    </div>
                    <div className="row section-body">
                        <HomeNotice />
                        <HomeNotice />
                        <HomeNotice />
                        <HomeNotice />
                        <HomeNotice />
                        <HomeNotice />
                    </div>
                </div>
            </section>
        );
    }
}
