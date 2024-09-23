class Persona {
  constructor (nombre, apellidos, edad) {
    this.nombre = nombre
    this.apellidos = apellidos
    this.edad = edad
  }

  getDetalles () {
    console.log(`Nombre: ${this.nombre}\nApellidos: ${this.apellidos}\nEdad: ${this.edad} años.`)
  }
}

class Jugador extends Persona {
  constructor (nombre, apellidos, edad, posicion) {
    super(nombre, apellidos, edad)
    this.posicion = posicion
  }

  getDetalles () {
    console.log(`Nombre: ${this.nombre}\nApellidos: ${this.apellidos}\nEdad: ${this.edad} años\nPosición: ${this.posicion}`)
  }
}

class Entrenador extends Persona {
  constructor (nombre, apellidos, edad, experiencia, idFederacion) {
    super(nombre, apellidos, edad)
    this.experiencia = experiencia
    this.idFederacion = idFederacion !== null ? idFederacion : Math.floor(Math.random() * 99999)
  }

  getDetalles () {
    console.log(`Nombre: ${this.nombre}\nApellidos: ${this.apellidos}\nEdad: ${this.edad} años\nExperiencia: ${this.experiencia}\nFederación: ${this.idFederacion}`)
  }
}

class Equipo extends Persona {
  constructor (nombre, apellidos, edad, jugadores, director) {
    super(nombre, apellidos, edad)
    this.jugadores = jugadores
    this.director = director
  }

  getDetalles () {
    jugadores.forEach((element) => {
      console.log(`Jugador:\n Nombre: ${element.nombre}\nApellidos: ${element.apellidos}\nEdad: ${element.edad} años\nPosicion: ${element.posicion}\n`)
    })
    console.log(`Dirección:\n nombre: ${this.director.nombre}\n Apellidos: ${this.director.apellidos}\n edad: ${this.director.edad}\n Experiencia: ${this.director.experiencia}\n`)
  }
}

Object.assign(Equipo.prototype, Entrenador.prototype, Jugador.prototype)

// Ejemplo de uso
const jugador1 = new Jugador('Lionel', 'Messi', 30, 'Delantero')
const jugador2 = new Jugador('Guillermo', 'Ochoa', 35, 'Portero')
const jugador3 = new Jugador('Karim', 'Benzema', 37, 'Delantero')
const jugador4 = new Jugador('Rubén', 'Díaz', 38, 'Medio')
const jugadores = [jugador1, jugador2, jugador3, jugador4]
const entrenador = new Entrenador('Pepe', 'Guardiola', 53, 15)
const equipo = new Equipo(null, null, null, jugadores, entrenador)

equipo.getDetalles()
