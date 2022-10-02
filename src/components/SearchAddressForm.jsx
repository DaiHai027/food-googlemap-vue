import { useRef } from 'react'
import { Form, Button } from 'react-bootstrap'
import { Autocomplete } from '@react-google-maps/api'

/**
 *
 * Component to render a search form for google maps addresses
 *
 */
const SearchCityForm = ({onSubmit}) => {

    // Reference element for input element
    const addressRef = useRef()

    // Function to handle form before beeing fully submitted
    const handleFormSubmit = (e) => {

        // Stop default form behaviour
        e.preventDefault()

        // If input field is empty, return from function
        if (!addressRef.current.value) {
            return
        }

        // Call function provided though prop, and give it input field value as parameter
        onSubmit(addressRef.current.value)

        addressRef.current.value = ''

    }

    return (
        <Form onSubmit={handleFormSubmit} className='searchaddressform'>
            <Form.Group controlId='address'>
                <Form.Label>Enter city to view nearby food places</Form.Label>
                {/* Use Autocomplete from @react-google-maps/api to give user search suggestions */}
                <Autocomplete>
                    <Form.Control type='text' ref={addressRef} required />
                </Autocomplete>
            </Form.Group>
            <Button className='btn-color' type='submit'>Search</Button>
        </Form>
    )

}

export default SearchCityForm