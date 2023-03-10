import Head from "next/head";
import { useEffect, useState } from "react";
import { stickyNav } from "../src/utils";
import "../styles/globals.css";
import { NotificationsProvider } from "@mantine/notifications";
import { MantineProvider } from "@mantine/core";
import {AuthProvider} from '../context/AuthProvider'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    window.addEventListener("scroll", stickyNav);
  });

  

  return (
    <>
      
      <Head>
        <title> Welcome - BlockBridge - Build Modern Software </title>
        <link rel="shortcut icon" href="/img/favicon.ico" type="img/png" />
        <meta name="title" content="BlockBridge Build Modern Software" />
        <meta
          name="description"
          content="One-Stop Solution for taking your Business Onlinefromwebsites to NFTs"
        />
        <meta
          name="keywords"
          content="blockbridge, nfts, services, websites, website development, chatbots, chat-botswebsite-development, wordpress, shopfiy, ecommerce"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="language" content="English" />
        <meta name="author" content="BlockBridge" />
        <meta itemProp="name" content="blockbridge.in" />
        <meta name="application-name" content="blockbridge.in" />

        <meta
          itemProp="description"
          content="Modern Software Development"
        />
        <meta
          itemProp="image"
          content="https://blockbridge.in/img/logo-4.png"
        />
        <meta property="og:type" content="website" />

        <meta property="og:title" content="BlockBridge" />

        <meta
          property="og:description"
          content="Build Modern Software Development Company"
        />

        <meta
          property="og:image"
          content="https://blockbridge.in/img/logo-4.png"
        />
        <meta property="og:url" content="https://blockbridge.in" />

        <meta property="og:site_name" content="blockbridge.in" />

        
        <link rel="canonical" href="https://blockbridge.in" />
        <link
          rel="alternate"
          href="https://blockbridge.in"
          hrefLang="x-default"
        />
        <script
          src="https://kit.fontawesome.com/5a6279ad52.js"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <MantineProvider>
        <NotificationsProvider position="bottom-left">
        <AuthProvider>
            <Component {...pageProps} />
          </AuthProvider>
        </NotificationsProvider>
      </MantineProvider>
    </>
  );
}

export default MyApp;
