import {fetchPhotos, fetchVideos} from "../api/mediaApi";
import {useSelector , useDispatch} from "react-redux";
import {setResults , setError , setLoading} from "../redux/features/searchSlice.js";
import {useEffect} from "react";
import ResultCard from "./ResultCard.jsx";

const ResultGrid = () => {

  const {query , activeTab , results , loading , error} = useSelector((store) => store.search);

  const dispatch = useDispatch();

  useEffect(function(){
    if(!query) return;
    const getData = async () => {
      try{
        dispatch(setLoading());
        let data=[];
      if (activeTab === "photos") {
        let response = await fetchPhotos(query);
        data = response.results.map((item) => ({
          id: item.id,
          type: 'photo',
          title:item.alt_description,
          thumbnails:item.urls.small,
          src:item.urls.full,
          url:item.links.html
        }));
      }
      if (activeTab === "videos") {
        let response = await fetchVideos(query);
        data = response.videos.map((item)=>({
          id: item.id,
          type: 'video',
          title:item.user.name || 'video',
          thumbnails:item.image,
          src:item.video_files[0].link,
          url:item.url
        }));
      }
        dispatch(setResults(data));
    } catch (error) {
        dispatch(setError(error.message));
      }
    }
    getData();
  },[query,activeTab,dispatch])

if(error) return <h1>Error</h1>
if(loading) return <h1>Loading...</h1>

  return (
    <div className='flex justify-between w-full flex-wrap gap-3 overflow-auto px-4'>
            {results.map((item, idx) => {
                return <div key={idx}>
                    <ResultCard item={item} />
                </div>
            })}
    </div>
  )
}

export default ResultGrid
