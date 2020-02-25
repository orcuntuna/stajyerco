import React from "react";
import {Input,Icon} from 'antd';

export default class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className="top">
                    <div className="container">
                        <div className="row">
                            <div className="col-6 col-md-2 footer-col">
                                <h4 className="menu-title">Quick Links</h4>
                                <ul className="menu">
                                    <li><a href="#">Job Packages</a></li>
                                    <li><a href="#">Post New Job</a></li>
                                    <li><a href="#">Jobs Listing</a></li>
                                    <li><a href="#">Jobs Style Grid</a></li>
                                    <li><a href="#">Employer Listing</a></li>
                                    <li><a href="#">Employers Grid</a></li>
                                </ul>
                            </div>
                            <div className="col-6 col-md-2 footer-col">
                                <h4 className="menu-title">For Candidates</h4>
                                <ul className="menu">
                                    <li><a href="#">User Dashboard</a></li>
                                    <li><a href="#">CV Packages</a></li>
                                    <li><a href="#">Candidate Listing</a></li>
                                    <li><a href="#">Candidates Grid</a></li>
                                </ul>
                            </div>
                            <div className="col-12 col-md-3 footer-col show-desktop">
                                <h4 className="menu-title">For Employers</h4>
                                <ul className="menu">
                                    <li><a href="#">Post New</a></li>
                                    <li><a href="#">Job Employer Listing</a></li>
                                    <li><a href="#">Employers Grid</a></li>
                                    <li><a href="#">Job Packages</a></li>
                                    <li><a href="#">Jobs Listing</a></li>
                                    <li><a href="#">Jobs Style Grid</a></li>
                                </ul>
                            </div>
                            <div className="col-12 col-md-5">
                                <h4 className="menu-title">Newsletter</h4>
                                <div className="newsletter">
                                    <p>Subscribe to CareerUp Pacific newsletter to get the latest jobs posted, candidates ,and other latest news stay updated.</p>
                                    <div className="form">
                                        <input placeholder="E-posta adresiniz" type="text"/>
                                        <button><Icon type="check" /></button>
                                    </div>
                                    <ul className="social-links">
                                        <li><a href="#"><Icon type="facebook" theme="filled" /></a></li>
                                        <li><a href="#"><Icon type="twitter-square" theme="filled" /></a></li>
                                        <li><a href="#"><Icon type="linkedin" theme="filled" /></a></li>
                                        <li><a href="#"><Icon type="youtube" theme="filled" /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <div className="container">
                        <div className="bottom-flex">
                            <p>© 2019 CareerUp. All Rights Reserved.</p>
                            <ul>
                                <li><a href="#">Site Map</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Terms of Service</a></li>
                                <li><a href="#">Security & Privacy</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}
