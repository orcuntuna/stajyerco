import React from "react";
import {Header, StudentProfile} from "../../src/components";
import {Icon} from "antd";

export default class UserProfile extends React.Component {
    render() {
        return (
            <div className="main">
                <Header />
                <StudentProfile />
            </div>
        );
    }
}
