"use client";
// import { useTranslations } from 'next-intl';
import Link from "next/link";
import { usePathname } from "next/navigation";
import Head from "next/head";
import { NextSeo } from "next-seo";
import { DefaultSeo } from "next-seo";
import Image from "next/image";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// Assets
import "@/app/[locale]/scss/globals.scss";
import AdvertisementFourFull from "../../../public/advertisement/advertisement-four-full.png";
import AdvertisementFourFullMobile from "../../../public/advertisement/air-pods-pro-addvertisment.png";

// Components


export default function Home() {
  // const t = useTranslations('IndexPage');
  // const pathname = usePathname();
  // console.log('pathname', pathname);

  return (
    <main className="flex flex-col items-center min-h-screen">
      {/* SEO Head */}
      <Head>
        <NextSeo
          title="Find Online Shopping"
          description="online shopping"
          canonical="https://www.find.ie/"
          openGraph={{
            url: "https://www.find.ie/",
            title: "Find Online Shopping",
            description: "online shopping",
            images: [{ url: "https://find.com/images/find-logo.png" }],
          }}
        />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/* Note */}
      <div className="mx-auto flex flex-col min-h-screen justify-center items-center">
      <h1 className="font-bold">Note</h1>
      <p className="m-0">Please move to User Account form the Navbar to work on the</p>
      <p>http://localhost:3000/en/my_account</p>
      </div>
    </main>
  );
}
