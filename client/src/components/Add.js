import { React, useState } from 'react'

function Add(props) {
    const [f_name, setFName] = useState("");
    const [l_name, setLName] = useState("");
    const [age, setAge] = useState(0);
    const [city, setCity] = useState("");

    const handleFNameChange = (e) => {
        setFName(e.target.value);
    }
    const handleLNameChange = (e) => {
        setLName(e.target.value);
    }
    const handleAgeChange = (e) => {
        setAge(e.target.value);
    }
    const handleCityChange = (e) => {
        setCity(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const photographer = {
            first_name: f_name,
            last_name: l_name,
            age: age,
            city: city
        }
        props.onAdd(photographer)
    }

    return (
    <div className="add">
        <div className="form">
            <h1>Add a Photographer ♥</h1>
            <form onSubmit={handleSubmit}>
                    <label for="fname">First Name
                        <input 
                            type="text" 
                            value={f_name}
                            placeholder="Your First Name..."
                            required
                            onChange={(e)=>{handleFNameChange(e)}}/>
                            {/* Handle Change will be called when user write first
                            name in input box */}
                    </label>
                    <br></br>
                    <label for="lname">Last Name
                        <input type="text"
                            value={l_name}
                            placeholder="Your Last Name..."
                            onChange={(e)=>{handleLNameChange(e)}}/>
                    </label>
                    <br></br>
                    <label className="age" for="age">Age
                        <input type="number" 
                            value={age}
                            placeholder="Age"
                            onChange={(e)=>{handleAgeChange(e)}}/>
                    </label>
                    <br></br>
                    <label for="city">City
                        <input type="text"
                            value={city}
                            placeholder="City"
                            onChange={(e)=>{handleCityChange(e)}}/>
                    </label>
                    <br></br>
                <button type="submit">Add</button>
            </form>
        </div>
    </div>
    )
}

export default Add;