import { styled } from "@mui/system";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import tw from "twin.macro";

import FlexBox from "~/components/Common/FlexBox";

const BlogCard = styled(FlexBox)({
  width: 350,
  boxShadow: "0px 5px 25px 0px rgba(0, 0, 0, 0.2)",
});

const AvatarCircle = styled(FlexBox)({
  ...tw`w-11 h-11 xl:w-12 h-12 xxl:w-14 xxl:h-14`,
  border: "2px solid white",
  boxShadow: "3px 4px 12px 0px rgba(0, 0, 0, 0.15)",
});

type Props = {
  author: string;
  role: string;
  avatar: string;
  image: string;
  title: string;
  text: string;
  dateTime: string;
};

export default function BlogItem(props: Props) {
  const { author, role, avatar, image, title, text, dateTime } = props;
  return (
    <Grid className="mb-8" item xs={12} laptop={4}>
      <FlexBox className="px-4">
        <BlogCard className="relative flex-col items-start rounded-xl overflow-hidden w-full mx-auto">
          <img className="w-full" src={image} />
          <FlexBox className="flex-col px-8">
            <FlexBox className="flex-col items-start py-10">
              <Button
                className="rounded-full text-sm xxl:text-base font-normal mb-10 px-5 py-1"
                variant="contained"
                color="primary"
              >
                {dateTime}
              </Button>
              <Typography
                className="text-lg xxl:text-xl text-heading font-semibold mb-6"
                variant="h6"
              >
                {title}
              </Typography>
              <Typography className="xxl:text-lg">{text}</Typography>
            </FlexBox>
            <FlexBox className="border-t-[#D7D7D7] border-t border-solid pt-8 pb-10">
              <AvatarCircle className="rounded-full overflow-hidden me-6">
                <img src={avatar} />
              </AvatarCircle>
              <FlexBox className="flex-col justify-between">
                <Typography className="text-heading text-base xxl:text-lg font-semibold">
                  {author}
                </Typography>
                <Typography className="text-sm xxl:text-base font-normal">
                  {role}
                </Typography>
              </FlexBox>
            </FlexBox>
          </FlexBox>
        </BlogCard>
      </FlexBox>
    </Grid>
  );
}
