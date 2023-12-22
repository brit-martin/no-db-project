import { useState, useEffect } from 'react'
import Row from './Row.jsx'
import Card from './Card.jsx'
import axios from 'axios'

import './App.css'

function App() {

    const [cardData, setCardData] = useState([])

    useEffect(() => {
      axios.get('/jewelry')
      .then ((response) => {
        setCardData(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
    }, [])



    return (
        <>
          <h1>Inventory</h1>
          <Row setCardData = {setCardData}/>
          <br/>
          <div>
            {cardData.map((element) => {
              return <Card key={element.id}
                           item={element.item}
                           howMany={element.howMany}
                           id={element.id}
                           
                     />      
                })
            }      
          </div>
        </>
      )
    }

export default App
