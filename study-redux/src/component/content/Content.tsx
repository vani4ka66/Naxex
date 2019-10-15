import React from "react";
import {connect} from "react-redux";
// @ts-ignore
import withStyles, {WithStyles} from "react-jss";
import {contentStyles} from "./styles";
import {ViewType} from "app/ViewType";
import RadioButtonGroup from "component/radio/RadioButtonGroup";
import Clock from "component/clock/Clock";
import Utils from "util/Utils";
import {Dispatch} from "redux";
import {ReduxState} from "app/redux/ReduxState";
import {SetClockRed} from "app/redux/ReduxActions";

interface ContentProps extends WithStyles<any> {

    classes: any;
    appViewType: ViewType;
    isRedClock: boolean;
    dispatch?: Dispatch<ReduxState>;
}

class Content extends React.Component<ContentProps, any> {

    private _clockSwitcher: any;

    private content(viewType: ViewType): JSX.Element {
        if (Utils.isNotNull(this._clockSwitcher)) {
            clearInterval(this._clockSwitcher);
            this._clockSwitcher = null;
        }
        switch (viewType) {
            case ViewType.Clock:
                this._clockSwitcher = setInterval(() => {
                    this.props.dispatch(new SetClockRed(!this.props.isRedClock));
                }, 10000);
                return <Clock />;
        }
        return null;
    }

    public componentWillUnmount(): void {
        if (Utils.isNotNull(this._clockSwitcher)) {
            clearInterval(this._clockSwitcher);
            this._clockSwitcher = null;
        }
    }

    public render() {
        const {classes, appViewType} = this.props;

        return (
            <div className={classes.root}>
                <RadioButtonGroup />
                <div className={classes.content}>
                    <div className={classes.contentHeader}>
                        {appViewType}
                    </div>
                    <div className={classes.contentPageWrapper}>
                        {
                            this.content(appViewType)
                        }
                    </div>
                </div>
                <div className={classes.sideBar}></div>
            </div>
        );
    }
}

export default connect((state: ReduxState, ownProps: any) => {
    return Object.assign({}, ownProps, {
        appViewType: state.app.viewType,
        isRedClock: state.clock.isRed
    });
},
    (dispatch: Dispatch<ReduxState>, ownProps: ContentProps) => {
    return Object.assign({}, ownProps, {
        dispatch
    });
})(withStyles(contentStyles)(Content));
