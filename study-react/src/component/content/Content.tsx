import React from "react";
// @ts-ignore
import withStyles, {WithStyles} from "react-jss";
import {contentStyles} from "./styles";
import Logger from "core/logger/Logger";
import RadioButtonGroup from "component/radio/RadioButtonGroup";
import {ViewType} from "app/ViewType";

export interface ContentProps extends WithStyles<any> {

    classes: any;
}

export interface ContentState {

    viewType: ViewType;
}

class Content extends React.Component<ContentProps, ContentState> {

    private readonly _logger: Logger = Logger.Of(this.constructor.toString().match(/\w+/g)[1]);

    public constructor(props: ContentProps) {
        super(props);
        this.state = {
            viewType: ViewType.Timer
        };
    }

    private onChange = (viewType: ViewType): void => {
        this.setState({
            viewType
        });
    }

    public render() {
        const {classes} = this.props;
        const {viewType} = this.state;
        this._logger.info("Use view type: " + viewType);

        return (
            <div className={classes.root}>
                <RadioButtonGroup viewType={viewType} onChange={this.onChange}/>
                <div className={classes.contentWrapper}>
                    <div className={classes.content}>
                        <div className={classes.contentHeader}>
                        </div>
                        <div className={classes.contentPageWrapper}>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(contentStyles)(Content);
