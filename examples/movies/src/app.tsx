import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "~/assets/css/global.scss";

export default function App() {
  return (
    <Router
      root={props => (
        <>
          <Nav />
          <Suspense fallback={<div>Loading...</div>}>{props.children}</Suspense>
          <Footer />
        </>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
