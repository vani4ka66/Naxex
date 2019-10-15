import React, {useRef, useEffect, useState} from "react";
import withStyles, {WithStyles} from "react-jss";
import {timerStyles} from "component/timer/styles";
import DateTime from "core/format/DateTime";
import Logger from "core/logger/Logger";
import Utils from "util/Utils";

interface TimerProps extends WithStyles<any> {

}

const Timer: React.FunctionComponent<TimerProps> = (props: TimerProps): JSX.Element => {

    const logger = Logger.Of("Timer");
    const [inputValue, setInputValue] = useState<number>(60);
    const [timerValue, setTimerValue] = useState<number>(60 * 1000);
    const [running, setRunning] = useState<boolean>(false);
    const {classes} = props;

    const toggle = (): void => {
        setRunning(!running);
    };

    const stop = (interval): void => {
        clearInterval(interval);
    };

    const reset = (): void => {
        setTimerValue(inputValue * 1000);
    };

    useEffect(() => {
        logger.info("Use effect. Running: " + running + " Timer value: " + timerValue);
        let interval: any;
        if (running) {
            logger.info("Start timer at: " + timerValue);
            interval = setInterval(() => {
                setTimerValue((value) => {
                    const newValue: number = value - 1000;
                    logger.info("Tick timer: " + newValue);
                    if (newValue <= 0) {
                        stop(interval);
                        toggle();
                    }
                    return newValue;
                });
            }, 1000);
        } else if (!running) {
            stop(interval);
        }
        return () => {
            stop(interval);
        };
    }, [running, setTimerValue]);

    return (
        <div className={classes.root}>
            <div className={classes.inputWrapper}>
                <input type="number" min="10" max="120" value={inputValue} className={classes.input}
                    onChange={(e) => {
                        const value: number = parseInt(e.target.value, 10);
                        setInputValue(value);
                        setTimerValue(value * 1000);
                    }}
                />
                <div>Seconds</div>
            </div>
            <div className={classes.timer}>{
                DateTime.formatMmSs(Utils.greaterThen0(timerValue) ? timerValue : 0)
            }</div>
            <div className={classes.actions}>
                <div className={classes.actionButton} onClick={toggle}>{
                    running ? "Stop" : "Start"
                }</div>
                <div className={classes.actionButton} onClick={reset}>Reset</div>
            </div>
        </div>
    );
};

export default withStyles(timerStyles)(Timer);
