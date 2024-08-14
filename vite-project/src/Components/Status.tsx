import React from 'react'


type currentStatus = {
    status : 'loading' | 'sucess' | 'error';
}
const Status = (props:currentStatus) => {

    let message;
    if(props.status === 'loading')
    {
        message = 'Loading Please Wait!!!'
    }
    else if(props.status === 'sucess')
    {
        message = 'Sucessfully Logged In'
    }
    else if(props.status === 'error')
        {
            message = "SomeThing Wrong Happened!!!"
        }
    
  return (
    <div>{message}</div>
  )
}

export default Status