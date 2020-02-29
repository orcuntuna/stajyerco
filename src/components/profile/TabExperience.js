import React from "react";
import {List} from "antd";

const data = [
    {
        company: "SONY",
        position: "Front-end Geliştirici Stajyeri",
        startYear: 2017,
        endYear: 2021
    },
    {
        company: "İstanbul Bilişim",
        position: "Jr. Front-end Geliştirici",
        startYear: 2013,
        endYear: 2017
    },
];

export default class TabExperience extends React.Component {
    render() {
        return (
            <div className="tab-experience">
                <List
                    bordered
                    dataSource={data}
                    renderItem={item => (
                        <List.Item>
                            <div className="list">
                                <p className="title">{item.company}</p>
                                <p className="desc">{item.position}</p>
                                <p className="years">{item.startYear}-{item.endYear} ({item.endYear-item.startYear} yıl)</p>
                            </div>
                        </List.Item>
                    )}
                />
            </div>
        );
    }
}
