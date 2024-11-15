import basics from './examples/basics'
import JengaCard from './examples/classes'
import types from './examples/types'

basics()

const card: JengaCard = new JengaCard()

// card.name = 'Mewtwo' // error
console.log(card.name)
// console.log(card.altName) // error
card.printType()

types()