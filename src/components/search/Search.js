import React, { useState } from 'react'
import './SearchStyles.css'
import axios from 'axios'

function Search() {
    const getQuote = () =>{
        axios.get('http://universities.hipolabs.com/search?country=' + value)
        .then(res => {
            setUni(res.data)
        }).catch(err => {
            console.log(err)
        })
    }
    const [value, setValue] = useState ();
    const [uni, setUni] = useState([]);
    return (
        <div name='book' className='search'>
            <div className="container">
                <div className="left">
                    <h2>UNIVERSITY IN GEORGIA</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec odio non nunc tincidunt porttitor sit amet eu eros. Vestibulum tristique quam vel ultrices pretium. Aenean porttitor enim non dolor consectetur, luctus porttitor nisi ultrices. Nulla luctus lacus purus, id venenatis sem egestas at. Ut lacus nunc, fermentum at elementum ut, interdum eu elit. Donec sodales at mi eu congue. Vestibulum id libero sed ante semper fermentum. Sed nibh dui, luctus a tincidunt a, porttitor quis tellus.</p>
                    <div className="search-col-2">

                    </div>
                </div>
                <div className="right">
                    <div>
                        <div className="input-wrap">
                            <label>Destination</label>
                            <select onChange={(e) => setValue(e.target.value)}>
                                <option value="Georgia">Georgia</option>
                                <option value="USA">USA</option>
                                <option value="UK">England</option>
                            </select>
                        </div>
                        <button type ='button' onClick={getQuote}>Rates & Availabilities </button>
                    </div>
                </div>
                {uni.map((post) =>
                    <div key={post.id}>
                        {post.name}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Search
