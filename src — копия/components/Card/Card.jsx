import React, {useEffect, useState} from 'react';
import './Card.scss';



const Card = ({ activeItem, lists, setLists, setActiveId, list, tasks }) => {
    const note = lists.find(item => item.id === activeItem);

    const scroll = tasks.find(item => item.listId === activeItem)
    console.log(scroll)


    const [mode, setMode] = useState('view');

    const [form, setForm] = useState(note);

    useEffect(() => {
        setForm(note);
        setMode('view')
    }, [activeItem])


    const saveChanges = () => {
        const indexElement = lists.findIndex(item => item.id === activeItem);
        const prepareData = [...lists];
        prepareData.splice(indexElement, 1, form);

        setLists(prepareData)
        setMode('view');
    }

    const cancelChanges = () => {
        setForm(note);
        setMode('view');

    }

    const deleteCard = () => {
        const indexElement = lists.findIndex(item => item.id === activeItem);
        const prepareData = [...lists];
        prepareData.splice(indexElement, 1);
        setLists(prepareData)
        setActiveId(null);
    }


    if (mode === 'view') {
        return(
            <div className="card">


                <div className="card_items">
                    <h1>{note.name}</h1>
                    <div className="changeName">
                        <button onClick={() => setMode('edit')}>Изменить</button>
                    </div>

                    <div className="card_items-row">


                        <div className="checkbox">
                            <input id={`task-${tasks.id}`} type="checkbox"/>
                            <label htmlFor={`task-${tasks.id}`} className="label"></label>

                        </div>
                        <p>{scroll.text}</p>
                    </div>
                </div>

                <div className="footer">

                    <button onClick={deleteCard}>Удалить заметку</button>
                </div>
            </div>
        )
    } else {
        return(
            <div className="card">
                <input className="card-inputEdit"
                    type='text'
                    value={form.name}
                    onChange={(event) => {
                       setForm({...form, name: event.target.value})
                    }}
                />


                <div className="footer">
                    <button onClick={saveChanges}>Сохранить</button>
                    <button onClick={cancelChanges}>Отменить</button>
                </div>
            </div>
        )
    }
}





export default Card