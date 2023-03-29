import Head from 'next/head';
import React from 'react';

const Layout = ({ children, pageData }) => {
  return (
    <>
      <Head>
        <title>{pageData.data.meta_title ? `${pageData.data.meta_title}` : 'AC'}</title>
        <meta name="description" content={pageData.data.meta_description ? `${pageData.data.meta_description}` : 'AC'} />
        <meta property="og:image" content={pageData.data.meta_img.url ? `${pageData.data.meta_img.url}` : 'AC'} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col justify-between">
        <main className="content">{children}</main>
      </div>
    </>
  );
};

export default Layout;
