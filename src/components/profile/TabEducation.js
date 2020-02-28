import React from "react";
import {List} from "antd";

const data = [
    {
        school: "Karadeniz Teknik Üniversitesi",
        department: "Yazılım Mühendisliği",
        startYear: 2017,
        endYear: 2021
    },
    {
        school: "Semiha Şakir Anadolu Lisesi",
        department: "Matematik/Fen",
        startYear: 2013,
        endYear: 2017
    },
];

export default class TabEducation extends React.Component {
    render() {
        return (
            <div className="tab-education">
                <List
                    bordered
                    dataSource={data}
                    renderItem={item => (
                        <List.Item>
                            <div className="education">
                                <p className="school">{item.school}</p>
                                <p className="department">{item.department}</p>
                                <p className="years">{item.startYear}-{item.endYear} ({item.endYear-item.startYear} yıl)</p>
                            </div>
                        </List.Item>
                    )}
                />
            </div>
        );
    }
}
