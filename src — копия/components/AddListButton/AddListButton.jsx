import React, {useState}   from 'react';

import closeSvg from '../../assets/img/close.svg';

import Badge from '../Badge/Badge';
import List from "../List/List";
import './AddListButton.scss'


const AddListButton =  ({colors, onAdd}) => {
    const [visiblePopup, setVisiblePopup] = useState(false)
    const [selectedColor, selectColor] = useState(colors[2].id)
    const [inputValue, setInputValue] = useState('')

   const addList = () => {
        if (!inputValue || selectedColor === null) {
            alert('Пожалуйста, введите название задачи и выберете состояние')
            return;
        }
        const newColor = colors.filter(c => c.id === selectedColor)[0].name;
        onAdd({
            "id": Math.floor(Math.random() * 1000),
            "name": inputValue,
            "color": newColor
        })
       setVisiblePopup(false);
        setInputValue('');
        selectColor(colors[2].id);
   }
    return (
        <div className="add-list">
            <List
                onClick ={() => setVisiblePopup(!visiblePopup)}
                items={[
                    {
                        icon: (<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="list_add-button">
                            <path d="M8 1V15" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M1 8H15" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>),
                        name: ''}
                ]}
            />
            {visiblePopup && (<div className="add-list_popup">
                <img
                    onClick={() => setVisiblePopup(false)}
                    src={closeSvg}
                    alt="Закрыть"
                    className="add-list_popup-close-btn"/>
                <input
                    value={inputValue}
                    onChange={e => setInputValue(e.target.value)}
                    className="field"
                    type="text"
                    placeholder="Название задачи"
                />
                <div className="add-list_popup-colors">
                    {colors.map(color => (
                        <Badge
                            onClick={() => selectColor(color.id)}
                            key={color.id}
                            color={color.name}
                            className={selectedColor === color.id && 'active'}
                        />))}



                </div>
                <button onClick={addList} className="button-popup">Добавить</button>
            </div> )}

        </div>

    );
};


export default AddListButton;

