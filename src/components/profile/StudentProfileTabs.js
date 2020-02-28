import React from "react";
import {Icon, Tabs} from "antd";
import TabPersonal from "./TabPersonal";
import TabEducation from "./TabEducation";

const { TabPane } = Tabs;

export default class StudentProfileTabs extends React.Component {
    render() {
        return (
            <div className="col-md-9 col-xl-10 profile-right">
                <div className="tabs">
                    <Tabs defaultActiveKey="1" onChange={(key) => console.log(key)}>
                        <TabPane tab="Kişisel Bilgiler" key="1">
                            <TabPersonal />
                        </TabPane>
                        <TabPane tab="Eğitimler" key="2">
                            <TabEducation />
                        </TabPane>
                        <TabPane tab="Deneyimler" key="3">
                            Content of Tab Pane 3
                        </TabPane>
                        <TabPane tab="Sertifikalar" key="4">
                            Content of Tab Pane 3
                        </TabPane>
                        <TabPane tab="Yetenekler" key="5">
                            Yetenekler
                        </TabPane>
                        <TabPane tab="Projeler" key="6">
                            Content of Tab Pane 3
                        </TabPane>
                    </Tabs>
                </div>
            </div>
        );
    }
}
