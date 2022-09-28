import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import { useParams } from 'react-router-dom'
import EditPlaceForm from '../components/editPlaceForm'
import useGetPlace from '../hooks/useGetPlace'


const PlacePage = () => {
  const [showEditForm, setShowEditForm] = useState(false)
  const { id } = useParams()
  const { data: place, loading } = useGetPlace(id)
  

  const onPlaceUpdated = () => {
    setShowEditForm(false)
  }

  return (
    <Container className="py-3">

      {loading && <p>Loading ....</p>}

      {!loading && !place && <p>That place dose not exist... It might have been deleted...</p>}

      {!loading && place && (
        <>
          <h1>{place.name}</h1>

          <p>Adress:{place.adress}</p>
          <p>Town:{place.town}</p>
          <p>Type:{place.type}</p>
          <p>Cuisine:{place.cuisine}</p>
          <p>Supply:{place.supply}</p>
          <p>Facebook:{place.facebook}</p>
          <p>Website:{place.website}</p>
          <p>Instagram:{place.instagram}</p>
          <p>Phonenumber:{place.phonenumber}</p>
          <p>E-mail:{place.email}</p>
          <p>Description{place.description}</p>

          
            <Button variant="warning" onClick={() => setShowEditForm(!showEditForm)}>
              {showEditForm ? 'Cancel Edit' : 'Edit'}
            </Button>

            {showEditForm && <>
                <hr className="my-4"/>

                <EditPlaceForm onPlaceUpdate={onPlaceUpdated} place={place} />
            </>}
          
        </>
      )}

    </Container>
  )
}

export default PlacePage