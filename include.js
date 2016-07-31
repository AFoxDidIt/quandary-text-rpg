// Initialize variables.
class Scene{
  constructor(){
    this.description = "This is some default text for a scene."
  }

  set_description(description){
    self.description = description
  }

  get_description(){
    return this.description
  }
}

class Screen{
  constructor(){
    this.state = new Scene()
  }

  get_state(){
    return this.state
  }

  update(){
    // console.log("Updating screen.")
    document.getElementById("description").innerHTML = this.get_state().get_description()
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
