// spread 문법: 객체에서 사용하자!
const datas = [1, 2, 3];
console.log([...datas, 4]);

// const languages = ['fornt-end', 'ai', 'back-end']
const languages = ["front-end"];
console.log([...languages, "ai"]);

const user = {
  id: 1,
  name: "ted",
  address: {
    city: "LA",
    street: "Western",
  },
};

console.log({ ...user, id: 3, email: "ted@gmail.com", address:{...user.address, city: "new-york"} });
