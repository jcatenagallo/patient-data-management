import NextDocument, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import React, { Fragment } from 'react';
import { ServerStyleSheet } from 'styled-components';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link href="/apple-touch-icon.png" rel="apple-touch-icon" sizes="120x120" />
        <link href="/favicon-32x32.png" rel="icon" sizes="32x32" type="image/png" />
        <link href="/favicon-16x16.png" rel="icon" sizes="16x16" type="image/png" />
        <link href="/site.webmanifest" rel="manifest" />
        <meta content="#da532c" name="msapplication-TileColor" />
        <meta content="#ffffff" name="theme-color" />
        <meta key="meta-charset" charSet="utf-8" />
        <meta
          content="26p3YKo-ggcWUkxFijeTIa7wjcVbRV7TcH3_UNpmLKc"
          name="google-site-verification"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

Document.getInitialProps = async (ctx: DocumentContext) => {
  const sheet = new ServerStyleSheet();
  const originalRenderPage = ctx.renderPage;

  try {
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
      });
    const initialProps = await NextDocument.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: [
        <Fragment key="styles">
          {initialProps.styles}
          {sheet.getStyleElement()}
        </Fragment>,
      ],
    };
  } finally {
    sheet.seal();
  }
};
