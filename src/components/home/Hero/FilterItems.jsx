import React from "react"
import { FiShoppingBag, FiSearch } from "react-icons/fi"
import { AiOutlineHeart } from "react-icons/ai"
import { useDispatch } from "react-redux"
import { ADD } from "../../../controller/action"

export const FilterItems = ({ products, selectedCategories, onCategoryChange }) => {

	const dispatch = useDispatch()
  const addToCart = (e) => {
    dispatch(ADD(e))
  }
	
  const categories = [...new Set(products.map((item) => item.category))]

  const handleCategoryChange = (category) => {
    const updatedCategories = [...selectedCategories]
    if (updatedCategories.includes(category)) {
      updatedCategories.splice(updatedCategories.indexOf(category), 1)
    } else {
      updatedCategories.push(category)
    }
    onCategoryChange(updatedCategories)
  }

  const filteredProducts = products.filter((item) => selectedCategories.includes(item.category))
	console.log(filteredProducts);

  return (
    <>
      <section className="filterItems">
        <div className="categoryFilter">
          <h3>Filter by Category</h3>
          {categories.map((category) => (
            <label key={category}>
              <input
                type="checkbox"
                checked={selectedCategories.includes(category)}
                onChange={() => handleCategoryChange(category)}
              />
              {category}
            </label>
          ))}
        </div>
        <div className="product_items">
          {filteredProducts.map((item) => (
            <div className="box" key={item.id}>
              <div className='img'>
                  <img src={item.cover} alt='' />
                  <div className='overlay'>
                    <button className='button' onClick={() => addToCart(item)}>
                      <FiShoppingBag />
                    </button>
                    <button className='button'>
                      <AiOutlineHeart />
                    </button>
                    <button className='button'>
                      <FiSearch />
                    </button>
                  </div>
                </div>
                <div className='details'>
                  <h3>{item.title}</h3>
                  <p>{item.author}</p>
                  <h4>${item.price}</h4>
                </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
