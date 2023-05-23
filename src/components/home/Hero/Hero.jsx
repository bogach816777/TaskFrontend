import React, { useState } from "react"
import { BiSearch } from "react-icons/bi"
import { products } from "../../assets/data/data"
import { SearchItems } from "./SearchItems"
import { FilterItems } from "./FilterItems"

export const Hero = () => {
  // search
  const [value, setValue] = useState("")
  const [selectedCategories, setSelectedCategories] = useState([])
  const onChanage = (e) => {
    setValue(e.target.value)
  }

  const onSearch = (key) => {
    setValue(key)
  }

  const handleCategoryChange = (categories) => {
    console.log(categories)
    setSelectedCategories(categories)
  }

  return (
    <>
      <section className='hero'>
        <div className='container'>
          <h1 className="title_one">
            Shop
            </h1>
          <div className='search'>
            <input type='text' placeholder='Search Products...' onChange={onChanage} value={value} />
            <button onClick={() => onSearch(value)}>
              <BiSearch className='serachIcon heIcon' />
            </button>
          </div>
          {/* <SearchItems products={products} value={value} onSearch={onSearch} /> */}
          {/* <p>Examples: Mockup, PSD, Theme Design, Image…</p> */}
          <FilterItems
        products={products}
        selectedCategories={selectedCategories}
        onCategoryChange={handleCategoryChange}
      />
        </div>
      </section>
    </>
  )
}
