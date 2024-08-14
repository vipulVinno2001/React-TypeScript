import Button from "./Components/Button"
import Container from "./Components/Container"
import Greet from "./Components/Greet"
import Heading from "./Components/Heading"
import Input from "./Components/Input"
import Oscar from "./Components/Oscar"
import Person from "./Components/Person"
import PersonList from "./Components/PersonList"
import Status from "./Components/Status"


function App() {
  //const [count, setCount] = useState(0)
  const person = {
    firstName:"Vipul",
    lastName:"Tapare"
  }

  const personList = [
    {
      firstName:'Tushar',
      lastName:'Mathur'
    },
    {
      firstName:'Saket',
      lastName:'Jha'
    },
    {
      firstName:'Kuldeep',
      lastName:'Managoli'
    },
    {
      firstName:'Sahil',
      lastName:'Jain'
    },
    {
      firstName:'Garvit',
      lastName:'Sharma'
    },
  ]

  return (
    <>
      <Status status='sucess' />
      <Greet name="vipul" messageCount={11}  isLoggedIn={true}/>
      <Person fullName={person}/>
      <PersonList personLists={personList} />
      <Heading>This is heading</Heading>
      <Oscar><Heading>This is Oscar Page</Heading></Oscar>
      <Button handleClick={ (event  , id) => console.log("Button Clikced" ,  event , id)} />
      <Input value='' handleChange={(event) => console.log("Input Formed" ,  event)} />
      <Container style={{border:'1px solid black',padding:'1rem'}} />
    </>
  )
}

export default App
