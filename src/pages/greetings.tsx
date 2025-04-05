import Head from "next/head";
import Md from "../components/Md";
import { GreetingsPageContent } from "../utils";
import MainLayout from "../components/MainLayout";
import Link from "next/link";

const Greetings = () => {
  return (
    <MainLayout>
      <Head>
        <title>Xush kelibsiz! || SXNPAII's Universe 🌌</title>
      </Head>
      <main className="flex flex-col items-center h-[75vh] justify-center gap-y-4">
      <Md markdown={GreetingsPageContent} className="text-white text-2xl text-center flex flex-col justify-center" />


      <Link href={"/"} className="btn inline-block font-bold">はい</Link>
      </main>



    </MainLayout>
  );
};

export default Greetings;
