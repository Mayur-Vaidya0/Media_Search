import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between items-center py-6 px-10 bg-(--c1)">
        <h1 className="text-2xl font-medium">Media Search</h1>
      
        <div className="flex gap-5 text-lg font-medium">
          <Link to="/" className="text-base acitve:scale-95 font-medium  bg-(--c4) text-(--c1) rounded px-4 py-2">Search</Link>
          <Link to="/collection" className="text-base font-medium acitve:scale-95 bg-(--c4) text-(--c1) rounded px-4 py-2">Collection</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
