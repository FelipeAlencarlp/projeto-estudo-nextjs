import { Inter } from "next/font/google";
import CalcImc from "./calcimc/CalcImc";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className='flex w-full h-screen justify-start items-start'>
      <CalcImc />
    </div>
  );
}
