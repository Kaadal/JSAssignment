const birthYear = 2011;
const currentYear = 2024;
const favoriteNumber = 9
let ageOfPerson = currentYear - birthYear;
console.log(ageOfPerson);

// Save to a let variable named isChild, when the age is from 0 till 10.
let isChild = (ageOfPerson >= 0) && (ageOfPerson <= 10);

// Save to a let variable named isTeenager, when the age is from 11 to 17
let isTeenager = (ageOfPerson >= 11) && (ageOfPerson <= 17);

// Save to a let variable named isAdult, when the age is 18 or more.
let isAdult =  ageOfPerson >= 18;

if (isChild) {

  console.log("You are a child.")

}

else if (isTeenager) {
  console.log("You are a teenager.")
}

else if (isAdult) {
  console.log("You are am adult.")
}

if (favoriteNumber > ageOfPerson) {
  console.log("Favorite number is greater.")
}
else if (favoriteNumber === ageOfPerson) {
    console.log('They are the same!')
  }

 else {
  console.log('Age is greater ');
}

if (favoriteNumber % 2 === 0) {
  console.log("Favorite Number is Even");
}
else {
  console.log("Favorite Number is Odd");
}
