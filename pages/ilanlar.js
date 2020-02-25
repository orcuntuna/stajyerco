import React from "react";
import {Header,ListNotices,NoticeFilter,Footer} from "../src/components";

export default class Ilanlar extends React.Component {
    render() {
        return (
            <div className="main">
                <Header />
                <div className="notices">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-4">
                                <NoticeFilter />
                            </div>
                            <div className="col-12 col-lg-8">
                                <ListNotices />
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}
