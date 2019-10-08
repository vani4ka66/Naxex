import {TSMap} from "typescript-map";
import {Order} from "core/order/Order";
import Utils from "util/Utils";

export default class Orders {

    private _orders: TSMap<number, Order> = new TSMap();

    public constructor() {}

    public addOrder(order: Order): void {
        Utils.checkNotNull(order);
        this._orders.set(order.id(), order);
    }

    public removeOrder(id: number): boolean {
        const order: Order = this._orders.get(id);
        this._orders.delete(order.id());
        return Utils.isNotNull(order);
    }

    public forEach(consumer: (order: Order) => void): void {
        if (Utils.isNotNull(consumer)) {
            this._orders.forEach(consumer);
        }
    }

    public map<T>(mapper: (order: Order) => T): T[] {
        const result: T[] = [];
        this.forEach((order: Order) => {
            if (Utils.isNotNull(mapper)) {
                result.push(mapper(order));
            } else {
                result.push(Utils.deepCopy(order));
            }
        });
        return result;
    }
}
