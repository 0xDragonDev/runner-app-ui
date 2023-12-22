import { styled } from "@mui/system";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import tw from "twin.macro";

import Section from "~/components/Common/Section";
import Container from "~/components/Common/Container";

import QuoteItem from "./BlogItem";

const quotes = [
  {
    author: "Jhon Abraham",
    role: "Author",
    avatar: "assets/img/user1.jpg",
    image: "assets/img/blog1.jpg",
    title: "Making Distribut Product Team Work More With Monday",
    text: "Lorem ipsum dolor sit amet consectetur adipisi cing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    dateTime: "20 Jan 2019",
  },
  {
    author: "Jhon Abraham",
    role: "Author",
    avatar: "assets/img/user2.jpg",
    image: "assets/img/blog2.jpg",
    title: "Making Distribut Product Team Work More With Monday",
    text: "Lorem ipsum dolor sit amet consectetur adipisi cing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    dateTime: "20 Jan 2019",
  },
  {
    author: "Jhon Abraham",
    role: "Author",
    avatar: "assets/img/user3.jpg",
    image: "assets/img/blog3.jpg",
    title: "Making Distribut Product Team Work More With Monday",
    text: "Lorem ipsum dolor sit amet consectetur adipisi cing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    dateTime: "20 Jan 2019",
  },
];

const Wrapper = styled(Section)({
  ...tw`pt-24`,
});

export default function Blogs() {
  return (
    <Wrapper id="blogs">
      <Container className="flex flex-col items-center">
        <Typography
          className="self-center text-center text-4xl tablet:text-5xl laptop:text-4xl xl:text-7xl leading-0 text-heading font-semibold mb-5"
          variant="h4"
        >
          Our Latest Blogs & News
        </Typography>
        <Typography className="text-center w-full xl:text-xl xxl:text-2xl laptop:w-6/12 mb-12">
          Quisque posuere mollis ipsum et molestie. Fusce cursus, risus vel
          scelerisque porttitor, leo quam vulputate nibh, sit amet blandit erat
          magna.
        </Typography>
        <Grid container>
          {quotes.map((props, key) => (
            <QuoteItem key={key} {...props} />
          ))}
        </Grid>
      </Container>
    </Wrapper>
  );
}
