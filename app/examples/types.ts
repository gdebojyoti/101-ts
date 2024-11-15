function types () {
  /* Union type */
  function printTrue (input: boolean | string): void {
    if (typeof input === "boolean") {
      console.log("'Twas boolean")
    } else {
      console.log("'Twas string")
    }
  }
  printTrue(true)
  printTrue('true')

  /* Intersection type */
  interface obj1 {
    name: string
  }
  interface obj2 {
    age: number
  }
  function printStudent(student: obj1 & obj2): void {
    console.log(student)
  }
  // printStudent({ name: 'Ron' }) // error
  printStudent({ name: 'Hermione', age: 23 })

  /* Type alias */
  type Pokemon = {
    sound: string
    type: string
  }
  // type canDoThis = boolean | string
  // const pikachu: Pokemon = { sound: 'Pika-pi' } // error
  const pikachu: Pokemon = { sound: 'Pika-pi', type: 'electric' }
  console.log(pikachu)

  /* Type assertion / Type casting */
  const str: any = "I got in"
  // const strLength: number = (<string>str).length // avoid this
  const strLength: number = (str as string).length
  console.log(strLength)
}

export default types