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
}

export default basics