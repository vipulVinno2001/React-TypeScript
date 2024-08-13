import Greet from "./Components/Greet"
import Person from "./Components/Person"


function App() {
  //const [count, setCount] = useState(0)
  const person = {
    firstName:"Vipul",
    lastName:"Tapare"
  }

  return (
    <>
      <Greet name="vipul" messageCount={10}  isLoggedIn={true}/>
      <Person fullName={person}/>
    </>
  )
}

export default App
