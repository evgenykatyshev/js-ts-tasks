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

type Person = {
  name: string;
  login: string;
  surname: string;
};

type Employee = Person & {
  type: 'EMPLOYEE';
  address: Address;
};

type Contractor = Person & {
  type: 'CONTRACTOR';
  contractorCompanyName: string;
};

type Contact = Employee | Contractor;

module.exports.groupUsers = function (users: Array<Contact>): Record<'employees' | 'contractors', Array<Contact>> {
  // replace Array<unknown> with your own types

  let employees: Array<Employee> = [];
  let contractors: Array<Contractor> = [];

  users.forEach((user: Contact) => {
    switch (user.type) {
      case 'EMPLOYEE':
        employees.push(user);
        break;
      case 'CONTRACTOR':
        contractors.push(user);
        break;
    }
  });

  return { employees, contractors };
};
