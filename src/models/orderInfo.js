class OrderInfo {
  constructor(
    orderId,
    customerName,
    orderOn,
    itemsCount,
    price,
    foodList,
    status
  ) {
    this.orderId = orderId;
    this.customerName = customerName;
    this.orderOn = orderOn;
    this.itemsCount = itemsCount;
    this.price = price;
    this.foodList = foodList;
    this.status = status;
  }
}

export default OrderInfo;
