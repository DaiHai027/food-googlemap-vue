import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import CreatePlaceForm from '../components/CreatePlaceForm'

const AddPlacePage = () => {

  return (
    <Container className="py-3">

        <div className="d-flex justify-content-between align-items-start mb-3">
            <h1>Add a new place</h1>
        </div>

            <CreatePlaceForm />

    </Container>
  )
}

export default AddPlacePage
