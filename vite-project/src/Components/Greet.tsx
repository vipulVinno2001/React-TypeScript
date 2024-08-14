import React from 'react'



type GreetProp = {
    name:string,
    messageCount?:number,
    isLoggedIn:boolean
}
const Greet = (prop:GreetProp) => {
  const {messageCount = 0 } = prop;  return (
    <div>
        {prop.isLoggedIn ? <h1>Hii {prop.name}  and your messages is {messageCount}</h1>:<h1>Welcome Guest</h1>}
    </div>
  )
}

export default Greet