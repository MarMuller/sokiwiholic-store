export let cargarData = (data) => {

  return new Promise ((resolve,reject) => {
    if (data != null) {
      resolve("Data cargada.");
    } else {
      reject("No hay data.")
    }
  });

}
