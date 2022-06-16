const list = [
  'birthDay',
  'firstNameKana',
  'firstNameKanji',
  'lastNameKana',
  'lastNameKanji',
  'homeAddress1',
  'homeAddress2',
  'homePrefectures',
  'homeZipCode',
  'phoneNo',
  'email',
]

const newList = list.map((val) => val === 'email' ? 'pocketMoneyContract' : val)

console.log(list)
console.log(newList)
console.log(list)
