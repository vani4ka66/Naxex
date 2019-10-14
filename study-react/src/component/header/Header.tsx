import React from "react";
import injectSheet from "react-jss";
import {headerStyles} from "./styles";

export interface HeaderProps {

    classes?: any;
}

class Header extends React.Component<HeaderProps> {

    public render() {
        const {classes} = this.props;

        return (
            <div className={classes.root}>
                <div className={classes.logo}></div>
            </div>
        );
    }
}

export default injectSheet(headerStyles)(Header);
