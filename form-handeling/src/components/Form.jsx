import { useState } from "react";

const Form = () => {
  return (
    <div>
      <h2>
        <b>Feedback Form</b>
      </h2>

      <form>
        <input type="text" placeholder="Name" required />
        <br></br>
        <br></br>
        <input type="email" placeholder="Email" required />
        <br></br> <br></br>
        <textarea placeholder="Message"></textarea>
        <br></br> <br></br>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
