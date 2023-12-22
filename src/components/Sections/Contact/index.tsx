import { styled } from "@mui/system";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Button from "@mui/material/Button";
import tw from "twin.macro";

import Section from "~/components/Common/Section";
import Container from "~/components/Common/Container";

const Wrapper = styled(Section)({
  ...tw`pt-20 pb-32`,
});

const Illustration = styled("img")(({ theme: { breakpoints } }) => ({
  [breakpoints.up("laptop")]: {
    width: "125%",
    maxWidth: "125%",
    marginLeft: "-25%",
  },
}));

const Input = styled(InputBase)({
  padding: "10px 20px",
  borderRadius: 10,
  backgroundColor: "white",
  boxShadow: "3px 4px 15px 0px rgba(0, 0, 0, 0.1)",
});

const SubmitButton = styled(Button)({
  boxShadow: "3px 4px 25px 0px rgba(39, 110, 241, 0.5)",
});

export default function Contact() {
  return (
    <Wrapper id="contact">
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} laptop={6}>
            <Illustration src="assets/img/illustration.svg" />
          </Grid>
          <Grid
            className="flex flex-col"
            item
            xs={12}
            laptop={6}
            component="form"
          >
            <Typography
              className="text-4xl tablet:text-5xl laptop:text-4xl xl:text-7xl leading-0 text-heading font-semibold mb-5"
              variant="h4"
            >
              Get In Touch
            </Typography>
            <Typography className="xl:text-xl xxl:text-2xl mb-10">
              Whether you have questions about our services, need support with
              the app, or simply want to share your thoughts, we're only a
              message away.
            </Typography>
            <Input
              className="xxl:text-xl mb-5"
              name="name"
              placeholder="Name"
            />
            <Input
              className="xxl:text-xl mb-5"
              name="email"
              placeholder="Email"
            />
            <Input
              className="xxl:text-xl mb-5"
              name="phone"
              placeholder="Phone"
            />
            <Input
              className="xxl:text-xl mb-12"
              name="comments"
              placeholder="Write comments"
              multiline={true}
              rows={3}
            />

            <SubmitButton
              className="self-start xxl:text-xl px-9 py-3 rounded-full normal-case"
              variant="contained"
              type="submit"
            >
              Send Message
            </SubmitButton>
          </Grid>
        </Grid>
      </Container>
    </Wrapper>
  );
}
