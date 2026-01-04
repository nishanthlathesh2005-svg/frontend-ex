import Typography from '@mui/material/Typography'
import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Table from '../Components/Table'
import Fbutton from '../Components/Fbutton'
import axios from 'axios'
import { host } from '../Components/api'
import { toast } from 'react-toastify'
import { data } from 'react-router-dom'



export default function Dew() {
  const [expense,setExpense]=useState([]);

  const fetchData=async()=>{
    try {
      const res = await axios.get(`${host}/view`);
      console.log(res)
      if(res.data.success){
        setExpense(res.data.data)
      }
    } catch (error) {
      console.log(error)
      //toast.error(res.data.message)
      
    }
  }

  
  //useEffect
  useEffect(()=>{
    fetchData();

  },[])
  return (
    <div>
        <Typography sx={{textAlign:"center",fontWeight:"bold"}}>
            Expense Tracker
        </Typography>
        <Box>
            <Table fetchData={expense}/>
            <Fbutton/>
            
        </Box>
    </div>
  )
}
