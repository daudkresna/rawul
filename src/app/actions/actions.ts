"use server";
setBreed(e.target.value);
if (e.target.value != "") {
  let newBreedList = dogList.filter((item) => item.includes(breed));
  if (newBreedList.length != 0) {
    console.log(newBreedList);
    setBreedList(newBreedList);
    setShowBreedList(true);
  } else {
    setShowBreedList(false);
  }
} else {
  setShowBreedList(false);
}
