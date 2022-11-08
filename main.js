const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('value'), 2000);
});
// .then((result) => console.log(result))
// .finally(() => console.log('Promise ready'));

const p2 = new Promise((res, rej) => {
  setTimeout(() => res('value 2', 5000));
});

Promise.all([p1, p2]).then((results) => console.log(results));
