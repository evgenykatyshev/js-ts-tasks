class User {
  #firstName;
  #secondName;
  #age;

  constructor(firstName, secondName, age) {
    if (typeof firstName !== 'string' || typeof secondName !== 'string' || typeof age !== 'number') {
      throw new Error('Not all data have been provided');
    }

    this.firstName = firstName;
    this.secondName = secondName;
    this.age = age;
  }

  set firstName(firstName) {
    if (typeof firstName === 'string') {
      this.#firstName = firstName;
    }
  }

  set secondName(secondName) {
    if (typeof secondName === 'string') {
      this.#secondName = secondName;
    }
  }

  set age(age) {
    if (typeof age === 'number') {
      this.#age = age;
    }
  }

  // These getters fail tests
  // get firstName() {
  //   return this.#firstName;
  // }
  //
  // get secondName() {
  //   return this.#secondName;
  // }

  get name() {
    return `${this.#firstName} ${this.#secondName}`;
  }

  get age() {
    return this.#age;
  }

  celebrateBirthday() {
    this.#age++;
  }

  introduce() {
    return `My name is ${this.#firstName} ${this.#secondName}, I'm ${this.#age}`
  }
}

/**
 * Create a class named User
 * @type {User}
 */
module.exports.User = User;

/**
 * Create new User object and return it
 * @param {string} firstName
 * @param {string} secondName
 * @param {number} age
 * @returns {User}
 */
module.exports.createUser = function (firstName, secondName, age) {
  return new User(firstName, secondName, age);
};

/**
 * Create Array of Users by provided Array with user data (firstName, secondName, age)
 * @param {Array<{ firstName, secondName, age }>} data
 * @returns {Array<User>}
 */
module.exports.createUsers = function (data) {
  let newUsers = [];

  for (let element of data) {
    newUsers.push(new User(element.firstName, element.secondName, element.age));
  }

  return newUsers;
};

/**
 * Find Users in Array of Users who's age equals the provided age
 * @param {Array<User>} users
 * @param {number} age
 * @returns {Array<User>}
 */
module.exports.findUsersByAge = function (users, age) {
  let foundUsers = [];

  for (let element of users) {
    if (element.age === age) {
      foundUsers.push(element);
    }
  }

  return foundUsers;
};

/**
 * Return a function that sort provided Array of Users using a comparator function from TestUtils
 * @param TestUtils
 * @returns {function(*): *[]}
 */
module.exports.createUsersSortFn = function (TestUtils) {
  return function (array) {
    return array.sort(TestUtils.sortComparatorByAge);
  }
};

/**
 * In Array of Users every User under odd index in Array should celebrate his birthday
 * @param {Array<User>} users
 * @return {Array<User>}
 */
module.exports.celebrate = function (users) {
  for (let i = 0; i < users.length; i += 2) {
    users[i].celebrateBirthday();
  }

  return users;
};
