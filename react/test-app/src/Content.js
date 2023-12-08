// Content.js
import React, { useState } from "react";
import { BsTrash } from "react-icons/bs";

const Content = () => {
  const [items, setItems] = useState([
    { id: 1, checked: false, item: "practice player1" },
    { id: 2, checked: false, item: "practice player2" },
    { id: 3, checked: false, item: "practice player3" },
  ]);
const handlecheck=(id)=>{
const listitems=items.map(item=>item.id===id?{...item,checked:!item.checked}:item)
setItems(listitems)
localStorage.setItem("todo",JSON.stringify(listitems))

}
console.log(handlecheck)
const handledelete=(id)=>{
 const listitems=items.filter(item=>item.id!==id)
 setItems(listitems)

}
  return (
    <main>
      <ul>
        {items.map((item) => (
          <li className="item" key={item.id}>
            <input type="checkbox" onChange={()=>handlecheck(item.id)} onclick="" checked={item.checked} />
            <label style={(item.checked)?{textDecoration:'line-through'}:null} onDoubleClick={()=>handlecheck(item.id)} onclick="" checked={item.checked}>{item.item}</label>
            <BsTrash role="button" tabIndex="0" onClick={()=>handledelete(item.id)} />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Content;
