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
                            required
                            onChange={(e)=>{handleFNameChange(e)}}/>
                            {/* Handle Change will be called when user write first
                            name in input box */}
                        <input type="text"
                            value={l_name}
                            placeholder="Last Name"
                            onChange={(e)=>{handleLNameChange(e)}}/>
                        <input type="number" 
                            value={age}
                            placeholder="Age"
                            onChange={(e)=>{handleAgeChange(e)}}/>
                        <input type="text"
                            value={city}
                            placeholder="City"
                            onChange={(e)=>{handleCityChange(e)}}/>
                    </label>
                </fieldset>
                <button type="submit">Add</button>
            </form>
        </div>
    </div>
    )
}

export default Add;