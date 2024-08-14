import React, { useState } from 'react'


type AuthUser = {
    name:string,
    email:string
}
const Login = () => {
    const [isLogIn , setIsLogIn] = useState<boolean>(false);
    const [user , setUser] = useState<AuthUser | null>(null);
    const handleLogIn = () =>{
        setIsLogIn(!isLogIn)
        if(isLogIn)
        {
            setUser({
                name:'Vipul',
                email:'Vipul@gmail.com'
            })
        }
      
        

    }
  return (
    <div>
        <button onClick={handleLogIn}>{isLogIn ? 'LogOut' : 'Login'}</button>
        <p>{isLogIn ? 'Login Sucessfully' : 'Logged Out'}</p>
        {
            isLogIn && (<>
            <p>User Name is : {user?.name}</p>
            <p>Email is : {user?.email}</p>
            </>)
        }
    </div>
  )
}

export default Login