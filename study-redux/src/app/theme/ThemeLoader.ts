import Utils from "util/Utils";

export class ThemeLoader {

    private static _instance: ThemeLoader;

    private constructor() {
    }

    public static instance(): ThemeLoader {
        return this._instance || (this._instance = new this());
    }

    public load(): Promise<object> {
        return new Promise<any>(
            (resolve, reject) => {
                let handler;
                try {
                    const context = require.context("bundle-loader!../../../resources/theme/", false, /theme\.js/);
                    handler = context("./theme.js");
                } catch (e) {
                    reject(e);
                }
                if (Utils.isNotNull(handler)) {
                    handler((data: any) => {
                        resolve(data);
                    });
                }
            }
        );
    }
}
