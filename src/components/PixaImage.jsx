import React from "react";
import {Image} from "@nextui-org/react";
import { NavLink } from "react-router-dom";

export default function PixaImage({ImageInfo}) {
    
  return (
    
    
  <NavLink target="_blank" to={ImageInfo.largeImageURL}><Image
  width={400}
  height={300}
  alt={ImageInfo.tags}
  src={ImageInfo.webformatURL}
  
/></NavLink>
  );
}
