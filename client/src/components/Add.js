import { React, useState } from 'react'

function Add() {
    const [f_name, setFName] = useState("");
    const [l_name, setLName] = useState("");
    const [age, setAge] = useState(0);
    const [city, setCity] = useState("");

    const handleSubmit = async (event) => {
        try{
            let res = await fetch("http://localhost:5000/photographers", {
                method: "POST",
                body: JSON.stringify({
                    first_name: f_name,
                    last_name: l_name,
                    age: age,
                    city: city
                })
                .then(res => console.log(res))
                .catch(error => console.log(error))
            });
        } catch (err) {
            console.log(err);
        }
    }
    return (
    <div>

        <h1>Add Photographer</h1>
        <div className="form">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label>
                        <input 
                            type="text" 
                            value={f_name}
                            placeholder="First Name"
                            onChange={(e)=>setFName(e.target.value)}/>
                        <input type="text"
                            value={l_name}
                            placeholder="Last Name"
                            onChange={(e)=>setLName(e.target.value)}/>
                        <input type="number" 
                            value={age}
                            placeholder="Age"
                            onChange={(e)=>setAge(e.target.value)}/>
                        <input type="text"
                            value={city}
                            placeholder="City"
                            onChange={(e)=>setCity(e.target.value)}/>
                    </label>
                </fieldset>
                <button type="submit">Add</button>
            </form>
        </div>
    </div>
  )
}

export default Add;