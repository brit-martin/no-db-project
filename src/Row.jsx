export default function Row(){
    return (
        <>
            <label htmlFor={'item-input'}>Item: </label>
            <input id={'item-input'} type= {'text'} />

            <label htmlFor={'how-many-input'}>How Many: </label>
            <input id={'how-many-input'} type= {'text'} />

            <button>Add</button>
            <button>Edit</button>
            <button>Delete</button>
        </>
    )
}