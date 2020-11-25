const order = {
  name: "Rafael Andrade",
  phoneNumber: "11-98763-1416",
  address: {
    street: "Rua das Flores",
    number: "389",
    apartment: "701",
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: "Coca-Cola Zero",
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: "Ana Silveira",
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

const orderModifier = (order) => {
    order.payment.total = 50;
    const deliveryPerson = order.order.delivery.deliveryPerson;
    const typeDrink = order.order.drinks.coke.type;
    const total = order.payment.total;
    return `Olá ${deliveryPerson}, o total do seu pedido de muzzarella, calabresa e ${typeDrink} é R$ ${total.toFixed(2)}.`

};

console.log(orderModifier(order));