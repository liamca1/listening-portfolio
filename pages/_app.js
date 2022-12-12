import { ThemeProvider } from "next-themes";
import "../styles/globals.css";
import Layout from "../components/layout/Layout";
import { useTheme } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="dark">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
