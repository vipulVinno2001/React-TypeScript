import React from 'react'
import { personNameList } from '../Data/Person.list'


const PersonList = (prop:personNameList) => {
  return (
    <div>
        <p>Your Friends are----</p>

    {
        prop.personLists.map(name =>{
            return(
                <h4 key={name.firstName}>{name.firstName}  {name.lastName}</h4>
            )
        })
    }
    </div>
  )
}

export default PersonList