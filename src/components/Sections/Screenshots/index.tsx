import { styled } from "@mui/system";
import Typography from "@mui/material/Typography";
import { Swiper, SwiperSlide, SwiperProps } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import tw from "twin.macro";

import Section from "~/components/Common/Section";
import Container from "~/components/Common/Container";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.css";

const swiperProps: SwiperProps = {
  effect: "coverflow",
  grabCursor: true,
  slidesPerView: 3,
  spaceBetween: 120,
  loop: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 40,
    depth: 500,
    modifier: 1,
    scale: 1.2,
    slideShadows: true,
  },
  pagination: {
    clickable: true,
    type: "bullets",
  },
  navigation: true,
  modules: [EffectCoverflow, Pagination, Navigation],
};

const Wrapper = styled(Section)({
  ...tw`pt-20 lg:pt-32 xxl:pt-64 pb-16`,
});

export default function Screenshots() {
  return (
    <Wrapper id="screenshots">
      <Container className="flex flex-col items-center overflow-hidden">
        <Typography
          className="text-center text-4xl tablet:text-5xl laptop:text-4xl xl:text-7xl leading-0 text-heading font-semibold mb-5"
          variant="h4"
        >
          Our App Screenshots
        </Typography>
        <Typography className="text-center w-full xl:text-xl xxl:text-2xl laptop:w-6/12">
          Quisque posuere mollis ipsum et molestie. Fusce cursus, risus vel
          scelerisque porttitor, leo quam vulputate nibh, sit amet blandit erat
          magna.
        </Typography>
        <Swiper {...swiperProps}>
          <SwiperSlide>
            <img src="assets/img/screenshot1.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="assets/img/screenshot2.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="assets/img/screenshot3.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="assets/img/screenshot4.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="assets/img/screenshot5.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="assets/img/screenshot6.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="assets/img/screenshot7.png" />
          </SwiperSlide>
        </Swiper>
      </Container>
    </Wrapper>
  );
}
