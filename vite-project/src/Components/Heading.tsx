import React from 'react'


type HeaderProps = {
    children : string
}
const Heading = (props:HeaderProps) => {
  return (
    <div>
      {props.children}
    </div>
  )
}

export default Heading