// custom function to iterate through object

export function logObjValues(store) {
  for (const property in store) {
    console.log(store[property]);
  }
}