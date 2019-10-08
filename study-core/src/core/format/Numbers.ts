import Utils from "util/Utils";

export default class Numbers {

    private constructor() {
    }

    public static format(v: number, fraction?: number): string {
        return Utils.isNotNull(v) ? v.toFixed(Utils.isNotNull(fraction) ? fraction : 2) : "-";
    }
}
