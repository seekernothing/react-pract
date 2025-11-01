import { useState } from "react";

const Form = () => {

    const[name,setName] = useState("")
    const[email,setEmail] = useState("")
    const[message,setMessage] = useState("")
    const[submittedData,setSubmitteddata] = useState(null)

    console.log(submittedData);
    

    const handelOnsubmit= (e)=>{
          e.preventDefault()
          setSubmitteddata({name,email,message})
          setName("")
          setEmail("")
          setMessage("")
    }
  return (
    <div>
      <h2>
        <b>Feedback Form</b>
      </h2>

      <form onSubmit={handelOnsubmit}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Name"
          required
        />
        <br></br>
        <br></br>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
          required
        />
        <br></br> <br></br>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Message"
        ></textarea>
        <br></br> <br></br>
        <button type="submit">Submit</button>
      </form>



            {
                submittedData && 
               <div style={{marginTop:"10px"}}>

                <h2><b>Submitted Data</b></h2>
                <p>
                    <b>Name : {submittedData.name}</b>
                </p>
                <p>
                    <b>Email : {submittedData.email}</b>
                </p>
                <p>
                    <b>Message: {submittedData.message}</b>
                </p>
                
                  </div>
            }



    </div>




  );
};

export default Form;
