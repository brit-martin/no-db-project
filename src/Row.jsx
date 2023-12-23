import { useState } from 'react'
import axios from 'axios'


export default function Row(props){


let [inputItem, setInputItem] = useState('')
let [inputHowMany, setInputHowMany] = useState('')


function handleEditClick(){
    alert('Item has been updated')
    axios.put(`/edit-jewelry/${inputItem}/${inputHowMany}`)
    .then((response) => {
        props.setCardData(response.data)
        setInputItem('')
        setInputHowMany('')
        

    })
    .catch((error) => {
        console.log(error)
    })
}

function handleAddClick(){
    alert('Item is added')
    let myBody = {
        item: inputItem,
        howMany: +inputHowMany
    }
    axios.post('/add-jewelry', myBody)
        .then((response) => {
            props.setCardData(response.data)
            setInputItem('')
            setInputHowMany('')
        })
        .catch((error) => {
            console.log(error)
        })

}

function handleDeleteClick(){
    alert('Item is deleted')
    axios.delete(`/delete-jewelry/${inputItem}`)
        .then((response) => {
            props.setCardData(response.data)
            setInputItem('')
            setInputHowMany('')
        
        })
        .catch ((error) => {
            console.log(error)
        })
}

    return (
        <>
            <label htmlFor={'item-input'}>Item: </label>
            <input 
                id={'item-input'} 
                type= {'text'} 
                value= {inputItem} 
                onChange={(e) => setInputItem(e.target.value)}
            />

            <label htmlFor={'how-many-input'}>How Many: </label>
            <input 
                id={'how-many-input'} 
                type= {'text'} 
                value= {inputHowMany} 
                onChange={(e) => setInputHowMany(e.target.value)}/>

            <button onClick ={handleAddClick}>Add</button>
            <button onClick={handleEditClick}>Edit</button>
            <button onClick={handleDeleteClick}>Delete</button>
        </>
    )
}
