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
          <p>To add Items into your inventory simply type the name of the item and how many you have. Proceed by clicking the add button.</p>
          <p>To edit Items in your current inventory type in the name of the product you want to edit and how you would like to change it to. Click the edit button to update your inventory.  </p>
          <p>If you would like to delete a product from your inventory, type the name of the product and click the delete button. </p>
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
