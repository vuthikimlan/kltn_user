import { Carousel } from "antd";
import Image from "next/image";
import banner1 from "../../../public/Banner.jpg";
import banner2 from "../../../public/Banner(2).jpg";
import banner3 from "../../../public/Banner(3).jpg";

function Banner() {
  return (
    <div>
      <Carousel autoplay>
        <div>
          <Image
            src={banner1}
            className="w-full h-[400px] object-cover"
            alt="Picture of the author"
          />
        </div>
        <div>
          <Image
            src={banner2}
            className="w-full h-[400px] object-cover"
            alt="Picture of the author"
          />
        </div>
        <div>
          <Image
            src={banner3}
            className="w-full h-[400px] object-cover"
            alt="Picture of the author"
          />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
