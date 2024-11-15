import basics from './examples/basics'
import JengaCard from './examples/classes'
import types from './examples/types'

import { addUser, getUser } from './challenges/user';

addUser({ id: 1, name: 'Jeema', email: 'jeema@example.com' });
addUser({ id: 2, name: 'Ali', email: 'ali@example.com' });

console.log(getUser(1));
console.log(getUser(3));  // Should return 'User not found'

basics()

const card: JengaCard = new JengaCard()

// card.name = 'Mewtwo' // error
console.log(card.name)
// console.log(card.altName) // error
card.printType()

types()