import React from "react";
import {Header,Search,PopularCategories} from "../src/components";

export default class Index extends React.Component {
    render() {
        return (
            <div className="main">
                <Header />
                <Search />
                <PopularCategories />
            </div>
        );
    }
}
