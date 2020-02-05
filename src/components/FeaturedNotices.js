import React from "react";
import HomeNotice from "./HomeNotice";
import AliceCarousel from "react-alice-carousel";

export default class FeaturedNotices extends React.Component {

    handleOnDragStart = (e) => e.preventDefault();

    render() {
        return (
            <section className="featured-notices">
                <div className="container">
                    <div className="section-header">
                        <h3 className="title">Öne Çıkan İlanlar</h3>
                        <button className="browse-all">Tüm İlanları Göster</button>
                    </div>
                    <div className="section-body">
                        <AliceCarousel buttonsDisabled={true}  responsive={{
                            0: {
                                items: 1,
                            },
                            1024: {
                                items: 3
                            }
                        }}>
                            <HomeNotice onDragStart={this.handleOnDragStart} />
                            <HomeNotice onDragStart={this.handleOnDragStart} />
                            <HomeNotice onDragStart={this.handleOnDragStart} />
                            <HomeNotice onDragStart={this.handleOnDragStart} />
                            <HomeNotice onDragStart={this.handleOnDragStart} />
                            <HomeNotice onDragStart={this.handleOnDragStart} />
                            <HomeNotice onDragStart={this.handleOnDragStart} />
                        </AliceCarousel>

                    </div>
                </div>
            </section>
        );
    }
}
