import React from 'react'



type GreetProp = {
    name:string,
}
const Greet = (prop:GreetProp) => {
  return (
    <div><p>
        hii I am {prop.name}</p></div>
  )
}

export default Greet