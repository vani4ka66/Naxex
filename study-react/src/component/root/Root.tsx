import React from "react";
import injectSheet from "react-jss";
import {rootStyles} from "./styles";
import Header from "component/header/Header";
import Content from "component/content/Content";

export interface RootProps {

    classes?: any;
}

class Root extends React.Component<RootProps> {

    public render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <Header />
                <Content />
            </div>
        );
    }
}

export default injectSheet(rootStyles)(Root);
