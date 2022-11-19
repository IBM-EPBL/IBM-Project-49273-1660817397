import { Button, Card, TextField } from "@mui/material"
import { Nav } from "react-bootstrap"
import React, {useEffect, useState} from 'react'
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


const RegisterPage =()=>{

  const navigate = useNavigate()

    const [name, setName] =useState("")
    const [email, setEmail] =useState("")
    const [password,setPassword] =useState("")
    const [isLoggedIn, setIsLoggedIn]= useState(false)

    useEffect(()=>{
      if(localStorage.getItem('user')){
        navigate('/')
      }
    },[isLoggedIn])

    const onChangeUserName=(e)=>{
      setName(e.target.value)
    }

    const onChangeEmail=(e)=>{
      setEmail(e.target.value)
    }
    const onChangePassword=(e)=>{
      setPassword(e.target.value)
    }
    const handleRegister=async()=>{
      
        await axios.post('http://localhost:8000/register',
        {
          username: name,
          email:email,
          password:password
        }
        ).then((response)=>{
          localStorage.setItem('user',JSON.stringify(response.data))
          setIsLoggedIn(true)
        })
    }

    return(
        <div className='row my-4'>
            
      <div className='col-lg-12 d-flex justify-content-center '>
      <Card className='px-4 col-4 bg-light justify-content-center text-center' sx={{ minWidth: 275, minHeight:250 }}>
      <TextField id="outlined-basic" onChange={onChangeUserName} className='my-4' label="username" variant="outlined" /><br/>
      <TextField id="outlined-basic"  onChange={onChangeEmail} className='my-4' label="email" variant="outlined" /><br/>
      <TextField id="outlined-basic"  onChange={onChangePassword} className='my-4' label="password" variant="outlined" /><br/>
      <Button onClick={handleRegister} variant="contained">Register</Button>
      <Nav className="justify-content-center">
                  <Nav.Item>
                    <Nav.Link disabled>Already a member?</Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="ml-n4 my-2">
                    <nav>
                      <Link to="/login">Login</Link>
                    </nav>
                  </Nav.Item>
                </Nav>
      </Card>
    </div>
    </div>
    )

}

export default RegisterPage;