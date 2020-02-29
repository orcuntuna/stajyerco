import React from "react";
import {List} from "antd";

const data = [
    {
        name: "Girişimcilik Sertifikası",
        from: "KOSGEB",
        date: "17.03.2019",
        description: "KOSGEB Girişimcilik Eğitimi ve Girişimcilik Sertifikası"
    },
    {
        name: "Galactic Member Team",
        from: "NASA Space Apps Challenge",
        date: "20.10.2018",
        description: "NASA'nın alt orginzasyonu olan Space Apps Challange etkinliği."
    },
];

export default class TabEducation extends React.Component {
    render() {
        return (
            <div className="tab-certificate">
                <List
                    bordered
                    dataSource={data}
                    renderItem={item => (
                        <List.Item>
                            <div className="list">
                                <p className="title">{item.name} <span>({item.from})</span></p>
                                <p className="desc">{item.description}</p>
                                <p className="years">{item.date}</p>
                            </div>
                        </List.Item>
                    )}
                />
            </div>
        );
    }
}
