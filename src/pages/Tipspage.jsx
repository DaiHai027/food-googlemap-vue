import useGetTips from '../hooks/useGettips'
import Container from 'react-bootstrap/Container'
import TipsList from '../components/TipsList'


const TipsPage = () => {
  
    const { data: tips, loading: isLoadingTips } = useGetTips()
  return (
    <Container>
        <h1>Suggestions</h1>

        <TipsList tips={tips} isLoading={isLoadingTips} />

    </Container>
  )
}

export default TipsPage