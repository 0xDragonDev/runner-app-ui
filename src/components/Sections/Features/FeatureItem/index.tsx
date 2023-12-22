import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import SVG from "react-inlinesvg";

import FlexBox from "~/components/Common/FlexBox";

type Props = {
  id: number;
  imgSrc: string;
  title: string;
  description: string;
};

export default function FeatureItem({ id, imgSrc, title, description }: Props) {
  return (
    <Grid
      className="feature flex flex-col items-center justify-between mb-4"
      item
      xs={12}
      laptop={4}
    >
      <FlexBox className="flex-col items-center">
        <SVG className="mb-7" src={imgSrc} />
        <Typography
          className="text-xl xl:text-2xl xxl:text-3xl text-heading font-semibold mb-3"
          variant="h5"
          sx={{
            ".feature:hover > &": {
              color: "#2669E5 !important",
            },
          }}
        >
          {title}
        </Typography>
        <Typography className="text-center xl:text-base xxl:text-xl mb-5">
          {description}
        </Typography>
      </FlexBox>
      <Link
        className="flex items-center justify-center xxl:text-lg rounded-full border border-solid"
        width={54}
        height={54}
        sx={{
          borderColor: "rgba(38,105,229,0.20)",
          ".feature:hover > &": {
            color: "white",
            background:
              "var(--blue, linear-gradient(180deg, #276EF1 0%, #1D51B3 100%))",
            boxShadow: "3px 4px 25px 0px rgba(34, 95, 209, 0.5)",
          },
        }}
      >
        {id}
      </Link>
    </Grid>
  );
}
