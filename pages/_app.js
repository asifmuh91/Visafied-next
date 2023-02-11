import "./style.css";
import { XyzTransition } from "@animxyz/react";
import React from "react";
import "@animxyz/core";
export default function MyApp({
  Component: Component,
  pageProps: pageProps
}) {
  React.useEffect(() => import("@lottiefiles/lottie-player"));
  return (
    <XyzTransition appear duration="auto">
      <div>
        <Component {...pageProps} />
      </div>
    </XyzTransition>);
}
