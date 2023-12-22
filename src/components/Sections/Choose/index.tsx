import { styled } from "@mui/system";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import tw from "twin.macro";

import Section from "~/components/Common/Section";
import Container from "~/components/Common/Container";
import FlexBox from "~/components/Common/FlexBox";

const Wrapper = styled(Section)(({ theme: { breakpoints } }) => ({
  paddingTop: "100%",
  [breakpoints.up("lg")]: {
    paddingTop: "calc(60% + 200px)",
  },
  [breakpoints.up("tablet")]: {
    paddingTop: "calc(40% + 280px)",
  },
  [breakpoints.up("laptop")]: {
    paddingTop: 60,
  },
  [breakpoints.up("xl")]: {
    paddingTop: 120,
  },
  [breakpoints.up("xxl")]: {
    paddingTop: 180,
  },
}));

const Background = styled(FlexBox)(({ theme: { breakpoints } }) => ({
  ...tw`absolute items-center justify-center left-0 top-16 w-full laptop:w-5/12`,
  backgroundImage: "url(assets/img/bg-choose.svg)",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "0 center",
  backgroundSize: "90%",
  [breakpoints.up("tablet")]: {
    backgroundSize: "70%",
  },
  [breakpoints.up("laptop")]: {
    ...tw`top-10`,
    backgroundSize: "90%",
    "& img": {
      width: "100%",
    },
  },
  [breakpoints.up("desktop")]: {
    ...tw`top-0`,
    backgroundSize: "90%",
  },
}));

const AppButton = styled("img")(({ theme: { breakpoints } }) => ({
  maxWidth: 170,
  [breakpoints.up("lg")]: {
    maxWidth: 190,
  },
}));

export default function Choose() {
  return (
    <Wrapper>
      <Background>
        <img src="assets/img/mobile2.png" />
      </Background>
      <Container>
        <Grid container spacing={6}>
          <Grid item xs={0} laptop={5}></Grid>
          <Grid item xs={12} laptop={7}>
            <Typography
              className="text-heading text-4xl tablet:text-5xl laptop:text-4xl xl:text-7xl font-semibold mb-11"
              variant="h4"
            >
              Easy And Perfect Solution For Your Everyday Tasks
            </Typography>
            <Typography className="mb-5 xl:text-xl xxl:text-2xl">
              A complete solution for your everyday tasks: Simplify your daily
              routine with Runnerr. We understand that life can be hectic, and
              managing multiple tasks can be overwhelming. That's why we've
              created a platform that offers comprehensive assistance for all
              your everyday needs. From house cleaning and grocery shopping to
              running errands and organizing your schedule, Runnerr is your
              reliable partner. Our network of skilled professionals is ready to
              step in and lend a helping hand, so you can focus on what truly
              matters to you.
            </Typography>
            <Typography className="mb-5 xl:text-xl xxl:text-2xl">
              At Runnerr, we believe that no task is too big or too small. Our
              complete solutions for your everyday tasks encompass a wide range
              of services tailored to your unique requirements. Need a plumber
              to fix a leaky faucet? A personal assistant to help manage your
              appointments? Or a driver to pick up dry cleaning? Whatever it is,
              Runnerr has got you covered. Our user-friendly platform allows you
              to easily browse through available services, select the perfect
              service provider, and enjoy the convenience of getting your tasks
              done seamlessly. Take control of your day and let Runnerr handle
              the rest, ensuring a stress-free and productive lifestyle.
            </Typography>
            <FlexBox className="flex-col lg:flex-row">
              <AppButton
                className="lg:me-3 mb-3 lg:mb-0 w-full h-full"
                src="assets/img/icon-googleplay.svg"
              />
              <AppButton src="assets/img/icon-appstore.svg" />
            </FlexBox>
          </Grid>
        </Grid>
      </Container>
    </Wrapper>
  );
}
