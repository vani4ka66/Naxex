import React from "react";
// @ts-ignore
import withStyles, {WithStyles} from "react-jss";
import {rootStyles} from "./styles";
import {AppContext} from "app/context/AppContext";
import Header from "component/header/Header";
import Content from "component/content/Content";

export interface RootProps extends WithStyles<any> {

    classes: any;
}

class Root extends React.Component<RootProps> {

    public render() {
        const {classes} = this.props;
        return (
            <AppContext>
                <div className={classes.root}>
                    <Header />
                    <Content />
                </div>
            </AppContext>
        );
    }
}

export default withStyles(rootStyles)(Root);
