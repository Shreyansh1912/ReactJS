import React,{useState} from 'react'

function Bat(props) {
    const [bat,setBat] = useState(20) //local to the component
    return (
        <div>
            <h1>Bats : {bat}</h1>
            <button onClick={()=>setBat(bat-1)}>Buy Bat</button>
        </div>
    )
}
export default Bat