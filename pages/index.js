import Head from 'next/head'
import React from 'react'
import HomeComponent from '../components/Home/HomeComponent'
import Layout from '../components/Layout/Layout'

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Twitch</title>
        <meta name="twitch" content="twitch clone" />
      </Head>

      <Layout>
        <HomeComponent />
      </Layout>
    </React.Fragment>
  )
}
