import React from 'react'

const AddEvents = () => {
    function clickHandler() {
        alert("Button Clicked!");
    }
    const submitHandler = (e) => {
        e.preventDefault();
        alert('Form submitted!');
    }
  return (
    <>
        <div>Add Events</div>
        <form onSubmit={submitHandler}>
            <input type="text" />
            <button>Submit</button>
        </form>
        <button onClick={clickHandler}>Click Me!</button>
    </>
  )
}

export default AddEvents
