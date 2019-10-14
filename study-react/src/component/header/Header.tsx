import React from "react";
import withStyles, {WithStyles} from "react-jss";
import {headerStyles} from "./styles";

export interface HeaderProps extends WithStyles<any> {

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

export default withStyles(headerStyles)(Header);
