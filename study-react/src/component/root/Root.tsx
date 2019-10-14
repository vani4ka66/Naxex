import React from "react";
// @ts-ignore
import withStyles, {WithStyles} from "react-jss";
import {rootStyles} from "./styles";
import Header from "component/header/Header";
import Content from "component/content/Content";

export interface RootProps extends WithStyles<any> {

    classes: any;
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

export default withStyles(rootStyles)(Root);
