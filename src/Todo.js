import "./Event.css";
import React from 'react';


function TodoList(props)
{
    const Clicked_delete_button = (get_value) =>
    {
        props.delete_data(get_value);
    }
   
    return (
    <div className="row row-cols-1 m-auto ">
        {
            props.item.map(
                items => (
                    <div className="col  my-1 px-0 py-1" key={items["id"]}>
                        <div className="d-flex justify-content-center">
                        <div className="p-2 bg-secondary flex-grow-1">{items["value"]}</div>
                        <div className="p-2 bg-success On-hover" value={items["id"]} onClick={()=>Clicked_delete_button(items["id"])}>✅</div>
                        <div className="p-2 bg-primary On-hover" value={items["id"]}>🖍</div>
                        </div>
                    </div> 
                )
            )
        }
    </div>
    
    )
}
export default TodoList;