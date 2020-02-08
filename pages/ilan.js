import React from "react";
import {Header,NoticeInfo,Footer} from "../src/components";

export default class Ilan extends React.Component {
    render() {
        return (
            <div className="main">
                <Header />
                <div className="notice">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="details">
                                    <div className="title">İlan Açıklaması</div>
                                    <div className="description">
                                        <p>Due to ongoing growth, this fun & energetic International corporate based on the outskirts of Oxford, is seeking a UX/UI Designer to join an innovative team, focused on delivering exciting User Experiences and great functionality, across both Web & Mobile platforms.</p>
                                        <p>The UX/UI Designer will be working with a world-class team of designers, engineers, and product managers to develop innovative user experiences that will shape the industry’s pioneering products.</p>
                                        <p><b>Background, Skills & Experience</b></p>
                                        <ol>
                                            <li>Circa 3+ years experience designing for web and mobile platforms</li>
                                            <li>Through your online portfolio, you are able to share your UX/UI design capabilities by showcasing your design chops and demonstrates originality, innovation and strong problem solving skills</li>
                                            <li>Prototyping skills – experience with Axure or similar is useful</li>
                                            <li>Demonstrable experience with end-to-end product design, including consumer product/s</li>
                                        </ol>
                                        <p>The UX/UI Designer will be working with a world-class team of designers, engineers, and product managers to develop innovative user experiences that will shape the industry’s pioneering products.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="title">İlan Detayları</div>
                                <div className="info-box">
                                    <NoticeInfo icon={"filter"} title={"Staj Tipi"} description={"Yaz Stajı"} />
                                    <NoticeInfo icon={"crown"} title={"Not Ortalaması"} description={"Min. 2.5 (4 üzerinden)"} />
                                    <NoticeInfo icon={"bank"} title={"Bölüm"} description={"Yazılım Mühendisliği"} />
                                    <NoticeInfo icon={"rise"} title={"Sınıf"} description={"3, 4"} />
                                    <NoticeInfo icon={"user"} title={"Cinsiyet"} description={"Farketmez"} />
                                    <NoticeInfo icon={"dollar"} title={"Maaş"} description={"Ücretli Staj"} />
                                    <NoticeInfo icon={"number"} title={"Kontenjan"} description={"2"} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}
