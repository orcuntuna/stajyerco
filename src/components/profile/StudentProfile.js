import React from "react";
import StudentProfileSidebar from "./StudentProfileSidebar";
import StudentProfileTabs from "./StudentProfileTabs";

export default class StudentProfile extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="student-profile">
                    <div className="row">
                        <StudentProfileSidebar />
                        <StudentProfileTabs />
                    </div>
                </div>
            </div>
        );
    }
}
