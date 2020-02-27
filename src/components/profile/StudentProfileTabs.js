import React from "react";
import {Icon, Tabs} from "antd";

const { TabPane } = Tabs;

export default class StudentProfileTabs extends React.Component {
    render() {
        return (
            <div className="col-md-9 col-xl-10 profile-right">
                <div className="tabs">
                    <Tabs defaultActiveKey="1" onChange={(key) => console.log(key)}>
                        <TabPane tab="Kişisel Bilgiler" key="1">
                            kişisel bilgilerin içi
                        </TabPane>
                        <TabPane tab="Eğitimler" key="2">
                            Content of Tab Pane 2
                        </TabPane>
                        <TabPane tab="Deneyimler" key="3">
                            Content of Tab Pane 3
                        </TabPane>
                        <TabPane tab="Sertifikalar" key="4">
                            Content of Tab Pane 3
                        </TabPane>
                        <TabPane tab="Sertifikalar" key="5">
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
