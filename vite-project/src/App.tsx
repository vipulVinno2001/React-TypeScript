import Greet from "./Components/Greet"
import Heading from "./Components/Heading"
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
      <Greet name="vipul" messageCount={10}  isLoggedIn={true}/>
      <Person fullName={person}/>
      <PersonList personLists={personList} />
      <Heading>This is heading</Heading>
      <Oscar><Heading>This is Oscar Page</Heading></Oscar>
    </>
  )
}

export default App
