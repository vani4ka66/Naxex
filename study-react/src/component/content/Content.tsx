import React from "react";
import injectSheet from "react-jss";
import {contentStyles} from "./styles";
import Logger from "core/logger/Logger";

export interface ContentProps {

    classes?: any;
    routeName?: string;
}

class Content extends React.Component<ContentProps> {

    private readonly _logger: Logger = Logger.Of(this.constructor.toString().match(/\w+/g)[1]);

    public render() {
        const {classes, routeName} = this.props;
        this._logger.info("Use route: " + routeName);

        return (
            <div className={classes.root}>
                <div className={classes.content}>
                    <div className={classes.contentHeader}>
                    </div>
                    <div className={classes.contentPageWrapper}>
                    </div>
                </div>
            </div>
        );
    }
}

export default injectSheet(contentStyles)(Content);
