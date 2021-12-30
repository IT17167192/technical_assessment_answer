import React from "react";
import * as Routes from '../../constants/Routes';
import Home from "../home/Home";
import ViewPosts from "../posts/ViewPosts";
import Page404 from "../common/Page404";

const appendView = (props) => {

    if (props.history.location.pathname === Routes.ROUTES.landing_page) {
        return (
            <Home pathname={props.history.location.pathname}/>
        );
    }else if(props.history.location.pathname === Routes.ROUTES.view_posts){
        return (
            <ViewPosts pathname={props.history.location.pathname}/>
        );
    }else{
        return (
            <Page404 />
        );
    }
};

const WebLayout = (props) => {
    return (
        appendView(props)
    );
};

export default WebLayout;
