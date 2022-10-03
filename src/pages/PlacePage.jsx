import { useState } from 'react'
import { useParams } from 'react-router-dom'
// components
import EditPlaceForm from '../components/editPlaceForm'
// hooks
import useGetPlace from '../hooks/useGetPlace'
// bootstrap
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'


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
          {place.facebook? <p><strong>Facebook: </strong>{place.facebook}</p>  :null}
          {place.website? <p><strong>Website: </strong>{place.website}</p>  :null}
          {place.instagram? <p><strong>Instagram: </strong>{place.instagram}</p>  :null}
          {place.phonenumber? <p><strong>Phonenumber: </strong>{place.phonenumber}</p>  :null}
          {place.email? <p><strong>E-mail: </strong>{place.email}</p>  :null}
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