// import { useRef } from "react/cjs/react.production.min";
import { useRef } from "react";


export default function AddCourse() {
    const contentInputRef = useRef();
    

    function submithandler(event) {
        event.preventDefault();
        const value = contentInputRef.current.value;
        
        console.log(value);
    }
    


    return (
        <form onSubmit={submithandler}>
        <div>
            <label htmlFor='name'>Course Name</label>
            <input type='text' required id='name' />
            <label htmlFor='content'>Content</label>
            <input type='text' required id='content' ref={contentInputRef} /> 
            <button>Add</button>          
        </div>
        </form>
    );
}
