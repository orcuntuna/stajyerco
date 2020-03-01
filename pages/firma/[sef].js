import React from "react";
import {Header} from "../../src/components";
import CompanyProfile from "../../src/components/company_profile/CompanyProfile";

export default class CompanyProfilePage extends React.Component {
    render() {
        return (
            <div className="main">
                <Header />
                <CompanyProfile/>
            </div>
        );
    }
}
