import {Middleware, ReducersMapObject, Store, StoreCreator} from "redux";
import {StoreBuilder} from "redux-ts";
import initSubscriber from "redux-subscriber";
import {ReduxState} from "app/redux/ReduxState";
import Utils from "util/Utils";

export class ReduxStore {

    private readonly _store: Store<ReduxState>;
    private readonly _subscriber: (path: string, listener: (s: ReduxState) => void) => void;

    public constructor(reducersMapObject: ReducersMapObject, middleWares?: Middleware[], initialState?: ReduxState) {
        const builder: StoreBuilder<ReduxState> = new StoreBuilder<ReduxState>();
        if (Utils.isArrayNotEmpty(middleWares)) {
            middleWares.forEach((middleware: Middleware) => {
                if (Utils.isNotNull(middleware)) {
                    builder.withMiddleware(middleware);
                }
            });
        }
        const reducersMap: ReducersMapObject = reducersMapObject || {};
        builder.withReducersMap(reducersMap);
        builder.withEnhancer((f: StoreCreator) => {
            return ((window as any).__REDUX_DEVTOOLS_EXTENSION__) ? (window as any).__REDUX_DEVTOOLS_EXTENSION__ : f;
        });
        if (Utils.isNotNull(initialState)) {
            builder.withInitialState(initialState);
        }
        this._store = builder.build();
        this._subscriber = initSubscriber(this._store);
    }

    public store(): Store<ReduxState> {
        return this._store;
    }

    public subscribe(listener: (s: ReduxState) => void, path?: string): () => void {
        if (Utils.isNotNull(listener)) {
            return (this._subscriber(Utils.isNotEmpty(path) ? path : "", listener) as any);
        }
        return null;
    }
}
