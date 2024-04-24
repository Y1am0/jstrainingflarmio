// Άσκηση 1

const cars_1 = [
  {
    brand: "audi",
    year: 2000,
  },
  {
    brand: "fiat",
    year: 2002,
  },
  {
    brand: "toyota",
    year: 2002,
  },
];

const carsAfter2001 = cars_1.filter((car) => car.year > 2001);

console.log("carsAfter2001", carsAfter2001);

// Άσκηση 2

const cars = [
  {
    brand: "audi",
    year: 2000,
  },
  {
    brand: "fiat",
    year: 2002,
  },
];

const newCars = cars.map((car) => ({ ...car, serviced: true }));

console.log("newcars", newCars);

// Άσκηση 3

const newCars3 = cars.map((car) => ({ [car.brand]: car.year }));

console.log("newCars3", newCars3);

// Άσκηση 4

const newCars4 = (cars, idProp) =>
  cars.reduce((acc, car) => ({ ...acc, [car[idProp]]: car.year }), {});

//  {
//     acc[car[idProp]] = car.year;
//     return acc;
//   }, {});

const carsTransformed = newCars4(cars, "brand");

console.log("carsTransformed", carsTransformed);

// Άσκηση 5

const y = {
  0: {
    id: "123",
    name: "Achilleas",
  },
  1: {
    id: "133",
    name: "Ioanna",
  },
};

// const yKeys = Object.keys(y);

// const result = yKeys.find((key) => y[key].id === "133");

// console.log("result", [result, y[result]]);

const result = Object.entries(y).find(([key, value]) => value.id === "133");

console.log("result", result);

// Άσκηση 6

const cars_6 = [
  {
    brand: "Audi",
    year: 1999,
    price: 12222,
  },
  {
    brand: "Nissan",
    year: 2003,
    price: 24222,
  },
];

const transform = (cars, idProp) =>
  cars.reduce((acc, car) => {
    const { [idProp]: key, ...rest } = car;
    acc[key] = rest;
    return acc;
  }, {});

const transformedCars = transform(cars_6, "brand");

console.log("transformedCars", transformedCars);

// Άσκηση 7

// Λίστα τιμών
const priceList = {
  apple: 12,
  orange: 32,
  pen: 22,
  notebook: 89,
  peach: 18,
};

// Προσφορές
const offers = {
  apple: {
    quantity: 2,
    free: 1,
  },
  orange: {
    quantity: 3,
    free: 1,
  },
};

// Υπολογισμός προσφορών
function applyOffers(item, count, pricePerItem) {
  if (offers[item]) {
    const { quantity, free } = offers[item];
    const paidCount = count - Math.floor(count / quantity) * free;
    return paidCount * pricePerItem;
  }
  return count * pricePerItem;
}

// Μετατροπή τιμής σε ευρώ και cents

function formatPrice(priceInCents) {
  if (priceInCents >= 100) {
    const euros = Math.floor(priceInCents / 100);
    const cents = priceInCents % 100;
    return `${euros} euros and ${cents} cents`;
  }
  return `${priceInCents} cents`;
}

// Υπολογισμός συνολικής τιμής
function calculateTotal(basket, priceList) {
  const itemCount = basket.reduce(
    (acc, item) => ({ ...acc, [item]: (acc[item] || 0) + 1 }),
    {}
  );
  //   const itemCount = basket.reduce((acc, item) => {
  //     acc[item] = (acc[item] || 0) + 1;
  //     return acc;
  //   }, {});

  const totalCents = Object.entries(itemCount).reduce(
    (total, [item, count]) => {
      const pricePerItem = priceList[item];
      if (!pricePerItem) return total; // Αν δε βρεθεί τιμή
      return total + applyOffers(item, count, pricePerItem); // Εφαρμογή προσφορών στο ποσό
    },
    0
  );
  //       const pricePerItem = priceList[item];
  //       if (!pricePerItem) return total; // Αν δε βρεθεί τιμή

  //       Εφαρμογή προσφορών στο ποσό
  //       total += applyOffers(item, count, pricePerItem);
  //       return total;
  //     },
  //     0
  //   );

  return formatPrice(totalCents);
}

///////////////

const basket1 = ["apple", "apple", "orange", "apple"];
const basket2 = [
  "apple",
  "pen",
  "peach",
  "apple",
  "pen",
  "peach",
  "notebook",
  "notebook",
  "orange",
];
const basket3 = [
  "apple",
  "apple",
  "orange",
  "apple",
  "orange",
  "orange",
  "apple",
  "apple",
];

console.log("Total for basket 1:", calculateTotal(basket1, priceList), "cents");
console.log("Total for basket 2:", calculateTotal(basket2, priceList), "cents");
console.log("Total for basket 3:", calculateTotal(basket3, priceList), "cents");
