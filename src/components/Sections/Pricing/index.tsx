import { styled } from "@mui/system";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Switch from "@mui/material/Switch";
import tw from "twin.macro";

import Section from "~/components/Common/Section";
import Container from "~/components/Common/Container";
import FlexBox from "~/components/Common/FlexBox";

import PricingItem from "./PricingItem";

const pricing = [
  {
    title: "Beginner",
    price: 15,
    features: [
      "1000+ projects",
      "Not transaction fees",
      "Unlimited Storage",
      "5 Downloads",
    ],
  },
  {
    title: "Starter",
    price: 15,
    features: [
      "1000+ projects",
      "Not transaction fees",
      "Unlimited Storage",
      "5 Downloads",
    ],
    isPopular: true,
    isActive: true,
  },
  {
    title: "Professional",
    price: 18,
    features: [
      "1000+ projects",
      "Not transaction fees",
      "Unlimited Storage",
      "5 Downloads",
    ],
    isActive: true,
  },
  {
    title: "Power Plan",
    price: 25,
    features: [
      "1000+ projects",
      "Not transaction fees",
      "Unlimited Storage",
      "5 Downloads",
    ],
    isActive: true,
  },
];

const Wrapper = styled(Section)({
  ...tw`pt-32`,
});

const BillingPeriodSwitch = styled(Switch)(({ theme }) => ({
  width: 60,
  height: 30,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    paddingTop: 5,
    paddingLeft: 8,
    "&.Mui-checked": {
      transform: "translateX(24px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        opacity: 1,
      },
    },
  },
  "& .MuiSwitch-thumb": {
    width: 20,
    height: 20,
  },
  "& .MuiSwitch-track": {
    borderRadius: 9999,
    backgroundColor: theme.palette.primary.main,
    opacity: 1,
  },
}));

export default function Pricing() {
  return (
    <Wrapper id="pricing">
      <Container className="flex flex-col items-center">
        <Typography
          className="self-center text-4xl tablet:text-5xl laptop:text-4xl xl:text-7xl leading-0 text-center text-heading font-semibold mb-5"
          variant="h4"
        >
          Our Pricing Plans
        </Typography>
        <Typography className="text-center w-full xl:text-xl xxl:text-2xl laptop:w-6/12 mb-12">
          Quisque posuere mollis ipsum et molestie. Fusce cursus, risus vel
          scelerisque porttitor, leo quam vulputate nibh, sit amet blandit erat
          magna.
        </Typography>
        <FlexBox className="items-center mb-16">
          <Typography className="xl:text-xl">Monthly</Typography>
          <BillingPeriodSwitch className="mx-4" />
          <Typography className="xl:text-xl">Annually</Typography>
        </FlexBox>
        <Grid container>
          {pricing.map((props, key) => (
            <PricingItem key={key} {...props} />
          ))}
        </Grid>
      </Container>
    </Wrapper>
  );
}
