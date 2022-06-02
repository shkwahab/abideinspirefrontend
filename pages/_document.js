import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head >
      <meta name="google-site-verification" content="-50IMhLBITA2hpOBi_Sm8OycJwIK1M6_BJxnCd-3kgc" />
       <link rel="android-chrome-192x192.png" sizes="192x192" href="/favicon/android-chrome-192x192.png" />
        <link rel="android-chrome-512x512.png" sizes="512x512" href="/favicon/android-chrome-512x512.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" type="image/x-icon" />
          </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
