import React from "react";
import Content from "./Content";
import Header from "../common/dashboard/Header";


const Container = (history) => {
    return (
        <div className="app">
            <Header history={history} />
            <Content history={history}/>
        </div>
    );
};

export default Container;
