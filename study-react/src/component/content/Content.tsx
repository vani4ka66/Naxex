import React from "react";
// @ts-ignore
import withStyles, {WithStyles} from "react-jss";
import {contentStyles} from "./styles";
import {AppContextConsumer, AppContextValue} from "app/context/AppContext";
import {ViewType} from "app/ViewType";
import RadioButtonGroup from "component/radio/RadioButtonGroup";
import Clock from "component/clock/Clock";

export interface ContentProps extends WithStyles<any> {

    classes: any;
}

class Content extends React.Component<ContentProps, any> {

    private content(viewType: ViewType): JSX.Element {
        switch (viewType) {
            case ViewType.Clock:
                return <Clock />;
        }
        return null;
    }

    public render() {
        const {classes} = this.props;

        return (
            <div className={classes.root}>
                <AppContextConsumer>
                    {(value: AppContextValue) =>
                        <>
                            <RadioButtonGroup />
                            <div className={classes.content}>
                                <div className={classes.contentHeader}>
                                    {value.viewType}
                                </div>
                                <div className={classes.contentPageWrapper}>
                                    {
                                        this.content(value.viewType)
                                    }
                                </div>
                            </div>
                            <div className={classes.sideBar}></div>
                        </>
                    }
                </AppContextConsumer>
            </div>
        );
    }
}

export default withStyles(contentStyles)(Content);
