import {useDispatch , useSelector} from "react-redux";
import {setActiveTab} from "../redux/features/searchSlice.js"

const Tabs = () => {

  const tabs = ['photos', 'videos'];

  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.search.activeTab);

  return (
    <div className='flex gap-5 px-14 py-10'>

      {tabs.map(function(elem,idx){

        return <button key={idx} className={`${(activeTab === elem ? 'bg-blue-500' : 'bg-gray-600')} transition cursor-pointer px-4 py-2 rounded text-xl active:scale-95 outline-none`} onClick={() => dispatch(setActiveTab(elem))}>

          {elem}

        </button>
        
      })}

    </div>
  )
}

export default Tabs
