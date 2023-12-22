import { styled } from "@mui/system";
import Grid from "@mui/material/Grid";
import Badge from "@mui/material/Badge";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import SVG from "react-inlinesvg";

import FlexBox from "~/components/Common/FlexBox";

const PriceCard = styled(FlexBox)({
  borderRadius: 10,
  border: "3px solid white",
  backgroundColor: "white",
  boxShadow: "0px 5px 25px 0px rgba(0, 0, 0, 0.2)",
});

const PriceTag = styled(FlexBox)({
  color: "#2669E5",
});

const StartNowButton = styled(Button)({
  transform: "translateY(50%)",
});

type Props = {
  title: string;
  price: number;
  features: string[];
  isPopular?: boolean;
  isActive?: boolean;
};

export default function PricingItem(props: Props) {
  const { title, price, features, isPopular, isActive } = props;
  return (
    <Grid className="px-4 mb-12" item xs={12} tablet={6} laptop={3}>
      <PriceCard
        className="relative flex-col items-center py-10"
        sx={{ border: isActive ? "3px solid rgba(39, 110, 241, 0.28)" : "" }}
      >
        {isPopular ? (
          <Badge
            className="absolute top-0"
            badgeContent="Popular"
            color="primary"
            sx={{
              span: {
                display: "flex",
                height: 35,
                fontSize: 15,
                borderRadius: 9999,
                px: 3,
              },
            }}
          ></Badge>
        ) : null}
        <Typography
          className="text-3xl text-black font-semibold mb-6"
          variant="h5"
        >
          {title}
        </Typography>
        <PriceTag className="mb-8">
          <Typography className="text-2xl">$</Typography>
          <Typography className="text-6xl font-semibold mx-2">
            {price}
          </Typography>
          <Typography className="text-base self-end">/ Monthly</Typography>
        </PriceTag>
        <Typography
          className="text-2xl text-black font-medium mb-5"
          variant="h5"
        >
          I have a dream
        </Typography>
        <FlexBox className="flex-col justify-start">
          {features.map((text, key) => (
            <FlexBox className="items-center mb-5" key={key}>
              <SVG className="me-1" src="assets/img/icon-item.svg" />
              <Typography>{text}</Typography>
            </FlexBox>
          ))}
        </FlexBox>
        <StartNowButton
          className="absolute bottom-0 px-9 py-3 rounded-full"
          variant="contained"
        >
          Start Now
        </StartNowButton>
      </PriceCard>
    </Grid>
  );
}
