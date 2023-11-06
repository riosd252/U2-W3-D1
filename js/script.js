class User {
  constructor(name, lastName, age, location) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }

  static isOlder(user1, user2) {
    if (user1.age > user2.age) {
      console.log(
        user1.name +
          " " +
          user1.lastName +
          " is older than " +
          user2.name +
          " " +
          user2.lastName
      );
    } else {
      console.log(
        user2.name +
          " " +
          user2.lastName +
          " is older than " +
          user1.name +
          " " +
          user1.lastName
      );
    }
  }
}

const user1 = new User("David", "Rios", 26, "Varese");

const user2 = new User("Rosario", "Cilipoti", 25, "Sicily");

const user3 = new User("Cosmin", "Petrea", 23, "Latium");

const user4 = new User("Luca", "Utzeri", 22, "Latium");

console.log(User.isOlder(user1, user2));
console.log(User.isOlder(user4, user3));

class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }

  static isSameOwner(pet1, pet2) {
    if (pet1.ownerName === pet2.ownerName) {
      return true;
    } else {
      return false;
    }
  }
}

let petsArr = [];

const form = document.getElementById("petForm");
const petsList = document.getElementById("petsList");

form.onsubmit = (e) => {
  e.preventDefault();

  const petName = document.getElementById("petName");
  const ownerName = document.getElementById("ownerName");
  const species = document.getElementById("species");
  const breed = document.getElementById("breed");

  const pet = new Pet(
    petName.value,
    ownerName.value,
    species.value,
    breed.value
  );

  const namePet = document.createElement("span");
  namePet.value = petName.value;
  const nameOwner = document.createElement("span");
  nameOwner.value = ownerName.value;
  const petSpecies = document.createElement("span");
  petSpecies.value = species.value;
  const petBreed = document.createElement("span");
  petBreed.value = breed.value;

  p;

  petsArr.push(pet);

  petName.value = "";
  ownerName.value = "";
  species.value = "";
  breed.value = "";
};
