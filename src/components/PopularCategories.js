import React from "react";
import {Icon} from "antd";

export default class PopularCategories extends React.Component {
    render() {
        return (
            <section className="popular-categories">
                <div className="container">
                    <div className="section-header">
                        <h3 className="title">Popüler Kategoriler</h3>
                        <button className="browse-all">Tüm Kategorileri Göster</button>
                    </div>
                    <div className="row section-body">
                        {
                            [1,2,3,4,5,6,7,8].map(item => (
                                <div className="col-6 col-md-4 col-lg-3">
                                    <div className="category">
                                        <Icon type="home" />
                                        <h4 className="title">Design & Multimedia</h4>
                                        <h5 className="subtitle"><strong>2</strong> Open Positions</h5>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        );
    }
}
