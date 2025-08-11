// Exercise #4
let getJohnProfile = () => {
  return new Promise(function (resolve) {
    setTimeout(
      () =>
        resolve({
          name: "John",
          age: 20,
          hobbies: ["Coding", "Football"],
        }),
      1000
    );
  });
};
// Start coding here

const displayJohnProfile = async () => {
  
  const johnProfile = await getJohnProfile();
  console.log(johnProfile);
}

displayJohnProfile();