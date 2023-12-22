import { styled } from "@mui/system";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Icon } from "@iconify/react";
import SVG from "react-inlinesvg";
import tw from "twin.macro";

import FlexBox from "~/components/Common/FlexBox";
import Container from "~/components/Common/Container";

const Wrapper = styled(FlexBox)(({ theme: { breakpoints } }) => ({
  backgroundImage: "url(assets/img/bg-footer.svg)",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "top",
  paddingTop: 100,
  [breakpoints.up("laptop")]: {
    paddingLeft: 100,
    paddingRight: 100,
  },
}));

const LinksHeading = styled(Typography)({
  position: "relative",
  fontSize: 19,
  fontWeight: 600,
  marginBottom: 30,

  "&::after": {
    content: "''",
    display: "block",
    width: 22,
    height: 4,
    borderRadius: 2,
    backgroundColor: "white",
    boxShadow:
      "36px 0px 0px 0px white, -36px 0px 0px 0px white, 26px 0px 0px 0px white, -26px 0px 0px 0px white",
    transform: "translateX(36px)",
    marginTop: 20,
  },
});

const IconBox = styled(FlexBox)({
  ...tw`w-8 h-8 items-center justify-center bg-white rounded-full me-2`,
  minWidth: 40,
  minHeight: 40,
  "& svg": tw`text-primary w-5 h-5`,
});

const Copyright = styled(Grid)({
  borderTop: "2px solid rgba(255, 255, 255, 0.23)",
});

export default function Footer() {
  return (
    <Wrapper component="footer">
      <Container className="block">
        <Grid container spacing={4}>
          <Grid
            className="flex flex-col mb-5"
            item
            xs={12}
            tablet={6}
            laptop={3}
          >
            <SVG className="mb-6" src="assets/logo/logo-w.svg" />
            <Typography className="text-white font-normal xl:text-lg xxl:text-xl mb-6">
              Sed ut perspiciatis unde om is nerror sit voluptatem accustium
              dolorem tium totam rem aperam quae.
            </Typography>
            <FlexBox>
              {[
                "ri:facebook-fill",
                "ri:twitter-fill",
                "ri:instagram-line",
                "mdi:google-plus",
              ].map((icon, key) => (
                <IconBox className="desktop:me-4" key={key}>
                  <Icon icon={icon} />
                </IconBox>
              ))}
            </FlexBox>
          </Grid>
          <Grid
            className="flex laptop:justify-center mb-5"
            item
            xs={12}
            tablet={6}
            laptop={3}
          >
            <FlexBox className="flex-col xxl:text-lg">
              <LinksHeading className="text-white xxl:text-2xl">
                Company News
              </LinksHeading>
              <Link className="text-white  mb-3">Partners</Link>
              <Link className="text-white mb-3">About Us</Link>
              <Link className="text-white mb-3">Career</Link>
              <Link className="text-white mb-3">Reviews</Link>
              <Link className="text-white mb-3">Terms & Conditions</Link>
            </FlexBox>
          </Grid>
          <Grid
            className="flex laptop:justify-center mb-5"
            item
            xs={12}
            tablet={6}
            laptop={3}
          >
            <FlexBox className="flex-col xxl:text-lg">
              <LinksHeading className="text-white xxl:text-2xl">
                Useful Links
              </LinksHeading>
              <Link className="text-white mb-3">Home</Link>
              <Link className="text-white mb-3">About Us</Link>
              <Link className="text-white mb-3">Services</Link>
              <Link className="text-white mb-3">Project</Link>
              <Link className="text-white mb-3">Our Team</Link>
            </FlexBox>
          </Grid>
          <Grid
            className="flex laptop:justify-center mb-5"
            item
            xs={12}
            tablet={6}
            laptop={3}
          >
            <FlexBox className="flex-col">
              <LinksHeading className="text-white xxl:text-2xl">
                Contact Us
              </LinksHeading>
              <FlexBox className="mb-5 items-center">
                <IconBox>
                  <Icon icon="ant-design:phone-outlined" />
                </IconBox>
                <Typography className="text-white text-sm xl:text-base xxl:text-lg font-normal">
                  +1 (800) 121-3637
                  <br />
                  +91 (555) 234-8765
                </Typography>
              </FlexBox>
              <FlexBox className="mb-6 items-center">
                <IconBox>
                  <Icon icon="carbon:email" />
                </IconBox>
                <Typography className="text-white text-sm xl:text-base xxl:text-lg font-normal">
                  info@example.com
                  <br />
                  sale@example.com
                </Typography>
              </FlexBox>
              <FlexBox className="items-center">
                <IconBox>
                  <Icon icon="ion:location-outline" />
                </IconBox>
                <Typography className="text-white text-sm xl:text-base xxl:text-lg font-normal">
                  380 St Kilda Road, Melbourne VIC 3004, Australia
                </Typography>
              </FlexBox>
            </FlexBox>
          </Grid>
          <Copyright
            className="flex justify-center pt-4 pb-8 ms-8"
            item
            xs={12}
          >
            <Typography className="text-center xxl:text-xl text-[#ddd]">
              Copyright © 2023 RUNNER. All Rights Reserved
            </Typography>
          </Copyright>
        </Grid>
      </Container>
    </Wrapper>
  );
}
