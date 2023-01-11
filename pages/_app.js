import Head from "next/head";
import { useEffect, useState } from "react";
import { stickyNav } from "../src/utils";
import "../styles/globals.css";
import { NotificationsProvider } from "@mantine/notifications";
import { MantineProvider } from "@mantine/core";
import { init } from "@socialgouv/matomo-next";
import {AuthProvider} from '../context/AuthProvider'
import FloatingWhatsApp from 'react-floating-whatsapp'
const MATOMO_URL = "https://analytics.aivinya.com";
const MATOMO_SITE_ID = "4";
import Link from "next/link";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    window.addEventListener("scroll", stickyNav);
    
  });

  useEffect(() => {
    init({ url: MATOMO_URL, siteId: MATOMO_SITE_ID });
    // tiledesk
    function initTiledesk() {
      console.log('initTiledesk');

      window.tiledeskSettings = {
        projectid: "635a41fc85de9f001ae6dcea"
      };
      (function (d, s, id) {
        var js,
          fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src = 'https://widget.tiledesk.com/v4/launch.js';
        fjs.parentNode.insertBefore(js, fjs);
      })(document, 'script', 'tiledesk-jssdk');
    }

    initTiledesk();
  }, []);

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
          content="https://services.openthrone.io/img/logo-4.png"
        />
        <meta property="og:type" content="website" />

        <meta property="og:title" content="BlockBridge" />

        <meta
          property="og:description"
          content="Build Modern Software Development Company"
        />

        <meta
          property="og:image"
          content="https://services.openthrone.io/img/logo-4.png"
        />
        <meta property="og:url" content="https://services.openthrone.io" />

        <meta property="og:site_name" content="blockbridge.in" />

        <meta property="instagram:card" content="summary" />
        <meta
          property="instagram:site"
          content="https://www.instagram.com/openthrone/"
        />

        <meta property="instagram:title" content="BlockBridge " />

        <meta
          property="instagram:description"
          content="Build Modern Software Development Company"
        />

        <meta
          property="instagram:image"
          content="https://services.openthrone.io/img/logo-4.png"
        />
        <meta
          property="instagram:url"
          content="https://instagram.com/itsopenthrone"
        />
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
