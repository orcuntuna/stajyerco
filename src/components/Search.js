import React from "react";
import { Select, Icon } from "antd";

export default class Search extends React.Component {

    onChange(value) {
        console.log(`selected ${value}`);
    }

    onBlur() {
        console.log('blur');
    }

    onFocus() {
        console.log('focus');
    }

    onSearch(val) {
        console.log('search:', val);
    }

    render() {
        return (
            <div className="search">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-8">
                            <h1>Find The Job That Fits Your Life</h1>
                            <p>Each month, more than 7 million jobseekers turn to website in their search for work, making over 160,000 applications every day.</p>
                        </div>
                    </div>
                    <div className="row search-form">
                        <div className="col-md-4 d-pr-0">
                            <div className="select-icon">
                                <Icon type="bank" style={{fontSize: "24px"}} />
                            </div>
                            <Select
                                showSearch={true}
                                size={"large"}
                                className="select"
                                placeholder="Üniversitenizi seçiniz.."
                                optionFilterProp="children"
                                onChange={this.onChange}
                                onFocus={this.onFocus}
                                onBlur={this.onBlur}
                                onSearch={this.onSearch}
                                filterOption={(input, option) =>
                                    option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }>
                                <Select.Option value="1">Karadeniz Teknik Üniversitesi</Select.Option>
                                <Select.Option value="2">İstanbul Teknik Üniversitesi</Select.Option>
                                <Select.Option value="3">Yıldız Teknik Üniversitesi</Select.Option>
                            </Select>
                        </div>
                        <div className="col-md-3 d-pr-0">
                            <div className="select-icon">
                                <Icon type="pushpin" style={{fontSize: "24px"}} />
                            </div>
                            <Select
                                showSearch={true}
                                size={"large"}
                                className="select"
                                placeholder="Şehir seçiniz.."
                                optionFilterProp="children"
                                onChange={this.onChange}
                                onFocus={this.onFocus}
                                onBlur={this.onBlur}
                                onSearch={this.onSearch}
                                filterOption={(input, option) =>
                                    option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }>
                                <Select.Option value="1">İstanbul</Select.Option>
                                <Select.Option value="2">Ankara</Select.Option>
                                <Select.Option value="3">İzmir</Select.Option>
                                <Select.Option value="4">Trabzon</Select.Option>
                            </Select>
                        </div>
                        <div className="col-12 col-md-4">
                            <button className="search-button">
                                <span>İlan Ara</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
