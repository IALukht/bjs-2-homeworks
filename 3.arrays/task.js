let compareArrays = (arr1, arr2) => arr1.length === arr2.length && arr1.every((value, i) => value === arr2[i]);

function getUsersNamesInAgeRange(users, gender) {
 return users.filter(elementGender => gender === elementGender.gender).
 map(AgeGender => AgeGender.age).
 reduce((summator, age, index, userAges ) => summator + age / userAges.length, 0)
}