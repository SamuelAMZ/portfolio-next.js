import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <div className="max-w-full">
      <Head>
        <title>Sam - Home</title>
        <meta name="description" content="SamuelAmz Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Header />
        <Hero />
        <About />
        <Skills />
        <Footer />
      </div>
    </div>
  );
}
