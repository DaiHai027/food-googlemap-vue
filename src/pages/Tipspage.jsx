import useGetTips from '../hooks/useGettips'
import Container from 'react-bootstrap/Container'


const TipsPage = () => {

    const { data: tips, loading: isLoadingTips } = useGetTips()
  return (
    <Container>
        <h1>Tips people have sent</h1>

        <TipList tips={tips} isLoading={isLoadingTips} />

    </Container>
  )
}

export default TipsPage