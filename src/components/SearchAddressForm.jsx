import { useRef } from 'react'
import { Form, Button } from 'react-bootstrap'
import { Autocomplete } from '@react-google-maps/api'

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
        <Form onSubmit={handleFormSubmit} className='searchaddressform'>
            <Form.Group controlId='address'>
                <Form.Label>Enter address or city to view nearby food places</Form.Label>
                <Autocomplete>
                    <Form.Control type='text' ref={addressRef} required />
                </Autocomplete>
            </Form.Group>
            <Button type='submit'>Goto</Button>
        </Form>
    )

}

export default SearchCityForm