import { SocketIOProvider } from 'contexts/socket';
import Layout from 'components/UI/Layout'
import Room from 'components/modules/Room';

const RoomPage = (props) => {
	console.log(props);
  return (
    <SocketIOProvider url="http://localhost:8000/">
      <Layout>
        <Room />
      </Layout>
    </SocketIOProvider>
  )
}

export default RoomPage
