import { styled } from "@mui/system";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Button from "@mui/material/Button";

import Section from "~/components/Common/Section";
import Container from "~/components/Common/Container";
import Form from "~/components/Common/Form";

const Wrapper = styled(Section)({
  backgroundImage: "url(assets/img/bg-subscribe.svg)",
  backgroundSize: "cover",
});

const SubscribeFrom = styled(Form)(({ theme: { breakpoints } }) => ({
  width: "100%",
  [breakpoints.up("tablet")]: { width: 500 },
}));

export default function Subscribe() {
  return (
    <Wrapper id="subscribe">
      <Container className="flex flex-col items-center py-24">
        <Typography
          className="text-center text-white text-4xl tablet:text-5xl laptop:text-4xl xl:text-7xl leading-0 font-semibold mb-5"
          variant="h2"
        >
          Subscribe For New Features
        </Typography>
        <Typography className="text-center text-white xl:text-xl xxl:text-2xl w-full laptop:w-3/5 mb-12">
          Quisque posuere mollis ipsum et molestie. Fusce cursus, risus vel
          scelerisque porttitor, leo quam vulputate nibh, sit amet blandit erat
          magna.
        </Typography>
        <SubscribeFrom className="relative flex justify-end border border-solid border-white rounded-full border-r-0">
          <InputBase
            className="absolute left-8 right-8 top-2 bottom-2 font-sm text-white xxl:text-xl"
            placeholder="Email Adddress..."
          />
          <Button className="text-black bg-white text-base xxl:text-lg font-medium normal-case rounded-full px-8 py-3">
            Subscribe Now
          </Button>
        </SubscribeFrom>
      </Container>
    </Wrapper>
  );
}
