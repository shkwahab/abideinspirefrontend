import PFooter from "../components/PFooter";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import SFooter from "../components/SFooter";



function MyApp({ Component, pageProps }) {
 
  return (
    <>
      <Navbar
        sitetitle="Abide Inspire"
        home="Home"
        blog="Blog"
        about="About Us"
        contact="Contact Us"
      />
      <Component {...pageProps} />
      <SFooter sitetitle="Abide Inspire" />
      <PFooter sitetitle="Abide Inspire" />
    </>
  );
}


export default MyApp;
