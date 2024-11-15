import Card from './interfaces'

class JengaCard implements Card {
  public readonly name: string = "Pikachu"

  private type: string = "electric"

  printType (): void {
    console.log(this.type)
  }
}

export default JengaCard