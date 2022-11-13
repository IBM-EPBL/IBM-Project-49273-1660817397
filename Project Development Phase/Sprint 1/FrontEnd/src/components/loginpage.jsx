import { Button, Card, TextField } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Nav } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
const LoginPage =()=>{

  const navigate = useNavigate()
  const [mail,setMail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState('')

  useEffect(()=>{
    if(localStorage.getItem('user')){
      navigate('/')
    }
  },[isLoggedIn])

  const onChangeMail =(e)=>{
    setMail(e.target.value)
  }
  const onChangePassword=(e)=>{
    setPassword(e.target.value)
  }
  const handleLogin=async()=>{
      await axios.post('http://localhost:8000/login',
      {
        email:mail,
        password:password
      }).then((response)=>{
        localStorage.setItem('user',JSON.stringify(response.data))
        setIsLoggedIn(true)
      })
  }

    return (
        <div className='row my-4'>
          <div className='col-lg-12 d-flex justify-content-center '>
          <Card className='px-4 col-4 bg-light justify-content-center text-center' sx={{ minWidth: 275, minHeight:250 }}>
          <TextField id="outlined-basic" onChange={onChangeMail}  className='my-4' label="username" variant="outlined" /><br/>
          <TextField id="outlined-basic" onChange={onChangePassword} className='my-4' label="password" variant="outlined" /><br/>
          <Button onClick={handleLogin} variant="contained"  >Login</Button>
          <Nav className="justify-content-center">
                      <Nav.Item>
                        <Nav.Link disabled>Not registered yet?</Nav.Link>
                      </Nav.Item>
                      <Nav.Item className="ml-n4 my-2">
                        <nav>
                          <Link to="/register">Register</Link>
                        </nav>
                      </Nav.Item>
                    </Nav>
          </Card>
        </div>
        </div>
        
            
                    
          
      )

}
export default LoginPage