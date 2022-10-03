import Photographer from '../../models/photographerSchema.js';
import mongoose from 'mongoose';

mongoose.connect(`http://localhost:5000/`)

var new_user = new Photographer({
    first_name: 'Jared',
    last_name: 'Ganal', 
    age: 22,
    city: 'Tarlac'
})

await new_user.save(function(err, result){
    if (err) {
        console.log(err);
    }
    else {
        console.log(result);
    }
})