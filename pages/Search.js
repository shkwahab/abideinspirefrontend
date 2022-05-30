import React from 'react'
import { useState } from 'react'

const Search = () => {
const [input, setInput] = useState(null);
const getinput = (val) => {
      setInput(val.target.value);
    }; 
 const onSearch=()=>{
    let filter=input.toUpperCase();
    let titles = document.getElementsByClassName("posttitle");
    for (let i = 0; i < titles.length; i++) {
        let title = titles[i].innerText;
        if (title.toUpperCase().indexOf(filter) > -1) {
            titles[i].parentElement.style.display = "";
        }
        else {
            titles[i].parentElement.style.display = "none";
        }}
                
 }

    
    
    
    return (
        <>
      
            <div className="lg:block hidden">
              <input
                className="outline-none text-base font-semibold text-black px-1 p-1"
                type="name"
                name="search"
                id="search"
                placeholder="Search"
                onKeyUp={onSearch}
                onChange={getinput}
                size="100"
              />
            </div>
            <div className="md:block lg:hidden hidden">
              <input
                className="outline-none text-base font-semibold text-black px-1 p-1"
                type="name"
                name="search"
                id="search"
                placeholder="Search"
                onKeyUp={onSearch}
                onChange={getinput}
                size="75"
              />
            </div>
            <div className="sm:block md:hidden hidden">
              <input
                className="outline-none text-base font-semibold text-black px-1 p-1"
                type="name"
                name="search"
                id="search"
                placeholder="Search"
                onKeyUp={onSearch}
                onChange={getinput}
                size="55"
              />
            </div>
            <div className="block  sm:hidden">
              <input
                className="outline-none text-base font-semibold text-black px-1 p-1"
                type="name"
                name="search"
                id="search"
                placeholder="Search"
                onKeyUp={onSearch}
                onChange={getinput}
                size="25"
              />
            </div>
    </>
  )
}
  
export default Search