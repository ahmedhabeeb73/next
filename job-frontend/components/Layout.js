import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from './Header';
import Footer from './Footer';
import Showcase from './Showcase';
import stytes from '@/styles/Layout.module.css';

export default function Layout({ title, keywords, description, children }) {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
      </Head>
      <Header />
     {router.pathname=== '/' &&<Showcase/>}
      <div className={stytes.container}>{children}</div>
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: 'Dundung | Job Platform | Find the best job',
  description: 'Dundung Find the latest Jobs offer in germany',
  keywords: 'job,germany',
};
