import * as React from "react";
import Logger from "core/logger/Logger";
import {ViewType} from "app/ViewType";

export interface AppContextState {

    viewType?: ViewType;
}

export interface AppContextValue extends AppContextState {

    setViewType?: (viewType: ViewType) => void;
}

const { Provider, Consumer } = React.createContext<AppContextValue>({
});

export const AppContextConsumer: React.Consumer<AppContextValue> = Consumer;

export class AppContext extends React.Component<any, AppContextState> {

    private readonly _logger: Logger = Logger.Of(this.constructor.toString().match(/\w+/g)[1]);

    constructor(props: any) {
        super(props);
        this.state = {
            viewType: ViewType.Clock
        };
    }

    private setViewType = (viewType: ViewType): void => {
        this._logger.info("Set view type: " + viewType);
        this.setState({
            viewType
        });
    }

    public render() {
        return (
            <Provider value={{
                ...this.state,
                setViewType: this.setViewType
            }}>
                {this.props.children}
            </Provider>
        );
    }
}
