import { useRef } from 'react'
import { Form, Button } from 'react-bootstrap'

const SearchCityForm = ({onSubmit}) => {

    const addressRef = useRef()

    const handleFormSubmit = (e) => {

        e.preventDefault()

        if (!addressRef.current.value) {
            return
        }

        onSubmit(addressRef.current.value)

    }

    return (
        <Form onSubmit={handleFormSubmit}>
            <Form.Group controlId='address'>
                <Form.Label>Enter address or city to view nearby food places</Form.Label>
                <Form.Control type='text' ref={addressRef} required />
            </Form.Group>
            <Button type='submit'>Goto</Button>
        </Form>
    )

}

export default SearchCityForm