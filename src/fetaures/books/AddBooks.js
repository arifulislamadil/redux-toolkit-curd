import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBook } from './BookSlice';
import { v4 as uuidv4 } from 'uuid';

const AddBooks = () => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
console.log(title,author)
const dispatch = useDispatch()
const navigate = useNavigate()

const handleSubmit = (e) =>{
    e.preventDefault();
    const book={id: uuidv4(),title,author}
    dispatch(addBook(book))
    navigate("/show-books",{replace:true})
}
    return (
        <div>
            <h3>Add Books</h3>
            <form onSubmit={handleSubmit}>

                <div className='form-field'>
                    <div>
                        <label htmlFor="title">Title: </label>
                        <input type="text" id='title' value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="author">author</label>
                        <input type="text" id='author' value={author} onChange={(e) => setAuthor(e.target.value)} />
                    </div>
                </div>
                <button type='submit'>Add Book</button>
            </form>
        </div>
    );
};

export default AddBooks;