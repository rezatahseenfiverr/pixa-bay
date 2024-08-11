import React from "react";
import {Image} from "@nextui-org/react";

export default function PixaImage({ImageInfo}) {
    
  return (
    
    <Image
    width={400}
    height={300}
    alt={ImageInfo.tags}
    src={ImageInfo.webformatURL}
    
  />
  
  );
}
