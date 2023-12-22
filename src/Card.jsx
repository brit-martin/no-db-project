import './Card.css'
export default function Card(){
    return (
        <>
            <div>
            <img/>
            <label htmlFor={'item-input'}>Item: </label>
            <input id={'item-input'} type= {'text'}/>

            <label htmlFor={'how-many-input'}>How many: </label>
            <input id={'how-many-input'} type= {'text'}/>
            </div>
        </>
    )
}