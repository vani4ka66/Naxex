import {TSMap} from "typescript-map";

export default class Utils {

    private constructor() {
    }

    public static isNotNull(val: any): boolean {
        return typeof val !== "undefined" && val !== null;
    }

    public static isNull(val: any): boolean {
        return typeof val === "undefined" || val === null;
    }

    public static isNotEmpty(val: string): boolean {
        return typeof val !== "undefined" && val !== null && val.length > 0;
    }

    public static isEmpty(val: string): boolean {
        return typeof val === "undefined" || val === null || val.length === 0;
    }

    public static isArrayNotEmpty(val: any[]): boolean {
        return typeof val !== "undefined" && val !== null && val.length > 0;
    }

    public static isArrayEmpty(val: any[]): boolean {
        return typeof val === "undefined" || val === null || val.length === 0;
    }

    public static isObjectEmpty(val: any): boolean {
        return Utils.isNull(val) || Object.keys(val).length === 0 && val.constructor === Object;
    }

    public static isMapNotEmpty(val: TSMap<any, any>): boolean {
        return typeof val !== "undefined" && val !== null && (val.size() > 0 || val.keys().length > 0);
    }

    public static isMapEmpty(val: TSMap<any, any>): boolean {
        return typeof val === "undefined" || val === null || val.size() === 0 || val.keys().length === 0;
    }

    public static isObject(item: any): boolean {
        return (item && typeof item === "object" && !Array.isArray(item));
    }

    public static nullToEmpty(val: string): string {
        return this.isNotEmpty(val) ? val : "";
    }

    public static greaterThen0(val: number): boolean {
        return this.isNotNull(val) && val > 0;
    }

    public static not0(val: number): boolean {
        return this.isNotNull(val) && val !== 0;
    }

    public static lessThen0(val: number): boolean {
        return this.isNotNull(val) && val < 0;
    }

    public static has(array: any[], val: any): boolean {
        if (Utils.isArrayNotEmpty(array) && Utils.isNotNull(val)) {
            for (let i = 0; i < array.length; i++) {
                if (array[i] === val) {
                    return true;
                }
            }
        }
        return false;
    }

    public static checkNotNull<T>(reference: T, msg?: string): T {
        if (Utils.isNull(reference)) {
            throw new ReferenceError(msg);
        }
        return reference;
    }

    public static randomInt(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    public static remove<T>(arr: T[], item: T): boolean {
        if (Utils.isArrayNotEmpty(arr) && item) {
            for (let i: number = 0; i < arr.length; i++) {
                if (arr[i] === item) {
                    arr.splice(i, 1);
                    return true;
                }
            }
        }
        return false;
    }

    public static deepCopy(source: object): object {
        return JSON.parse(JSON.stringify(source));
    }

    public static to<T, U = any>(
        promise: Promise<T>,
        errorExt?: object
    ): Promise<[U | null, T | undefined]> {
        return promise
            .then<[null, T]>((data: T) => [null, data])
            .catch<[U, undefined]>((err) => {
                if (errorExt) {
                    Object.assign(err, errorExt);
                }
                return [err, undefined];
            });
    }
}
