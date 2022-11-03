import { useEffect, useState } from 'react'

import Layout from './Layout'
import LoadingScreen from '@Components/Loader'

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
  }, [])

  return (
    <>
      {loading ? (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      ) : (
        <LoadingScreen />
      )}
    </>
  )
}

export default MyApp
