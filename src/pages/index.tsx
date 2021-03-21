import * as React from 'react';
import { SocketIOProvider } from 'contexts/socket';
import Layout from 'components/UI/Layout'
import { Create as CreateRoom } from 'components/Room';

const IndexPage = () => {
  return (
    <SocketIOProvider url="http://localhost:8000/">
      <Layout>
        <CreateRoom />
      </Layout>
    </SocketIOProvider>

  )
}

export default IndexPage
