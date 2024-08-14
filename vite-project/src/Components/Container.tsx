import React from 'react'


type ContainerProps = {
  style:React.CSSProperties
}
const Container = (props:ContainerProps) => {
  return (
    <div style={ props.style }>
        <h1>Container</h1>
    </div>
  )
}

export default Container