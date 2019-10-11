import Logger from "core/logger/Logger";
import {BuyOrder} from "core/order/BuyOrder";
import {SellOrder} from "core/order/SellOrder";
import Orders from "core/order/Orders";
import {Currency} from "enum/Currency";

const logger: Logger = Logger.Of("App");
logger.info("Start app.");

const order1: BuyOrder = new BuyOrder(1, 12, Currency.EUR, 1590533087470);
const order2: BuyOrder = new BuyOrder(2, 26.45, Currency.EUR, 1570533087470);
const order3: SellOrder = new SellOrder(3, 56.1412, Currency.USD, 1560533087470);
const order4: SellOrder = new SellOrder(4, 7.066, Currency.EUR, 1540533087470);
const order5: BuyOrder = new BuyOrder(5, 31.125, Currency.USD, 1510533087470);

const orders = new Orders();
orders.addOrder(order1);
orders.addOrder(order2);
orders.addOrder(order3);
orders.addOrder(order4);
orders.addOrder(order5);

orders.forEach((order) => {
    logger.info("Visit order: " + JSON.stringify(order));
});
