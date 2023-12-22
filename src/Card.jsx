import './Card.css'
export default function Card(props){




    return (
        <>
            <div>
            
            <label htmlFor={'item-input'}>Item: {props.item}</label>

            <label htmlFor={'how-many-input'}>How many: {props.howMany}</label>
            
            </div>
        </>
    )
}