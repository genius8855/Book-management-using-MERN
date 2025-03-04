import mongoose from "mongoose";

//Define a schema
const bookSchema = mongoose.Schema({
    title: {type: String, required: true},
    author: {type: String, required: true},
    publishYear: {type: Number, required: true}
},
{
    timestamps: true
}
); 

// Create a model
const Book = mongoose.model("Book", bookSchema);
export default Book;
