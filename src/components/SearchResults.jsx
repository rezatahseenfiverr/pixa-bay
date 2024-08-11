import { useEffect, useState } from "react";
import {Input} from "@nextui-org/react";
import { CiSearch } from "react-icons/ci";
import PixaImage from "./PixaImage";
import { data } from "autoprefixer";

export default function SearchResults() {
  
    const [NewImages,setNewImages] = useState("");

    const [Loading,setLoading] = useState(true);

    const [NewData,setNewData] = useState([]);

    const handleOnChange = (e) => {
        e.preventDefault()
        setNewImages(e.target.value)
    }

    async function getImages(){
        setLoading(true);
        const response = await fetch (`https://pixabay.com/api/?key=44890869-53c71b575531943d6b28f1839&q=Cars&image_type=photo&per_page=100`)
       
        const data = await response.json();
        setNewData(data.hits)
        setLoading(false);
      }
    async function getSearchImages(){
        setLoading(true);
        const response = await fetch (`https://pixabay.com/api/?key=44890869-53c71b575531943d6b28f1839&q=${NewImages}&image_type=photo&per_page=100`)
       
        const data = await response.json();
        setNewData(data.hits)
        setLoading(false);
      }

    useEffect(() => {
        // If searchCity is 2 letters or more
        if (NewImages.length > 1) {
            getSearchImages()
        }else{
            getImages()
        }
      }, [NewImages]);
    
    console.log(NewData)
     

  return (
    <div className='mt-20'>
      <div className='w-[50%] mx-auto'>
      <div>
      <Input
        onChange={(e) => handleOnChange(e)}
        isClearable
        radius="lg"
        classNames={{
          label: "text-black/50 dark:text-white/90",
          input: [
            "bg-transparent",
            "text-black/90 dark:text-white/90",
            "placeholder:text-default-700/50 dark:placeholder:text-white/60",
          ],
          innerWrapper: "bg-transparent",
          inputWrapper: [
            "shadow-xl",
            "bg-default-200/50",
            "dark:bg-default/60",
            "backdrop-blur-xl",
            "backdrop-saturate-200",
            "hover:bg-default-200/70",
            "dark:hover:bg-default/70",
            "group-data-[focus=true]:bg-default-200/50",
            "dark:group-data-[focus=true]:bg-default/60",
            "!cursor-text",
          ],
        }}
        placeholder="Type to search..."
        startContent={
          <CiSearch className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
        }
      />
    </div>
      </div>
      <div className='mt-20 '>
        
      {
        Loading ? (<h1 className="text-center">Loading...</h1>):(<div className="flex gap-5 flex-wrap justify-center ">
         {
            NewData.map((info) => (
              <PixaImage key={info.id} ImageInfo={info}/>
            ))
          } 
          
          </div>)
      }
        
      </div>
     </div>
  );
}
