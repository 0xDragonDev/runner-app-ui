import { styled } from "@mui/material";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import tw from "twin.macro";

import Section from "~/components/Common/Section";
import Container from "~/components/Common/Container";

const Wrapper = styled(Section)({
  ...tw`pt-36 tablet:pt-72 laptop:pt-24 desktop:pt-0`,
});

const Background = styled("img")(({ theme: { breakpoints } }) => ({
  ...tw`absolute right-0 -z-10`,
  [breakpoints.up("xs")]: {
    top: -20,
    width: "calc(50% - 10px)",
  },
  [breakpoints.up("sm")]: {
    top: -30,
  },
  [breakpoints.up("lg")]: {
    top: 0,
  },
  [breakpoints.up("tablet")]: {
    width: "calc(50% + 120px)",
  },
  [breakpoints.up("laptop")]: {
    width: "calc(50% + 350px)",
  },
  [breakpoints.up("desktop")]: {
    width: "calc(50% + 250px)",
  },
}));

const ReadMoreButton = styled(Link)({
  ...tw`hidden tablet:block self-start bg-primary hover:bg-hover text-white xl:text-2xl xxl:text-3xl rounded-full px-10 py-3 mt-8`,
  boxShadow: "3px 4px 25px 0px rgba(39, 110, 241, 0.5)",
});

const Mobile = styled("img")(({ theme: { breakpoints } }) => ({
  [breakpoints.up("laptop")]: {
    width: "120%",
    maxWidth: "120%",
    marginLeft: "-20%",
  },
}));

export default function Home() {
  return (
    <Wrapper id="home">
      <Background src="assets/img/bg-home.svg" />
      <Container>
        <Grid container>
          <Grid
            className="flex flex-col justify-center"
            item
            xs={12}
            laptop={6}
          >
            <Typography
              className="w-full mb-7 md:w-full text-heading text-3xl tablet:text-7xl laptop:text-6xl xl:text-8xl xxl:text-9xl leading-none font-semibold"
              variant="h2"
            >
              Empower Your Errands with{" "}
              <span className="text-contrast">Runnerr</span>
            </Typography>

            <Typography className="w-full xl:text-2xl xxl:text-3xl">
              Discover a Vast Network of Highly Skilled Professionals Ready to
              Help You with Any Task
            </Typography>
            <ReadMoreButton href="#about">Read More</ReadMoreButton>
          </Grid>
          <Grid item xs={12} laptop={6}>
            <Mobile src="assets/img/mobile1.png" />
          </Grid>
        </Grid>
      </Container>
    </Wrapper>
  );
}
