import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="max-w-full">
      <Head>
        <title>Home</title>
        <meta name="description" content="SamuelAmz Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Header />
        <Footer />
      </div>
    </div>
  );
}
