import { styled } from "@mui/system";
import { useMediaQuery, useTheme } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import tw from "twin.macro";

import Section from "~/components/Common/Section";
import Container from "~/components/Common/Container";

import QuoteItem from "./QuoteItem";

import "swiper/css";
import "swiper/css/navigation";

import "./style.css";

const quotes = [
  {
    name: "Mr Jone Dose",
    avatar: "assets/img/user1.jpg",
    role: "Author",
    text: "Praesent fermentum nisl at ipsum fcilisis viverra elementum accumsan finibus. Cras placerat lacinia mitincidunt sit amet venenatis.",
  },
  {
    name: "Mr Jone Dose",
    avatar: "assets/img/user2.jpg",
    role: "Author",
    text: "Praesent fermentum nisl at ipsum fcilisis viverra elementum accumsan finibus. Cras placerat lacinia mitincidunt sit amet venenatis.",
  },
  {
    name: "Mr Jone Dose",
    avatar: "assets/img/user3.jpg",
    role: "Web Developer",
    text: "Praesent fermentum nisl at ipsum fcilisis viverra elementum accumsan finibus. Cras placerat lacinia mitincidunt sit amet venenatis.",
  },
  {
    name: "Mr Jone Dose",
    avatar: "assets/img/user1.jpg",
    role: "Author",
    text: "Praesent fermentum nisl at ipsum fcilisis viverra elementum accumsan finibus. Cras placerat lacinia mitincidunt sit amet venenatis.",
  },
  {
    name: "Mr Jone Dose",
    avatar: "assets/img/user2.jpg",
    role: "Author",
    text: "Praesent fermentum nisl at ipsum fcilisis viverra elementum accumsan finibus. Cras placerat lacinia mitincidunt sit amet venenatis.",
  },
  {
    name: "Mr Jone Dose",
    avatar: "assets/img/user3.jpg",
    role: "Web Developer",
    text: "Praesent fermentum nisl at ipsum fcilisis viverra elementum accumsan finibus. Cras placerat lacinia mitincidunt sit amet venenatis.",
  },
];

const Wrapper = styled(Section)({
  ...tw`pt-24`,
});

const Background = styled("img")(({ theme: { breakpoints } }) => ({
  ...tw`absolute right-0`,
  [breakpoints.up("xs")]: tw`w-5/6 bottom-52`,
  [breakpoints.up("sm")]: tw`w-5/6 bottom-32`,
  [breakpoints.up("md")]: tw`w-11/12 bottom-20`,
  [breakpoints.up("lg")]: tw`w-96 bottom-16`,
  [breakpoints.up("laptop")]: tw`w-7/12 top-16 bottom-0`,
  [breakpoints.up("desktop")]: {
    ...tw`top-10`,
    width: 720,
  },
  [breakpoints.up("xxl")]: {
    ...tw`top-0`,
    width: 960,
  },
}));

export default function Pricing() {
  const { breakpoints } = useTheme();
  const upLg = useMediaQuery(breakpoints.up("laptop"));
  const upMd = useMediaQuery(breakpoints.up("tablet"));
  const slidesPerView = upLg ? 3 : upMd ? 2 : 1;

  return (
    <Wrapper id="testimonials">
      <Background src="assets/img/bg-client.svg" />
      <Container className="flex flex-col items-center">
        <Typography
          className="self-start text-4xl tablet:text-5xl laptop:text-4xl xl:text-7xl leading-0 text-heading font-semibold mb-5"
          variant="h4"
        >
          What Our Clients Say’s
        </Typography>
        <Typography className="self-start w-full xl:text-xl xxl:text-2xl laptop:w-6/12">
          Quisque posuere mollis ipsum et molestie. Fusce cursus, risus vel
          scelerisque porttitor, leo quam vulputate nibh, sit amet blandit erat
          magna.
        </Typography>
        <Swiper
          className="px-5"
          grabCursor={true}
          slidesPerView={slidesPerView}
          spaceBetween={10}
          navigation={true}
          modules={[Navigation]}
        >
          {quotes.map((props, key) => (
            <SwiperSlide key={key}>
              <QuoteItem {...props} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Wrapper>
  );
}
