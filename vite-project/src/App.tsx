import Greet from "./Components/Greet"


function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <Greet name="vipul" messageCount={10}  isLoggedIn={true}/>
    </>
  )
}

export default App
