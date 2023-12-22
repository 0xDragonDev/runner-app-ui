import { styled } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import tw from "twin.macro";

import Section from "~/components/Common/Section";
import Container from "~/components/Common/Container";

import FeatureItem from "./FeatureItem";

const features = [
  {
    id: 1,
    imgSrc: "assets/img/feature1.svg",
    title: "Run Your Errands",
    description:
      "Delegate your tasks hassle-free with Runnerr. Submit requests and let skilled professionals take care of your errands. Focus on what matters while we handle the details, saving you time and frustration.",
  },
  {
    id: 2,
    imgSrc: "assets/img/feature2.svg",
    title: "Help with an Errand",
    description:
      "Unleash your skills with Runnerr. As a Runnerr, your expertise becomes a valuable asset for others. Use your skills to earn money and help people complete their errands. Whether you're a handyman, driver, or have any other specialized skill, Runnerr provides a platform to connect you with those in need.",
  },
  {
    id: 3,
    imgSrc: "assets/img/feature3.svg",
    title: "At your own time",
    description:
      "Take control of your time with Runnerr. Our platform offers the freedom to create your own schedule, ensuring a perfect work-life balance. Whether you're a student, a parent, or have other commitments, Runnerr allows you to choose when you're available to take on errands.",
  },
];

const Wrapper = styled(Section)({
  ...tw`pt-16`,
});

export default function Features() {
  return (
    <Wrapper id="features">
      <Container className="flex flex-col items-center">
        <Typography
          className="self-center text-4xl tablet:text-5xl laptop:text-4xl xl:text-7xl leading-0 text-heading font-semibold mb-5"
          variant="h4"
        >
          Our Features
        </Typography>
        <Typography className="text-center w-full laptop:w-9/12 xl:text-xl xxl:text-2xl desktop:w-1/2 mb-11">
          Task Variety, Flexible Pricing, Trusted Professionals, Seamless
          Booking, and Instant Notifications. Our app connects you with
          experienced and verified service providers, ensuring high-quality
          assistance for your tasks.
        </Typography>
        <Grid container spacing={8}>
          {features.map((props) => (
            <FeatureItem key={props.id} {...props} />
          ))}
        </Grid>
      </Container>
    </Wrapper>
  );
}
