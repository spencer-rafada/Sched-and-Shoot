import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const PhotographerSchema = new Schema({
    first_name: { type: String, required: true, maxLength: 50},
    last_name: { type: String, required: true, maxLength: 50},
    age: {type: Number, required: true},
    city: {type: String, required: true, maxLength: 50},
    likeCount: {type: Number, default: 0},
    createdAt: {type: Date, default: new Date()}
})

// Virtual for photographer's full name
PhotographerSchema.virtual("name").get(function() {
    // To avoid errors in cases where author does not have first_name or last_name
    let fullName = "";
    if (this.first_name && this.last_name) {
        fullName = `${this.last_name}, ${this.first_name}`;
    }
    if (!this.first_name || !this.last_name) {
        fullName = "";
    }
    return fullName;
});

// Virtual for author's URL
PhotographerSchema.virtual("url").get(function() {
    return `/catalog/photographer/${this._id}`;
});

// Export model
const Photographer = mongoose.model("Photographer", PhotographerSchema);

export default Photographer;