import { Button } from '@chakra-ui/react'
import axios from 'axios'
import { useRouter } from 'next/router'
import Layout from 'components/UI/Layout'
import { useMutation } from 'react-query'

const IndexPage = () => {
  const router = useRouter();
  const create = useMutation((creator: string) => {
    return axios.post("http://localhost:8000/rooms", { creator })
  })
  async function onCreate() {
    try {
      const { data } = await create.mutateAsync("martin22");
      router.push(`/room/${data?.id}`)
    } catch(e) {
      console.log(e)
    }
  }
  return (
    <Layout>
      <Button
        colorScheme="blue"
        marginTop="1rem"
        as="a" 
        onClick={onCreate}
        isLoading={create.isLoading}
      >
        Crear Partida
      </Button>
    </Layout>
  )
}

export default IndexPage
