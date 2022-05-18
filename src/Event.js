import React,{useState} from 'react';
import TodoList from "./Todo";

var Ev = () =>
{
    var array_items = [];

    const [title,add_item] = useState("");
    const [Todo_array,todo_array_usestate] = useState(array_items);
    let add_list_item = (e) =>
    {
        add_item(e.target.value);
    }
    let add_to_todo = () =>
    {
        let item_insert = 
        {
            "id":Math.floor(Math.random() * 101),
            "value":title
        };
       todo_array_usestate([item_insert,...Todo_array]);
       add_item("");
    }

    return (
        <div className="container-fluid w-100">
            <div className=" m-auto d-flex mt-3">
                <input className="form-control me-2 " type="text" placeholder="Search" onChange={add_list_item} value={title}/>
                <button className="btn btn-primary" type="button" onClick={add_to_todo}>ADD</button>
            </div>  
           <TodoList item={Todo_array}/>
        </div>
    )
}

export default Ev;