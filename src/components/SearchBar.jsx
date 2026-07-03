import {useState} from 'react'
import { useDispatch } from 'react-redux';
import { setQuery } from '../redux/features/searchSlice.js';

const SearchBar = () => {

  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    
    dispatch(setQuery(text));

    setText("");
  }

  return (
    <div>
      <form onSubmit={(e)=>{submitHandler(e)}} className = 'flex bg-(--c2) gap-5 px-10 py-10'>

        <input value={text} onChange={(e) => setText(e.target.value)} required type="text" placeholder="Search..." className="w-full px-6 py-3 rounded outline-none text-xl text-white border-2" />
        
        <button type="submit" className="active:scale-95 cursor-pointer px-4 py-2 bg-(--c3) rounded text-xl hover:bg-(--c4) outline-none">
          Search
        </button>

      </form>
    </div>
  )
}

export default SearchBar
