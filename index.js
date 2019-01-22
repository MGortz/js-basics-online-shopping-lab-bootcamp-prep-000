var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemObject = {
    itemName: `${item}`, 
    itemPrice: Math.floor(Math.random() * 100) + 1
  };
  cart.push(itemObject);
  return `${itemObject.itemName} has been added to your cart.`;
}

function viewCart() {
  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  } else if (cart.length === 1) {
    return `In your cart, you have ${getCart()[0].itemName} at \$${getCart()[0].itemPrice}.`;
  } else if (cart.length === 2) {
    return `In your cart, you have ${getCart()[0].itemName} at \$${getCart()[0].itemPrice}, and ${getCart()[1].itemName} at \$${getCart()[1].itemPrice}.`;
  } else if (cart.length > 2) {
    var newCartArray = [];
    for (var i = 0; i < cart.length - 1; i++) {
      var itemElement = `${getCart()[i].itemName} at \$${getCart()[i].itemPrice}`;
      newCartArray.push(` ${itemElement}`);
    }
    var selectFinalElement = cart.length - 1;
    return `In your cart, you have${newCartArray.join()}, and ${getCart()[selectFinalElement].itemName} at \$${getCart()[selectFinalElement].itemPrice}.`;
    }
}

function total() {
  var totalSum = 0;
  for (var i = 0; i < cart.length; i++) {
    totalSum += getCart()[i].itemPrice;
  }
  return totalSum;
}

function removeFromCart(item) {
  var unknownItemArray = [];
  for (var i = 0; i < cart.length; i++) {
    if (item === `${getCart()[i].itemName}`) {
      cart.splice(i, 1);
    } else {
      unknownItemArray.push(item);
    }
  }
  if (unknownItemArray.length > 0) {
    return "That item is not in your cart.";
  } else {
    return cart;
  }
}

function placeOrder(cardNumber) {
  if (isNaN(cardNumber)) {
    return "Sorry, we don't have a credit card on file for you.";
  } else {
    var cartTotal = total();
    cart = [];
    return `Your total cost is \$${cartTotal}, which will be charged to the card ${cardNumber}.`;
  }
}
