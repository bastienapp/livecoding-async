import {
  findAll,
  findById,
  findByPrice,
  quiVientEnSoirée,
} from "./products.js";

findAll(function (products) {
  console.log("findAll", products);
});

console.log("before findById");
findById(4)
  .then((response) => console.log("findById response", response))
  .catch((error) => console.error(error));
console.log("after findById");

console.log("before findByPrice");
try {
  const result = await findByPrice(200);
  console.log("await findByPrice", result);
} catch (error) {
  console.error(error);
}
console.log("after findByPrice");

quiVientEnSoirée(function (listeDePotes) {
  console.log(listeDePotes);
});
