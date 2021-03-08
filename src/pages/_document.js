import Document, { Html, Main, Head, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

// TODO: Convert to Typescript, .tsx
// Find a way to extends the Document props to accept styleTags custom const

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    // Step 1: Create an instance of ServerStyleSheet
    const sheet = new ServerStyleSheet();

    // Step 2: Retrieve styles from components in the page
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />),
    );

    // Step 3: Extract the styles as <style> tags
    const styleTags = sheet.getStyleElement();

    // Step 4: Pass styleTags as a prop
    return { ...page, styleTags };
  }

  render() {
    return (
      <Html>
        <Head>
          {/* Open Graph */}
          <meta
            property="og:url"
            content="https://nlw-moveit-two.vercel.app/"
            key="ogurl"
          />
          <meta property="og:type" content="website " key="ogtype" />
          <meta property="og:image" content="/screenshot.png" key="ogimage" />
          <meta property="og:site_name" content="Move.it" key="ogsitename" />
          <meta
            property="og:title"
            content="Move-it - Put yourself in moviment."
            key="ogtitle"
          />
          <meta
            property="og:description"
            content="How about pause the work and put yourself in moviment?"
            key="ogdesc"
          />
          <meta property="og:locale" content="pt_BR" key="oglocale" />
          <link rel="shortcut icon" href="/favicon.png" type="image/png" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap"
            rel="stylesheet"
          />
          {/* Step 5: Output the styles in the head  */}
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
