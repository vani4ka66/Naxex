import React from "react";
import withStyles, {WithStyles} from "react-jss";
import {clockStyles} from "./styles";
import DateTime from "core/format/DateTime";
import Utils from "util/Utils";

export interface ClockState {

    value: number;
}

class Clock extends React.Component<WithStyles<any>, ClockState> {

    private _registration: any;

    constructor(props) {
        super(props);
        this.state = {
            value: 0
        };
    }

    public componentDidMount(): void {
        if (Utils.isNull(this._registration)) {
            this._registration = setInterval(() => {
                this.setState({
                    value: new Date().getTime()
                });
            }, 100);
        }
    }

    public componentWillUnmount(): void {
        if (Utils.isNotNull(this._registration)) {
            clearInterval(this._registration);
            this._registration = null;
        }
    }

    public shouldComponentUpdate(nextProps: Readonly<WithStyles<any>>, nextState: Readonly<ClockState>, nextContext: any): boolean {
        const seconds: number = new Date(this.state.value).getSeconds();
        const asString: string = seconds.toString(10);
        return parseInt(asString.charAt(0), 10) % 2 !== 0;
    }

    public render() {
        const {classes} = this.props;
        const {value} = this.state;

        return (
            <div className={classes.root}>
                <div className={classes.timer}>
                    {DateTime.formatTimeSS(value)}
                </div>
            </div>
        );
    }
}

export default withStyles(clockStyles)(Clock);
