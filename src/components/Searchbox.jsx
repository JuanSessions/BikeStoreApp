import React from 'react';
import { useState } from 'react';
import products from "../products";

const SearchFunction = () => {
    const [input, setInput] = useState("")


    const submitHandler = (e) => {
        e.preventDefault()
    }

    // let filterData = products.filter(item => {
    //     console.log("item:", item);
    //     return item.name.toLowerCase().indexOf(input.toLowerCase()) !== -1
    // })

    //showing all items of the array in data
    // console.log("filterData:", filterData);

    // const resultData = filterData.map((item, i) => {
    //     if (input) {
    //         return (
    //             <li key={i}>
    //                 <p>{item.name} </p>
    //                 <p>{item.type} </p>
    //                 <p>{item.size} </p>
    //             </li>
    //         )
    //     }
    // })

    return (
        <div className="search-container">
            <form onSubmit={submitHandler}>
                <input type="text" placeholder="search" onChange={(e) => setInput(e.target.value)} value={input} />
                <button type="submit"><i class="fab fa-searchengin"></i></button>
            </form>

            {/* {resultData} */}
        </div>
    );
}



export default SearchFunction;