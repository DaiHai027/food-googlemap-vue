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
          <hr />
          <p><strong>Adress: </strong>{place.adress}</p>
          <p><strong>Town: </strong>{place.town}</p>
          <p><strong>Type: </strong>{place.type}</p>
          <p><strong>Cuisine: </strong>{place.cuisine}</p>
          <p><strong>Supply: </strong>{place.supply}</p>
          <p><strong>Facebook: </strong>{place.facebook}</p>
          <p><strong>Website: </strong>{place.website}</p>
          <p><strong>Instagram: </strong>{place.instagram}</p>
          <p><strong>Phonenumber: </strong>{place.phonenumber}</p>
          <p><strong>E-mail: </strong>{place.email}</p>
          <p><strong>Description: </strong>{place.description}</p>
          <hr />

          
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