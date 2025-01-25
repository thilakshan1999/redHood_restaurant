import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Background1Img from "../../../../assets/images/home/background1.jpg";
import Background2Img from "../../../../assets/images/home/background2.jpg";
import Background3Img from "../../../../assets/images/home/background3.jpg";
import BannerImg from "./bannerImg";
import { Box } from "@mui/material";

const Banner = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 900, min: 0 },
      items: 1,
    },
  };
  return (
    <Box
      sx={{
        maxWidth: "1200px",
        mx: "auto",
        padding: {
          xs: "50px 0px 30px 0px",
          md: "50px 20px 30px 20px",
        },
      }}
    >
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={false}
        responsive={responsive}
        ssr={false}
        infinite={false}
        autoPlay={false}
        autoPlaySpeed={3000}
        keyBoardControl={false}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <BannerImg BackgroundImg={Background1Img} />
        <BannerImg BackgroundImg={Background2Img} />
        <BannerImg BackgroundImg={Background3Img} />
        <BannerImg BackgroundImg={Background1Img} />
      </Carousel>
    </Box>
  );
};
export default Banner;
