import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { updateBook } from './BookSlice';

const EditBooks = () => {
    const location = useLocation();
    const [id, setId] = useState(location.state.id)
    const [title, setTitle] = useState(location.state.title)
    const [author, setAuthor] = useState(location.state.author)
    console.log(location.state)
const dispatch = useDispatch()
const navigate = useNavigate()

    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(updateBook({id,title,author}))
        navigate("/show-books" , {replace:true})
    }
    return (
        <div>
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
               
                <button type='submit'>Update Book</button>
            </form>
        </div>
    );
};

export default EditBooks;