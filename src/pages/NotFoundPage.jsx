// bootstrap
import Container from 'react-bootstrap/Container'
// image
import BackgroundImage from '../assets/images/EmptyPlate.jpg'

const NotFoundPage = () => {
  return (
    <Container>
        <div    
            style={{
                backgroundImage: `url(${BackgroundImage})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                height: '100vh',
                textAlign: 'center',
            }}>
            <h1 
                className='m-5'
                style={{
                    
                    position: 'absolute',
                    top: '10%',
                    left: '5%',
                }}
            >
                    Sorry, that page could not be found</h1>
        </div>
    </Container>
  )
}

export default NotFoundPage
