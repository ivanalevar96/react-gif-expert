import { useState } from 'react';
import { AddCategory } from './Components/AddCategory';
export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball', 'Samurai X']);

  const onAddCategory = () => {
    setCategories([...categories, 'HunterXHunter']);
  };
  return (
    <>
      {/* Titulo */}
      <h2>GifExpertApp</h2>

      {/* Input */}
      <AddCategory setCategories={setCategories} />

      {/* Listado de Gifs */}
      <ol>
        {categories.map(category => {
          return <li key={category}>{category}</li>
        })}
      </ol>

      {/* Gif Item */}
    </>
  );
}
