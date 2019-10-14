import React from "react";
import withStyles, {WithStyles} from "react-jss";
import {timerStyles} from "component/timer/styles";

interface TimerProps extends WithStyles<any> {

}

export const Timer: React.FunctionComponent<TimerProps> = (props: TimerProps): JSX.Element => {

    const {classes} = props;

    return (
        <div className={classes.root}>
        </div>
    );
};

export default withStyles(timerStyles)(Timer);
