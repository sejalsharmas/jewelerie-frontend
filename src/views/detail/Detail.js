import React ,{useEffect , useState}from 'react'
import './Detail.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function Detail() {
    const [jewelrie, setJewelrie] = useState({})

    const {id} = useParams()

    const loadJewelrieDetail = async (id) =>{
        const response = await axios.get(`http://localhost:5001/jewelries/${id}` )
        console.log(response)
    }

    useEffect(()=>{
        loadJewelrieDetail(id)
    }, [id])

  return (
    <div>
       <h1 className='header'>Jewelrie Detail</h1>
       <h1>id:{id}</h1>
    </div>
  )
}

export default Detail