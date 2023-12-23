import './Card.css'
export default function Card(props){




    return (
        <>
            <div>
            
            <label className='card' htmlFor={'item-input'}>Item: {props.item}</label>
            <label className='card' htmlFor={'how-many-input'}>How many: {props.howMany}</label>
            
            </div>
        </>
    )
}