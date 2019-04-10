const removeYoungerThan = (minAge) => (person) => person.age >= minAge

const byAge = (personA, personB) => {
  if (personA.age < personB.age) {
    return -1
  }

  if (personA.age > personB.age) {
    return 1
  }

  return 0
}

const toName = (person) => person.name

const greet = (people, minAge) => {
  people = people
    .filter(removeYoungerThan(minAge))
    .sort(byAge)
    .map(toName)

  if (people.length < 1) {
    throw 'Nobody to greet :('
  }

  if (people.length === 1) {
    return `Hello ${people[0]}!`
  }

  const firstPeople = people.slice(0, people.length - 1).join(', ')
  const lastPerson = people[people.length - 1]

  return `Hello ${firstPeople}, and ${lastPerson}!`
}



module.exports = greet