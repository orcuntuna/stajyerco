import React from "react";
import HomeNotice from "./HomeNotice";
import Carousel from "react-multi-carousel";

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};

export default class FeaturedNotices extends React.Component {
    render() {
        return (
            <section className="featured-notices">
                <div className="container">
                    <div className="section-header">
                        <h3 className="title">Öne Çıkan İlanlar</h3>
                        <button className="browse-all">Tüm İlanları Göster</button>
                    </div>
                    <div className="section-body">
                        <Carousel responsive={responsive}>
                            <HomeNotice onDragStart={this.handleOnDragStart} />
                            <HomeNotice onDragStart={this.handleOnDragStart} />
                            <HomeNotice onDragStart={this.handleOnDragStart} />
                            <HomeNotice onDragStart={this.handleOnDragStart} />
                            <HomeNotice onDragStart={this.handleOnDragStart} />
                            <HomeNotice onDragStart={this.handleOnDragStart} />
                            <HomeNotice onDragStart={this.handleOnDragStart} />
                        </Carousel>
                    </div>
                </div>
            </section>
        );
    }
}
