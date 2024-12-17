function performCalculations() {
  let random_number = Math.floor(Math.random() * (11 - 1)) + 1;
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(random_number), 1000);
  })
    .then(function (result) {
      console.log(result);
      return new Promise((resolve, reject) => {
        setTimeout(() => resolve(result * 2), 1000);
      });
    })
    .then(function (result) {
      console.log(result);
      return new Promise((resolve, reject) => {
        setTimeout(() => resolve(result + 10), 1000);
      });
    })
    .then(function (result) {
      console.log(result);
      return result;
    });
}

let number = performCalculations();

async function performCalculationsAsync() {
  let result = await new Promise((resolve) =>
    setTimeout(() => resolve(Math.floor(Math.random() * (11 - 1)) + 1), 1000)
  );
  let resultTimes2 = await new Promise((resolve) =>
    setTimeout(() => resolve(result * 2), 1000)
  );
  let finalResult = await new Promise((resolve) =>
    setTimeout(() => resolve(resultTimes2 + 10), 1000)
  );
  return finalResult;
}

let number2 = performCalculationsAsync();

console.log(number2);
