import useGetTips from '../hooks/useGettips'
import Container from 'react-bootstrap/Container'
import TipsList from '../components/TipsList'


const TipsPage = () => {
  
    const { data: tips, loading: isLoadingTips } = useGetTips()
  return (
    <Container>
        <h1 className='tipsTitle'>Suggestions</h1>
        <hr />

        <TipsList tips={tips} isLoading={isLoadingTips} />

    </Container>
  )
}

export default TipsPage