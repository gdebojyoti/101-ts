type User = {
  id: number
  name: string
  email: string
}
// interface User {
//   id: number
//   name: string
//   email: string
// } // this will also work; need to figure out "type vs interface"

const users: User[] = [];

function addUser(user: User): void {
  users.push(user);
}

function getUser(id: number): User | string {
  const user: User | undefined = users.find((u: User): boolean => u.id === id);
  if (user) {
    return user;
  } else {
    return 'User not found';
  }
}

export { addUser, getUser };