import React ,{useEffect, useState} from 'react'
import Navbar from './components/navbar/Navbar'
import axios from 'axios'
import './App.css'
import Cards from  './components/cards/Cards'


function App() {

  const [jewelries, setJewelries] = useState([])

  const loadJewelrie = async() =>{
     console.log('Loading Jewlries...')
     const response = await axios.get("http://localhost:5001/jewelries")

     setJewelries(response.data.data)
    
  }

  useEffect(()=>{
    loadJewelrie()
  },[])
  return (
    <div className='background-color'>
      
      <Navbar/>
     
      <div >
         <button className='btn'>ADD NEW JEWELLERY</button>
        </div>
      <div className='card-container'>
      {
        jewelries.map((jewelerie, i) => {
          const {id , name, type, Metalused ,Weight, Color, Price, Status , image} = jewelerie
          return( 
          <Cards
          id={id}
          name={name}
          type={type}
          Metalused={Metalused}
          Weight={Weight}
          Color={Color}
          Price={Price}
          Status={Status}
          image={image}
          />
          )
        })
      }
      </div>
    </div>

   
     


   
  )
}


export default App
