class OrderInfo {
  constructor(
    orderId,
    customerName,
    number,
    orderType,
    address,
    emailAddress,
    deliveryNote,
    orderOn,
    itemsCount,
    cartTotal,
    deliveryCharge,
    serviceCharge,
    netTotal,
    foodList,
    status,
    paymentMethod
  ) {
    this.orderId = orderId;
    this.customerName = customerName;
    this.number = number;
    this.orderType = orderType;
    this.address = address;
    this.emailAddress = emailAddress;
    this.deliveryNote = deliveryNote;
    this.orderOn = orderOn;
    this.itemsCount = itemsCount;
    this.cartTotal = cartTotal;
    this.deliveryCharge = deliveryCharge;
    this.serviceCharge = serviceCharge;
    this.netTotal = netTotal;
    this.foodList = foodList;
    this.status = status;
    this.paymentMethod = paymentMethod;
  }
}

export default OrderInfo;
