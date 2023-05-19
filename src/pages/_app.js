import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import "../styles/globals.scss"
import "../styles/app.scss"


function MyApp({ Component, pageProps }) {
  
  return (
    <>
     
     
        <Header />
        <Component {...pageProps} />
        <Footer />
   
   
    </>
  );
}

export default MyApp;
