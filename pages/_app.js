import { useEffect, useState } from 'react'

import Layout from './Layout'
import LoadingScreen from '@Components/loader'

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false)
  console.log("🚀 ~ file: _app.js ~ line 8 ~ MyApp ~ loading", loading)

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
