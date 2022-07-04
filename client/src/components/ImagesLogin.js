import image1 from "../images/family-1.jpg";
import image2 from "../images/family-2.jpg";
import image3 from "../images/family-3.jpg";
import image4 from "../images/family-4.jpg";
import { useRef } from "react";

const ImagesLogin = () => {
  const random = useRef(Math.floor(Math.random() * 4));
  const images = [image1, image2, image3, image4];

  return (
    <>
      <div>
        <div className="imagesOverlay"></div>
        <img
          alt="background"
          src={images[random.current]}
          width="100%"
          height="100%"
        />
      </div>
    </>
  );
};

export default ImagesLogin;
