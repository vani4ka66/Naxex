import {ViewType} from "app/ViewType";
import {TSMap} from "typescript-map";
import {Order} from "core/order/Order";

export interface ReduxState {

    app: AppState;
    clock: ClockState;
    form: FormState;
    trading: TradingState;
}

export interface AppState {

    viewType?: ViewType;
}

export interface ClockState {

    value?: number;
}

export interface FormState {

    name?: string;
}

export interface TradingState {

    orders: TSMap<number, Order>;
}
