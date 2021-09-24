import React, {useRef, useEffect, useState} from "react";
import withStyles, {WithStyles} from "react-jss";
import {counterStyles} from "component/counter/styles";
import DateTime from "core/format/DateTime";
import Logger from "core/logger/Logger";
import Utils from "util/Utils";

interface CounterProps extends WithStyles<any> {

}

const Counter: React.FunctionComponent<CounterProps>  = (props: CounterProps): JSX.Element => {

    const logger1 = Logger.Of("Counter");
    const [counter, setCounter] = useState<number>(0);
    const {classes} = props;

    const add = (): void => {
        setCounter(counter + 1);
    };

    const reset = (): void => {
        setCounter(0);
    };

    useEffect(() => {

        // localStorage.setItem("count", counter);

    });

    return (<div className={classes.root}>

        <div></div>
        <div>Counter: {counter}</div>
        <div className={classes.actions}>
            <button className={classes.actionButton} onClick={add}>Add</button>
            <button className={classes.actionButton} onClick={reset}>Reset</button>
        </div>

    </div>
    );
};

export default  withStyles(counterStyles) (Counter);
