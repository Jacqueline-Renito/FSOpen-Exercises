const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old!
      </p>
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      <p>Prueba</p>
    </div>
  )
}

const App = () => {
  const friends = [
    { name: 'Jacky', age: 23 },
    { name: 'Diego', age: 17 },
  ]

  return (
    <div>
      <p>{friends[0].name} {friends[0].age}</p>
      <p>{friends[1].name} {friends[1].age}</p>
    </div>
  )
}

export default App

{/*
  FRAGMENTS
  Envuelve los elementos que el componente devolverá con un elemento vacío
  El DOM generado por React ya no contiene el elemento div adicional
  const App = () => {
  const name = 'Peter'
  const age = 10
  return (
    <>
      <h1>Greetings</h1>
      <Hello name='Jacky' age={10+20} />
      <Hello name={name} age= {age} />
      <Hello name='Juan' age='20' />
      <Footer />
    </>
  )
}
  */}

  {/*
    ARREGLOS
    Solucion a no poner un elemento principal como un div, pero
    es menos comun y no se ve tan bien
      const App = () => {
      return [
        <h1>Greetings</h1>,
        <Hello name='Maya' age={26 + 10} />,
        <Footer />
      ]
    }
  */}
