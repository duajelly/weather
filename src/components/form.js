import React from "react";

// компонент с полем (input), кнопка (button)

const Form = (props) => (
    <form onSubmit={props.wetherMethod}>
        <input type="text" name="city" placeholder="Enter city" />
        <button>Get weather</button>
    </form>
);

export default Form;