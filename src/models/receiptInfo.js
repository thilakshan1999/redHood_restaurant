class ReceiptInfo {
  constructor(
    id,
    customerName,
    number,
    orderType,
    address,
    emailAddress,
    deliveryNote,
    cartTotal,
    deliveryCharge,
    serviceCharge,
    netTotal,
    foodItems
  ) {
    this.id = id;
    this.customerName = customerName;
    this.number = number;
    this.orderType = orderType;
    this.address = address;
    this.emailAddress = emailAddress;
    this.deliveryNote = deliveryNote;
    this.cartTotal = cartTotal;
    this.deliveryCharge = deliveryCharge;
    this.serviceCharge = serviceCharge;
    this.netTotal = netTotal;
    this.foodItems = foodItems;
  }
}

class FoodReceipt {
  constructor(foodName, quantity, prize) {
    this.foodName = foodName;
    this.quantity = quantity;
    this.prize = prize;
  }
}

const food1 = new FoodReceipt("Pizza", 2, 10);
const food2 = new FoodReceipt("Burger", 3, 5);

// Creating a list of FoodReceipt objects
const foodItems = [food1, food2];

// Creating an instance of ReceiptInfo with the foodItems list
const dummyReceipt = new ReceiptInfo(
  1,
  "John Doe",
  "123456789",
  "delivery",
  "123 Street, City",
  "john@example.com",
  "Please handle with care",
  30, // cartTotal
  5, // deliveryCharge
  2, // serviceCharge
  37, // netTotal
  foodItems // Passing the list of food items here
);

export { ReceiptInfo, FoodReceipt, dummyReceipt };
