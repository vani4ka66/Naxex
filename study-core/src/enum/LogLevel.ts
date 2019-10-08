import Utils from "util/Utils";

enum LogLevel {

    DISABLED,
    ERROR,
    WARNING,
    INFO,
    DEBUG,
}

namespace LogLevel {

    export function deserialize(logLevel: string): LogLevel {
        if (Utils.isNotEmpty(logLevel)) {
            switch (logLevel) {
                case "disabled":
                    return LogLevel.DISABLED;
                case "error":
                    return LogLevel.ERROR;
                case "warn":
                    return LogLevel.WARNING;
                case "info":
                    return LogLevel.INFO;
                case "debug":
                    return LogLevel.DEBUG;
            }
        }
        return null;
    }
}

export default LogLevel;
