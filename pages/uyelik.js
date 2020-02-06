import React from "react";
import {Header,Breadscrumb,Login,Register,Footer} from "../src/components";

export default class Index extends React.Component {
    render() {
        return (
            <div className="main">
                <Header />
                <Breadscrumb title={"Üyelik İşlemleri"} />
                <div className="membership">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <Login />
                            </div>
                            <div className="col-12 col-md-6">
                                <Register />
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}
