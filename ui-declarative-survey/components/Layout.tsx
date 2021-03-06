import Head from "next/head";
import React, { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <>
    <Head>
      {/* <title>{title}</title> */}
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="/style.css" />

      <title>
        UI declarative Survey: Ant-designer, Material-UI, Chackra-ui,
        Styled-system, Semantic-UI-React, React-Bootstrap
      </title>

      <meta
        name="twitter:image:src"
        content="https://ui-declarative-survey.vercel.app/68747470733a2f2f6d6174657269616c2d75692e636f6d2f7374617469632f6c6f676f2e737667.png"
      />
      <meta name="twitter:site" content="site" />
      <meta
        name="twitter:title"
        content="UI declarative Survey: Ant-designer, Material-UI, Chackra-ui, Styled-system, Semantic-UI-React, React-Bootstrap"
      />
      <meta
        name="twitter:description"
        content="Esta é uma pesquisa que avalia de forma sintética a interface de pacotes que usam UI declarative."
      />
      <meta
        name="description"
        content="Esta é uma pesquisa que avalia de forma sintética a interface de pacotes que usam UI declarative."
      />
      <meta
        property="og:image"
        content="https://ui-declarative-survey.vercel.app/68747470733a2f2f6d6174657269616c2d75692e636f6d2f7374617469632f6c6f676f2e737667.png"
      />
      <meta property="og:site_name" content="ui-declarative-survey" />
      <meta property="og:type" content="site" />
      <meta
        property="og:title"
        content="UI declarative Survey: Ant-designer, Material-UI, Chackra-ui, Styled-system, Semantic-UI-React, React-Bootstrap"
      />
      <meta
        property="og:url"
        content="https://ui-declarative-survey.vercel.app/"
      />
      <meta
        property="og:description"
        content="Esta é uma pesquisa que avalia de forma sintética a interface de pacotes que usam UI declarative."
      />
    </Head>
    <main className="main">
      {children}
      <br />
      <br />
      <hr />
      <footer>
        <span>
          &copy; 2021 <strong> - Taffarel Xavier</strong>
        </span>
        <ul className="network-media">
          <li>
            <a href="https://github.com/TaffarelXavier" target="_blank">
              <svg
                className="octicon octicon-mark-github v-align-middle"
                height="40"
                viewBox="0 0 16 16"
                version="1.1"
                width="40"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                ></path>
              </svg>
            </a>
          </li>
          <li style={{ marginLeft: 30 }}>
            <a
              href="https://pt.stackoverflow.com/users/66026/taffarel-xavier"
              target="_blank"
            >
              <img
                src="/stack-overflow-icon.svg"
                width={40}
                height={40}
                alt=""
              />
            </a>
          </li>
        </ul>
      </footer>
    </main>
  </>
);

export default Layout;
