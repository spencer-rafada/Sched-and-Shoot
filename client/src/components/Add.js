import { React, useState } from 'react'

// This component is use to add the photographer in the list or database
function Add(props) {
    const [f_name, setFName] = useState("");
    const [l_name, setLName] = useState("");
    const [age, setAge] = useState(0);
    const [city, setCity] = useState("");

    // This handles the change in first_name
    const handleFNameChange = (e) => {
        setFName(e.target.value);
    }
    
    // This handles the change in last_name
    const handleLNameChange = (e) => {
        setLName(e.target.value);
    }

    // This handles the change in age
    const handleAgeChange = (e) => {
        setAge(e.target.value);
    }

    // This handles the change in city
    const handleCityChange = (e) => {
        setCity(e.target.value);
    }

    // This handles the even when submit is sent. It sets the state of the photographersList
    // using the props.onAdd function
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