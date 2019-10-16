import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
// @ts-ignore
import {createGenerateId, jss, JssProvider, ThemeProvider} from "react-jss";
import Logger from "core/logger/Logger";
import {ThemeLoader} from "app/theme/ThemeLoader";
import Root from "component/root/Root";
import {ReduxStore} from "app/redux/ReduxStore";
import {ReducersMapObject} from "redux";
import {AppReducer} from "app/redux/reducer/AppReducer";
import {ClockReducer} from "app/redux/reducer/ClockReducer";
import {FormReducer} from "app/redux/reducer/FormReducer";

const logger: Logger = Logger.Of("App");

const reducersMap: ReducersMapObject = {
    app: AppReducer.instance().reducer,
    clock: ClockReducer.instance().reducer,
    form: FormReducer.instance().reducer
};

const reduxStore: ReduxStore = new ReduxStore(reducersMap);

ThemeLoader.instance().load()
    .then((theme: {definition: object}) => {
        logger.info("Theme loaded. Render App");

        ReactDOM.render(
            <Provider store={reduxStore.store()}>
                <JssProvider generateId={createGenerateId()} jss={jss}>
                    <ThemeProvider theme={theme.definition}>
                        <Root/>
                    </ThemeProvider>
                </JssProvider>
            </Provider>,
            document.getElementById("Root")
        );
    })
    .catch(() => {
        logger.error("Failed to load Theme.");
    });
