import React from "react";
import ReactDOM from "react-dom";
// @ts-ignore
import {createGenerateId, jss, JssProvider, ThemeProvider} from "react-jss";
import Logger from "core/logger/Logger";
import {ThemeLoader} from "app/theme/ThemeLoader";
import Root from "component/root/Root";

const logger: Logger = Logger.Of("App");

ThemeLoader.instance().load()
    .then((theme: {definition: object}) => {
        logger.info("Theme loaded. Render App");

        ReactDOM.render(
            <JssProvider generateId={createGenerateId()} jss={jss}>
                <ThemeProvider theme={theme.definition}>
                    <Root/>
                </ThemeProvider>
            </JssProvider>,
            document.getElementById("Root")
        );
    })
    .catch(() => {
        logger.error("Failed to load Theme.");
    });
