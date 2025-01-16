import Image from "next/image";
// import new_landing_image from '@/app/assets/image2.jpg'
// import landing_image from "@/app/assets/replacement.png"
import { Urbanist } from "next/font/google";
import { Roboto } from "next/font/google";
import Link from "next/link";
// import Logo from "@/app/assets/sui-logo.png"
import TelegramIcon from '@mui/icons-material/Telegram';
import XIcon from '@mui/icons-material/X';
import { FadeInFromTop } from "../components/FadeInFromTop";
import { FadeInFromBottom } from "../components/FadeInFromBottom";
import Homepage from "@/components/Homepage/Homepage";

const urbanist = Urbanist({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function Home() {
  return (
    // <FadeInFromBottom>
      <Homepage />
    // </FadeInFromBottom>
  );
}
