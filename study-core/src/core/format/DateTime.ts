import * as moment from "moment";
import Utils from "util/Utils";

export default class DateTime {

    private constructor() {
    }

    public static formatDate(v: number): string {
        return Utils.greaterThen0(v) ? moment(v).format("DD-MM-YYYY") : "-";
    }

    public static formatTime(v: number): string {
        return Utils.greaterThen0(v) ? moment(v).format("HH:mm:ss") : "-";
    }

    public static formatDateTime(v: number): string {
        return Utils.greaterThen0(v) ? moment(v).format("DD-MM-YYYY HH:mm:ss") : "-";
    }

    public static format(v: number): string {
        return Utils.greaterThen0(v) ? moment(v).format("DD-MM-YYYY HH:mm:ss.SSS") : "-";
    }
}
