import { Button, TextField } from "@mui/material"
import axios from "axios"
import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import MenuItem from '@mui/material/MenuItem';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Popup from 'reactjs-popup';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import Header from "./nav bar";



const Predict=()=>{

 const [open,setOpen] = useState(false)
 const [data,setData] = useState("")
 const [age,setAge] =useState()
 const [sex,setSex]=useState()
 const [cpt,setCpt] =useState()
 const [bp,setBp] =useState()
 const [cholesterol,setCholesterol]=useState()
 const [fbs,setFbs] =useState()
 const [exg,setExg]= useState()
 const [maxHr,setMaxHr]=useState()
 const [exercise, setExercise] =useState()
 const [stDepression, setStDepression]=useState()
 const [slope,setSlope]=useState()
 const [vessels,setVessels]=useState()
 const [thallium, setThallium]=useState()
    
    const navigate = useNavigate()
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };


    const handleClick=async()=>{
        await axios.post('http://localhost:8000/predict',
        {
            age:age,
            sex:sex,
            cpt:cpt,
            bp:bp,
            cholesterol:cholesterol,
            fbs:fbs,
            exg:exg,
            maxHr:maxHr,
            exercise:exercise,
            stDepression:stDepression,
            slope:slope,
            vessels:vessels,
            thallium:thallium
        }).then((response)=>{
            setData(response.data)
            setOpen(true)
            console.log(data);
        })
    }

    useEffect(()=>{
        if(!localStorage.getItem('user')){
            navigate('/login')
        }
    },[])
    const handleClose=()=>{
        console.log("closing");
        setData('')
        setOpen(false)
    }

    const onChangeAge =(e)=>{
        setAge(e.target.value)
    }
    const onChangeSex=(e)=>{
        console.log(e.target.value);
        setSex(e.target.value)
    }
    const onChangeCPT=(e)=>{
        setCpt(e.target.value)
    }
    const onChangeBP=(e)=>{
        setBp(e.target.value)
        
    }
    const onChangeCholesterol=(e)=>{
        setCholesterol(e.target.value)
     
    }
    const onChangeFBS=(e)=>{
        setFbs(e.target.value)
    }
    const onChangeEXG=(e)=>{
        setExg(e.target.value)
    }
    const onChangeHR=(e)=>{
        setMaxHr(e.target.value)
    }
    const onChangeExercise=(e)=>{
        setExercise(e.target.value)
    }
    const onChangeDepression=(e)=>{
        setStDepression(e.target.value)
    }
    const onChangeSlope=(e)=>{
        setSlope(e.target.value)
    }
    const onChangeVessels=(e)=>{
        setVessels(e.target.value)
    }
    const onChangeThallium=(e)=>{
        setThallium(e.target.value)
    }


    if(!data){
        return(
            <div>
                <Header />
            <div className="my-3">
                
            
        <div className="container">
            <div className="row">
                <div className="col-lg-4 my-4  ">
                    <label className='' ><h3>Age</h3></label>
                    <TextField id="outlined-number" className='mx-4' onChange={onChangeAge} label="Number" type="number" InputLabelProps={{shrink: true,}}/>
                </div>
                <div className="col-lg-4 my-4 d-flex justify-content-center">
                <label><h3>Sex</h3></label>
                <FormControl className='mx-4'>
 
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        className="row d-flex mx-4"
        // value={value}
        // onChange={handleChange}
        onChange={onChangeSex}
      >
        <FormControlLabel value="0" control={<Radio />} label="Female" />
        <FormControlLabel value="1" control={<Radio />} label="Male" />
      </RadioGroup>
    </FormControl>
                   
                </div>
            
            <div className="col-lg-4 my-4 d-flex justify-content-center">
                <label><h3>Chest pain type</h3></label>
                <TextField id="outlined-number" className='mx-4' label="Number" onChange={onChangeCPT} type="number" InputLabelProps={{ shrink: true, }}/>
            </div>
            <div className="w-100"></div>
            <div className="col my-4 d-flex justify-content-center">
                <label><h3>BP</h3></label>
                <TextField id="outlined-number" className='mx-4' label="Number" onChange={onChangeBP} type="number" InputLabelProps={{ shrink: true, }}/></div>
           
            <div className="col-lg-4 my-4 d-flex justify-content-center">
                <label><h3>Cholesterol</h3></label>
                <TextField id="outlined-number" className='mx-4' label="Number"  type="number" onChange={onChangeCholesterol} InputLabelProps={{ shrink: true,  }}/></div>
            <div className="col-lg-4 my-4 d-flex justify-content-center">
            <label><h3>FBS over 120</h3></label>
                <TextField id="outlined-number"className='mx-4' label="Number" type="number" onChange={onChangeFBS} InputLabelProps={{ shrink: true,  }}/></div>
                <div className="w-100"></div>
            <div className="col-lg-4 my-4 d-flex justify-content-center">
                
            <label><h3>EGX results</h3></label>
            <TextField id="outlined-number"  label="Number" type="number" onChange={onChangeEXG} InputLabelProps={{ shrink: true, }}/></div>
            <div className="col-lg-4 my-4 d-flex justify-content-center">
            <label><h3>Max HR</h3></label>
                <TextField id="outlined-number" className='mx-4' label="Number"  type="number" onChange={onChangeHR} InputLabelProps={{  shrink: true,  }}/></div>
            
            <div className="col-lg-4 my-4 d-flex justify-content-center">
             <label><h3>Exercise angina</h3></label>
            <TextField id="outlined-number" className='mx-4' label="Number"  type="number" onChange={onChangeExercise} InputLabelProps={{  shrink: true, }}/></div>
             <div className="col-lg-4 my-4 d-flex justify-content-center">
             <label><h3>ST Depression</h3></label> 
                <TextField id="outlined-number" className='mx-4' label="Number" type="" onChange={onChangeDepression} InputLabelProps={{ shrink: true, }}/></div>
          

            <div className="col-lg-4 my-4 d-flex justify-content-center">
             <label><h3>Slope of ST</h3></label>
            <TextField id="outlined-number" className='mx-4' label="Number"  type="number" onChange={onChangeSlope} InputLabelProps={{  shrink: true, }}/></div>
             <div className="col-lg-4 my-4 d-flex justify-content-center">
             <label><h3>Number of vessels fluro</h3></label> 
                <TextField id="outlined-number" className='mx-4' label="Number" type="number" onChange={onChangeVessels} InputLabelProps={{ shrink: true, }}/></div>
            <div className="w-100"></div>
            
             <div className="col-lg-4 my-2 d-flex justify-content-center">
             <label><h3>Thallium</h3></label> 
                <TextField id="outlined-number" className='mx-4' label="Number" type="number" onChange={onChangeThallium} InputLabelProps={{ shrink: true, }}/></div>
           
        </div>
  </div>
    
            

        </div>
        <div className="justify-content-center row mx-1">
            <Button variant="contained" className="col-lg-1" onClick={handleClick}>
                Check
            </Button>
            </div>
        </div>
        )
    }
    else{
       return(
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" className="justify-content-center d-flex" variant="h6" component="h2">
              {data['result']}
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              {data['message']}
            </Typography>
          </Box>
        </Fade>
      </Modal>
       )
    }   
}

export default Predict