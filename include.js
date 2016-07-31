// Initialize variables.
class Scene{
  constructor(){
    self.description = "This is some default text for a scene."
  }
}

class Screen{
  constructor(){
    this.state = 42
  }

  get_state(){
    return this.state
  }

  b0(){
    console.log('b0')
  }

  b1(){
    console.log('b1')
  }

  b2(){
    console.log('b2')
  }

  b3(){
    console.log('b3')
  }

  b4(){
    console.log('b4')
  }

  b5(){
    console.log('b5')
  }

}

var screen = new Screen()
