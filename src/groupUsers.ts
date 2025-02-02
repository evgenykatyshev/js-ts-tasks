/**
 * Write a function to group two types of users into EMPLOYEE and CONTRACTOR groups
 *
 * A function should return an object consists of two arrays of grouped users:
 * {
 *   employees: [...]
 *   contractors: [...]
 * }
 * @param {Array<unknown>} users
 * @returns {Object<employees: Array<any>, contractors: Array<any>>}
 */

type Address = {
  officeId: number;
  placeId: number;
};

type Employee = {
  name: string;
  login: string;
  surname: string;
  type: 'EMPLOYEE';
  address: Address;
};

type Contractor = {
  name: string;
  login: string;
  surname: string;
  type: 'CONTRACTOR';
  contractorCompanyName: string;
};

type Person = Employee | Contractor;

module.exports.groupUsers = function (users: Array<Person>): Record<'employees' | 'contractors', Array<Person>> {
  // replace Array<unknown> with your own types

  let employees: Employee[] = [];
  let contractors: Contractor[] = [];

  users.forEach((user: Person) => {
    if (typeof user === 'object' && user !== undefined && user !== null) {
      switch (user.type) {
        case 'EMPLOYEE':
          employees.push(user);
          break;
        case 'CONTRACTOR':
          contractors.push(user);
          break;
      }
    }
  });

  return { employees, contractors };
};
