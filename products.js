const products = [
  {
    id: 1,
    name: "Sandales",
    price: 2,
  },
  {
    id: 2,
    name: "Mocassins",
    price: 20,
  },
  {
    id: 3,
    name: "Tongs",
    price: 10,
  },
  {
    id: 4,
    name: "Doc Martens",
    price: 180,
  },
];

export function findAll(onSuccess) {
  setTimeout(function () {
    onSuccess(products);
  }, 1000);
}

export function findById(id) {
  return new Promise((onSuccess, onFailure) => {
    setTimeout(function () {
      const product = products.find((product) => product.id === id);
      if (product) {
        onSuccess(product);
      } else {
        onFailure(`No product found with id ${id}`);
      }
    }, 1000);
  });
}

export async function findByPrice(price) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      const result = products.filter((product) => product.price >= price);
      if (result.length > 0) {
        resolve(result);
      } else {
        reject(`No products found`);
      }
    }, 1000);
  });
}

const potes = ["Michel", "Jacquie", "Géraldine", "Jean-Louis", "Cunégonde"];

export function quiVientEnSoirée(rappelerBastien) {
  setTimeout(function () {
    rappelerBastien(potes);
  }, 1000);
}
