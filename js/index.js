class User {
  constructor(firstName, lastName, prefix, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.prefix = prefix;
    this.age = age;
  }

  getFullName() {
    return `${this.prefix} ${this.firstName} ${this.lastName}`;
  }

  canVote() {
    return this.age >= 18;
  }
}

// Sample usage - do not modify
const user1 = new User("Kate", "Smith", "Mrs", 20);
user1.getFullName(); // "Mrs. Kate Smith"
user1.canVote(); // true

const user2 = new User("Alex", "Green", "Mr", 17);
user2.getFullName(); // "Mr. Alex Green"
user2.canVote(); // false
