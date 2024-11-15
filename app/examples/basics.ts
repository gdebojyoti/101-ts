function basics (): void {
  enum Color {
    Red = 1,
    Blue = "Ravenclaw",
    Yellow = "Hufflepuff",
    Green = 'Slytherin'
  }
  
  type MathOperation = (n1: number, n2: number) => number
  
  let myFirstVariable: string = "I got in."
  let myHouse: Color = Color.Blue
  let arrayOfNumbers: number[] = [1, 2, 3]
  
  function getFirstNumber (arr: number[]): number {
    const firstNumber: number = arr[0]
    return firstNumber
  }
  
  const getSum: MathOperation = (n1, n2) => {
    return n1 + n2
  }
  
  const randomFunc = (n1: boolean, optional: string = "N/A"): string => {
    return "This is junk"
  }
  const anotherRandomFunc = (arg?: boolean): void => {
    console.log(`Complaining? ${arg}`)
  }
  
  console.log(myFirstVariable)
  console.log(`My house is ${myHouse}, but Harry's house was ${Color.Red}`)
  console.log(`First number in array is ${getFirstNumber(arrayOfNumbers)}`)
  console.log(getSum(2, 5))
  console.log(randomFunc(false))
  anotherRandomFunc()
  anotherRandomFunc(true)

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
}

export default basics