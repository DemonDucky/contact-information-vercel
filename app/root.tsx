import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import styles from "./styles/app.css"
import fonts from "./styles/font.css"

export function links() {
  return [{ rel: "stylesheet", href: styles }, {rel: "stylesheet", href: fonts}]
}

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Luong Tuan Anh",
  description: "Mobile portfolio of Luong Tuan Anh",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
