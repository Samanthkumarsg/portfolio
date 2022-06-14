import React from 'react'
import '../styles/globals.css'
import Loading from './Components/Loading';
function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    // setTimeout(() => setLoading(true), 2000);
    setLoading(true);
  }, []);

  return (
    <React.Fragment>
      {loading ? (
        <React.Fragment>
          <Component {...pageProps} />
        </React.Fragment>
      ) : (
        <Loading />
      )}
    </React.Fragment>
  );

}

export default MyApp
