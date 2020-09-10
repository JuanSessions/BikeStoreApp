import React from 'react';
import { useState } from 'react';
import products from "../products";

const SearchFunction = () => {
    const [input, setInput] = useState("")
    const [display, setDisplay] = useState(false)


    const submitHandler = (e) => {
        e.preventDefault()
    }

     let filterData = products.filter(item => {
         console.log("item:", item);
         return item.name.toLowerCase().indexOf(input.toLowerCase()) !== -1
     })

    //showing all items of the array in data
    // console.log("filterData:", filterData);

    const resultData = filterData.map((item, i) => {
        if (input) {
           
            return (
                <li key={i}>
                    <h4>{item.name} </h4>
                    <p>{item.type} </p>
                    <p>{item.brand} </p>
                </li>
            )
        }
    })

    return (
        <div className="search-container">
            <form onSubmit={submitHandler}>
                <input type="text" placeholder="search" 
                    onChange={(e) => setInput(e.target.value)} 
                    value={input}
                    onChangeCapture={ () => setDisplay(true) } 
                />
                <button type="submit"><i class="fab fa-searchengin"></i></button>
            </form>
 
            {display && <ul className="result-search">
                <span className="ex" onClick={()=>setDisplay(false)}>X</span>
                {resultData}
            </ul>
            }
            
        </div>
    );
}



export default SearchFunction;