import React from "react";
import {ROUTES} from "../../constants/Routes";
import { Link, Redirect } from "react-router-dom";


import Footer from "./dashboard/Footer";

const Page404 = (props: any) => {
    return (
        <div>
            <div className="app-wrapper">

                <div className="container mb-5">
                    <div className="row">
                        <div className="col-12 col-md-11 col-lg-7 col-xl-6 mx-auto">
                            <div className="app-branding text-center mb-5">
                                <Link className="app-logo" to={ROUTES.landing_page}><span
                                    className="logo-text">GTL Assessment</span></Link>

                            </div>
                            <div className="app-card p-5 text-center shadow-sm">
                                <h1 className="page-title mb-4">404<br/><span className="font-weight-light">Page Not Found</span>
                                </h1>
                                <div className="mb-4">
                                    Sorry, we can't find the page you're looking for.
                                </div>
                                <Link className="btn app-btn-primary" to={ROUTES.landing_page}>Go to home page</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer props={props}/>
            </div>
        </div>
    );
}

export default Page404;
