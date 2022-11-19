import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const HomePage=()=>{
    
    const navigate = useNavigate()

    useEffect(()=>{
        if(!localStorage.getItem('user')){
            navigate('/login')
        }
    },[])
    return(
        <div>
            hello
        </div>
    )
}

export default HomePage