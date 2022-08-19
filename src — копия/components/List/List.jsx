import React from 'react';

import Badge from '../Badge/Badge.jsx';
import removeSvg from '../../assets/img/remove.svg';

import './List.scss';

const List = ({items, isRemovable, onClick, setActiveId, deleteCard}) =>  {
    const checkDelete = (item) => {
        if (window.confirm('Подтверить удаление списка')) {
            deleteCard(item)
        }
    }
   return (
       <ul onClick={onClick} className="list">
       {items.map((item, index)  => ( <li key={index} onClick={() => setActiveId(item.id)} className={item.active ? 'active' : ' '}>

               <i>{item.icon ? item.icon :  <Badge color={item.color} />}</i>
               <span> {item.name} </span>
               {isRemovable && <img className="list_removeIcon" src={removeSvg} alt="remove icon" onClick={() => checkDelete(item)}/>}

               </li>
           ))}

    </ul>
   )
}

export default List;