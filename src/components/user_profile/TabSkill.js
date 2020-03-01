import React from "react";
import {List,Progress} from "antd";

const data = [
    {
        skill: "PHP",
        rate: 70
    },
    {
        skill: "JavaScript",
        rate: 100
    },
    {
        skill: "Python",
        rate: 80
    },
];

export default class TabSkill extends React.Component {
    render() {
        return (
            <div className="tab-skills">
                <List
                    bordered
                    dataSource={data}
                    renderItem={item => (
                        <List.Item>
                            <div className="list">
                                <p className="title">{item.skill}</p>
                                <Progress percent={item.rate} />
                            </div>
                        </List.Item>
                    )}
                />
            </div>
        );
    }
}
