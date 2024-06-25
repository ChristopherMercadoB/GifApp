import React, { useCallback, useState } from 'react'
import AddCategory from './components/AddCategory'

const GifApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball'])
    const onAddCategory = (value) => {
        //valorant
        setCategories([value, ...categories])
    }
  return (
    <>
        <h1>GifApp</h1>
        <AddCategory onAddCategory={onAddCategory}/>
        <ol>
            {categories.map(e=>{
                return <li key={e}>{e}</li>
            })}

            <li>ABC</li>
            <li>123</li>
            <li>234</li>
        </ol>
    </>
  )
}

export default GifApp