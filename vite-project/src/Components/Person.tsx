import React from 'react'


type PersonProp = {
    fullName:{
        firstName:string,
        lastName:string
    }
}
const Person = (prop:PersonProp) => {
  return (
    <div>
        <h1>First Name is:  {prop.fullName.firstName}</h1>
        <h2>Last Name is: {prop.fullName.lastName}</h2>
    </div>
  )
}

export default Person