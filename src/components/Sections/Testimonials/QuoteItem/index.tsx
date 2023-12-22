import { styled } from "@mui/system";
import Typography from "@mui/material/Typography";

import FlexBox from "~/components/Common/FlexBox";

const QuoteCard = styled(FlexBox)({
  borderRadius: 10,
  border: "3px solid white",
  backgroundColor: "white",
  boxShadow: "0px 5px 25px 0px rgba(0, 0, 0, 0.2)",
});

const AvatarCircle = styled(FlexBox)({
  transform: "translateX(-50%)",
  borderColor: "#276EF1",
});

type Props = {
  name: string;
  avatar: string;
  role: string;
  text: string;
};

export default function QuoteItem({ name, avatar, role, text }: Props) {
  return (
    <FlexBox className="px-5">
      <QuoteCard className="relative flex-col items-start py-10 ps-16 pe-6">
        <AvatarCircle
          className="absolute left-0 top-5 border-2 border-solid rounded-full overflow-hidden"
          width={80}
          height={80}
        >
          <img src={avatar} />
        </AvatarCircle>
        <img
          className="absolute right-6 top-5 w-16"
          src="assets/img/icon-quote.png"
        />
        <Typography
          className="text-xl xl:text-2xl text-heading font-semibold mb-1"
          variant="h6"
        >
          {name}
        </Typography>
        <Typography
          className="text-sm xl:text-base text-[#2669E5] font-normal mb-4"
          variant="h6"
        >
          {role}
        </Typography>
        <Typography className="xl:text-xl">{text}</Typography>
      </QuoteCard>
    </FlexBox>
  );
}
