import {ReducerBuilder} from "redux-ts";
import {Action} from "redux";
import {ClockState} from "app/redux/ReduxState";
import Logger from "core/logger/Logger";
import {SetClockRed, SetClockValue} from "app/redux/ReduxActions";

export class ClockReducer {

    private static _instance: ClockReducer;
    private _logger: Logger = Logger.Of(this.constructor.toString().match(/\w+/g)[1]);
    private readonly _reducer: (s: ClockState, a: Action) => ClockState;

    public static instance(): ClockReducer {
        return this._instance || (this._instance = new this());
    }

    private constructor() {
        const builder: ReducerBuilder<ClockState> = new ReducerBuilder<ClockState>();
        this.setup(builder);
        this._reducer = builder.build();
    }

    private setup(builder: ReducerBuilder<ClockState>): void {
        builder
            .init({
                value: 0
            })
            .handle(SetClockValue, (state: ClockState, action: SetClockValue) => {
                return Object.assign({}, state, {
                    value: action.value
                });
            })
            .handle(SetClockRed, (state: ClockState, action: SetClockRed) => {
                return Object.assign({}, state, {
                    isRed: action.red
                });
            })
            .build();
    }

    public get reducer(): (s: ClockState, a: Action) => ClockState {
        return this._reducer;
    }
}
