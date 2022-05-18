import "./Event.css";
import React from 'react';


function TodoList(props)
{
    return (
    <div className="row row-cols-1 m-auto ">
        {
            props.item.map(
                items => (
                    <div className="col  my-1 px-0 py-1" key={items["id"]}>
                        <div className="d-flex justify-content-center">
                        <div className="p-2 bg-secondary flex-grow-1">{items["value"]}</div>
                        <div className="p-2 bg-success On-hover" >✅</div>
                        <div className="p-2 bg-primary On-hover">🖍</div>
                        </div>
                    </div> 
                )
            )
        }
    </div>
    
    )
}
export default TodoList;