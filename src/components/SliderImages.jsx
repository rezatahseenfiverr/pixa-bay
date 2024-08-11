import React from "react";
import {Image} from "@nextui-org/react";

export default function SliderImages({ImageInfo}) {
    
  return (
    
    <Image
    width={500}
    height={400}
    alt={ImageInfo.tags}
    src={ImageInfo.webformatURL}
  />
  
  );
}