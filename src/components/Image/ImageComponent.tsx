import Image from "next/image";
import React from "react";

interface ImageComponentProps {
  url: string;
}

const ImageComponent: React.FC<ImageComponentProps> = ({ url }) => {
  return (
    <>
      <Image
        src={url}
        alt="Media content"
        width="800"
        height="600"
        style={{ maxWidth: "100%" }}
      />
      ;
    </>
  );
};

export default ImageComponent;
