import React from "react";
import {Header,Search,PopularCategories,FeaturedNotices,Footer} from "../src/components";

export default class Index extends React.Component {
    render() {
        return (
            <div className="main">
                <Header />
                <Search />
                <PopularCategories />
                <FeaturedNotices />
                <Footer />
            </div>
        );
    }
}
