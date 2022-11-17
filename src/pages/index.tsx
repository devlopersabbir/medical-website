import React from "react";
import { NextPage } from "next";
import Topbar from "../components/Topbar/Topbar";
import Header from "../components/Header/Header";
import Head from "next/head";
import Hero from "../components/HomePage/HeroSection/Hero";
import Layout from "../components/Layout";
import Welcome from "../components/HomePage/Welcome/Welcome";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Medical - template 1</title>
      </Head>
      <Topbar />
      <Header />

      <Hero />
      <Layout>
        <Welcome />
      </Layout>
    </>
  );
};

export default Home;
