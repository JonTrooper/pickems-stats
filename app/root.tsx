import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import type { LinksFunction, MetaFunction } from "@remix-run/node";
import stylesheet from "~/tailwind.css?url";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
  { rel: "stylesheet", href: "/fonts/inter/inter.css" },
];

export const meta: MetaFunction = () => {
  return [
    { title: "2024 Pick'Ems Tournament 🏆" },
    {
      name: "description",
      content: "CS2 Copenhagen 2024 PickEms Tournament Stats",
    },
    {
      property: "og:title",
      content: "2024 Pick'Ems Tournament",
    },
    {
      property: "og:image",
      content: "https://pickems-tournament.vercel.app/img/stats_preview.png",
    },
    {
      property: "og:description",
      content: "CS2: Copenhagen Major 2024 - PickEms Tournament Stats",
    },
  ];
};

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="antialiased">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <svg
          className="pointer-events-none fixed isolate z-50 opacity-35 mix-blend-soft-light"
          width="100%"
          height="100%"
        >
          <defs>
            <filter
              id="MyFilter"
              filterUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="100%"
              height="100%"
            >
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.80"
                numOctaves="4"
                stitchTiles="stitch"
              />
            </filter>
          </defs>
          <use filter="url(#MyFilter)" x="0" y="0" />
        </svg>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
