// pages/_app.js
import '../app/globals.css'; // Adjust the path if your CSS file is located somewhere else

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
