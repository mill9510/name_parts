"use strict";

const fullName = "Peter Heronimous Lind";

const firstIndex = fullName.indexOf(" ");
const lastIndex = fullName.lastIndexOf(" ");

console.log(firstIndex);
console.log(lastIndex);

const firstName = fullName.substring(0, firstIndex);
const middleName = fullName.substring(firstIndex, lastIndex);
const lastName = fullName.substring(lastIndex);

console.log(firstName, middleName, lastName);
