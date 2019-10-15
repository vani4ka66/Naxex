import {ReducerBuilder} from "redux-ts";
import {Action} from "redux";
import {AppState} from "app/redux/ReduxState";
import Logger from "core/logger/Logger";
import {SetViewType} from "app/redux/ReduxActions";
import {ViewType} from "app/ViewType";

export class AppReducer {

    private static _instance: AppReducer;
    private _logger: Logger = Logger.Of(this.constructor.toString().match(/\w+/g)[1]);
    private readonly _reducer: (s: AppState, a: Action) => AppState;

    public static instance(): AppReducer {
        return this._instance || (this._instance = new this());
    }

    private constructor() {
        const builder: ReducerBuilder<AppState> = new ReducerBuilder<AppState>();
        this.setup(builder);
        this._reducer = builder.build();
    }

    private setup(builder: ReducerBuilder<AppState>): void {
        builder
            .init({
                viewType: ViewType.Clock
            })
            .handle(SetViewType, (state: AppState, action: SetViewType) => {
                this._logger.info("Set view type: " + action.viewType);
                return Object.assign({}, state, {
                    viewType: action.viewType
                });
            })
            .build();
    }

    public get reducer(): (s: AppState, a: Action) => AppState {
        return this._reducer;
    }
}
