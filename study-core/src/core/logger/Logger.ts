/* tslint:disable:no-console */
import Utils from "util/Utils";
import LogLevel from "enum/LogLevel";
import DateTime from "core/format/DateTime";

export default class Logger {

    private static LOG_LEVEL: LogLevel = LogLevel.DEBUG;
    private name: string;

    public static Of(name: string): Logger {
        return new Logger(name);
    }

    public static setLogLevel(logLevel: string): void {
        Logger.SetLogLevel(LogLevel.deserialize(logLevel));
    }

    public static SetLogLevel(logLevel: LogLevel): void {
        if (Utils.isNotNull(logLevel)) {
            Logger.LOG_LEVEL = logLevel;
        }
    }

    private constructor(name: string) {
        this.name = name;
    }

    private format(level: string): string {
        return [DateTime.format(new Date().getTime()), level, "[", this.name, "]", " "].join("");
    }

    public debug(message?: any, ...optionalParams: any[]): void {
        if (Logger.LOG_LEVEL >= LogLevel.DEBUG) {
            if (Utils.isArrayNotEmpty(optionalParams)) {
                console.debug(this.format(" D "), message, JSON.stringify(optionalParams));
            } else {
                console.debug(this.format(" D "), message);
            }
        }
    }

    public info(message?: any, ...optionalParams: any[]): void {
        if (Logger.LOG_LEVEL >= LogLevel.INFO) {
            if (Utils.isArrayNotEmpty(optionalParams)) {
                console.info(this.format(" I "), message, JSON.stringify(optionalParams));
            } else {
                console.info(this.format(" I "), message);
            }
        }
    }

    public warn(message?: any, ...optionalParams: any[]): void {
        if (Logger.LOG_LEVEL >= LogLevel.WARNING) {
            if (Utils.isArrayNotEmpty(optionalParams)) {
                console.warn(this.format(" W "), message, JSON.stringify(optionalParams));
            } else {
                console.warn(this.format(" W "), message);
            }
        }
    }

    public error(message?: any, ...optionalParams: any[]): void {
        if (Logger.LOG_LEVEL >= LogLevel.ERROR) {
            if (Utils.isArrayNotEmpty(optionalParams)) {
                console.error(this.format(" E "), message, JSON.stringify(optionalParams));
            } else {
                console.error(this.format(" E "), message);
            }
        }
    }
}
