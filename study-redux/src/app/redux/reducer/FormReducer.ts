import {ReducerBuilder} from "redux-ts";
import {Action} from "redux";
import {FormState} from "app/redux/ReduxState";
import Logger from "core/logger/Logger";
import {SetEmail, SetName, SetPhone} from "app/redux/ReduxActions";

export class FormReducer {

    private static _instance: FormReducer;
    private _logger: Logger = Logger.Of(this.constructor.toString().match(/\w+/g)[1]);
    private readonly _reducer: (s: FormState, a: Action) => FormState;

    public static instance(): FormReducer {
        return this._instance || (this._instance = new this());
    }

    private constructor() {
        const builder: ReducerBuilder<FormState> = new ReducerBuilder<FormState>();
        this.setup(builder);
        this._reducer = builder.build();
    }

    private setup(builder: ReducerBuilder<FormState>): void {
        builder
            .init({
            })
            .handle(SetName, (state: FormState, action: SetName) => {
                return Object.assign({}, state, {
                    name: action.name
                });
            })
            .handle(SetEmail, (state: FormState, action: SetEmail) => {
                return Object.assign({}, state, {
                    email: action.email
                });
            })
            .handle(SetPhone, (state: FormState, action: SetPhone) => {
                return Object.assign({}, state, {
                    phone: action.phone
                });
            })
            .build();
    }

    public get reducer(): (s: FormState, a: Action) => FormState {
        return this._reducer;
    }
}
