// Exercise #5
let getJohnProfile = () => {
  return new Promise(function (_, reject) {
    setTimeout(
      () =>
        reject({
          errorCode: 500,
          message: "👿 Failed to request data from server",
        }),
      2000
    );
  });
};
// Start coding here

const displayJohnProfile = async () => {

  try{
    const johnProfile = await getJohnProfile();
    console.log(`success : ${getJohnProfile}` )
  } catch(error){
    console.log(`Error : ${error}`);
  }
}

displayJohnProfile();
