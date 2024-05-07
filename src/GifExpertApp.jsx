import { useState } from 'react';
import { AddCategory } from './Components/AddCategory';
import { GifGrid } from './Components/GifGrid';
export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch']);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory,...categories]);
  };
  return (
    <>
      {/* Titulo */}
      <h2>GifExpertApp</h2>

      {/* Input */}
      <AddCategory
        onNewCategory={(value) => onAddCategory(value)}
      />
      {
        categories.map((category) => (
          <GifGrid
            key={category}
            category={category}
          />

        ))
      }
    </>
  );
}
