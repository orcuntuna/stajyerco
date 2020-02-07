import React from "react";
import {Header,ListNotices,NoticeFilter,Footer} from "../src/components";

export default class Index extends React.Component {
    render() {
        return (
            <div className="main">
                <Header />
                <div className="notices">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                                <NoticeFilter />
                            </div>
                            <div className="col-md-9">
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
