# Proyecto: Sistema de Gestión de Equipo de Fútbol

Este proyecto implementa un sistema básico para gestionar información sobre jugadores, entrenadores y equipos de fútbol utilizando programación orientada a objetos en JavaScript.

## Descripción

El sistema consiste en tres clases principales que representan a las entidades del dominio: `Persona`, `Jugador`, `Entrenador` y `Equipo`. Cada clase tiene métodos para obtener detalles sobre los objetos creados.

## Instalación

Para utilizar este proyecto, asegúrate de tener [Node.js](https://nodejs.org/) instalado. Luego, sigue estos pasos:

1. Clona el repositorio:

```bash
   git clone https://github.com/karimVillanueva/newGamers.git
```

2. Navega al directorio del proyecto:

```bash
   cd newGamers
   npm install
   npm start

```

## Test

```bash
    npm test
```

### Clases

1. **Persona**

   - Atributos: `nombre`, `apellidos`, `edad`
   - Método: `getDetalles()` - Muestra los detalles de la persona.

2. **Jugador** (hereda de `Persona`)

   - Atributo adicional: `posicion`
   - Método: `getDetalles()` - Muestra los detalles del jugador, incluyendo su posición.

3. **Entrenador** (hereda de `Persona`)

   - Atributos adicionales: `experiencia`, `idFederacion`
   - Método: `getDetalles()` - Muestra los detalles del entrenador, incluyendo su experiencia y el ID de la federación.

4. **Equipo** (hereda de `Persona`)
   - Atributos: `jugadores` (array de objetos `Jugador`), `director` (objeto `Entrenador`)
   - Método: `getDetalles()` - Muestra los detalles de todos los jugadores del equipo y del director.

## Uso

Para usar el sistema, sigue estos pasos:

1. **Crea instancias de `Jugador` y `Entrenador`**:

   ```javascript
   const jugador1 = new Jugador("Lionel", "Messi", 30, "Delantero");
   const entrenador = new Entrenador("Pepe", "Guardiola", 53, 15);
   ```

2. **Crea una instancia de `Equipo`**:

   ```javascript
   const jugadores = [jugador1, ...]; // Agrega más jugadores según sea necesario
   const equipo = new Equipo(null, null, null, jugadores, entrenador);
   ```

3. **Obtén los detalles del equipo**:
   ```javascript
   equipo.getDetalles();
   ```

## Ejemplo de Uso

El siguiente código demuestra cómo crear un equipo y mostrar los detalles:

```javascript
const jugador1 = new Jugador("Lionel", "Messi", 30, "Delantero");
const jugador2 = new Jugador("Guillermo", "Ochoa", 35, "Portero");
const jugadores = [jugador1, jugador2];
const entrenador = new Entrenador("Pepe", "Guardiola", 53, 15);
const equipo = new Equipo(null, null, null, jugadores, entrenador);

equipo.getDetalles();
```

## Requisitos

- JavaScript (ECMAScript 6 o superior)
- Nodejs

## Licencia

Este proyecto está bajo la Licencia ISC. Puedes usarlo y modificarlo libremente.

---

Para más información, no dudes en consultar el código y experimentar con el sistema. ¡Diviértete gestionando tu equipo de fútbol!

## Autor

- [Karim Villanueva](https://github.com/karimVillanueva) - Desarrollador principal.
