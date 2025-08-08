import { Fragment, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Head from 'next/head';

import '../styles/globals.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [locale, setLocale] = useState('en');
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (window?.clarity) {
        window.clarity('consent');
      }
      import('mixpanel-browser').then((mixpanel) => {
        mixpanel.init(process.env.NEXT_PUBLIC_MIXPANEL_TOKEN, {
          track_pageview: true,
        });

        const handleRouteChange = (url) => {
          mixpanel.track('Page View', {
            url,
            ...router.query,
          });
        };

        router.events.on('routeChangeComplete', handleRouteChange);

        return () => {
          router.events.off('routeChangeComplete', handleRouteChange);
        };
      });
    }
  }, [router.events, router.query]);

  useEffect(() => {
    setLoaded(true);
    const currentHost = window.location.host;
    if (currentHost === 'es.inspektlabs.com') {
      setLocale('es');
    } else if (currentHost === 'pt.inspektlabs.com') {
      setLocale('pt');
    } else {
      setLocale('en');
    }
  }, []);

  return (
    <Fragment>
      <Head>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        {loaded && (
          <>
            {locale === 'en' && (
              <script
                async
                defer
                src='https://www.googletagmanager.com/gtag/js?id=G-70H5TT7WHG'
              ></script>
            )}
            {locale === 'en' && (
              <script
                dangerouslySetInnerHTML={{
                  __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-70H5TT7WHG', { page_path: window.location.pathname });
            `,
                }}
              />
            )}

            {locale === 'es' && (
              <script
                async
                defer
                src='https://www.googletagmanager.com/gtag/js?id=G-DVJC13GTZF'
              ></script>
            )}
            {locale === 'es' && (
              <script
                dangerouslySetInnerHTML={{
                  __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-DVJC13GTZF', { page_path: window.location.pathname });
            `,
                }}
              />
            )}

            {locale === 'pt' && (
              <script
                async
                defer
                src='https://www.googletagmanager.com/gtag/js?id=G-0BHRHJQHT3'
              ></script>
            )}
            {locale === 'pt' && (
              <script
                dangerouslySetInnerHTML={{
                  __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-0BHRHJQHT3', { page_path: window.location.pathname });
            `,
                }}
              />
            )}

            <script
              dangerouslySetInnerHTML={{
                __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.defer=true;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "icwime9tqa");
            `,
              }}
            />
          </>
        )}
        {locale === 'en' && <meta name="google-site-verification" content="Ar2pOQrCIDG1ORdwo4cU864q2zpB1hHHvXI6HzQJazc" />}
      </Head>

      <Navbar locale={locale} />
      <Component {...pageProps} locale={locale} />
      <Footer locale={locale} />
    </Fragment>
  );
}

export default MyApp;
