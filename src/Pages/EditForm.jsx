import { Category } from '@mui/icons-material'
import { Button, FormControl, InputLabel, MenuItem, Paper, Select, TextField, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { host } from '../Components/api';
import { toast } from 'react-toastify';


export default function EditForm() {
    const navigate = useNavigate()
    const {id}=useParams()

    const [formData,setFormData]=useState({
        title:'',
        amount:'',
        category:''
    });


    useEffect(()=>{
    const singleData =async()=>{
      try {
       
        const res= await axios.get(`${host}/singleView/${id}`);
        if(res.data.success){
          setFormData(res.data.data);
        }

      } catch (error) {
        console.lod(error);
        
      }
    };
    singleData();
  },[id]);


     const handleSubmit=async()=>{
        try {
            const res = await axios.put(`${host}/update/${id}`,formData);
           // console.log(res)
           if (res.data.success){
            toast.success(res.data.message)
           }
           navigate('/')
        } catch (error) {
            
            console.log(error)
            
        }
     };

     

  return (
    <div>
        <Box>
             <Typography sx={{textAlign:"center"}}>Edit my Expense </Typography>
           
        </Box>
        <Box>
            <Paper>
        <TextField id="outlined-basic" label="Expense Title" variant="outlined" fullWidth sx={{mb:2}} onChange={(e)=>setFormData({...formData,title:e.target.value})} value={formData.title}/>
         
        <TextField type="Number" id="Outlined-basic" label="Expense Amount"  variant="outlined" fullWidth sx={{mb:2}} onChange={(e)=>setFormData({...formData,amount:e.target.value})} value={formData.amount}/>
        
        <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Category</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    label="category"
    onChange={(e)=>setFormData({...formData,category:e.target.value})} 
    value={formData.category}

    
  >
    <MenuItem value='Food'>Food</MenuItem>
    <MenuItem value='Transport'>Transport</MenuItem>
    <MenuItem value='Other'>Other</MenuItem>
  </Select>
</FormControl>
  <Button variant="contained" fullWidth sx={{mb:2}} onClick={handleSubmit}>Submit</Button>
  <Button variant="contained" fullWidth sx={{mb:2}} onClick={()=>navigate('/')}>Return to expenses</Button>
</Paper>
        </Box>
    </div>
  )
}
