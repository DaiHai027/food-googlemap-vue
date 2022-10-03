import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { doc, updateDoc} from 'firebase/firestore'
import { db } from '../firebase'

import React from 'react'
import PlacePage from '../pages/PlacePage'

const EditPlaceForm = ({ place, onPlaceUpdate}) => {
    const { register, handleSubmit, formState: { errors}} = useForm()

    const onUpdatePlace = async (data) => {
        await updateDoc(doc(db, 'places', place.id), {
            adress: data.adress,
            cuisine: data.cuisine,
            description: data.description,
            email: data.email,
            facebook: data.facebook,
            instagram: data.instagram,
            name: data.name,
            phonenumber: data.phonenumber,
            supply: data.supply,
            town: data.town,
            type: data.type,
            website: data.website,
        })

        toast.success("FoodPlace updated")
        onPlaceUpdate()
    }
  return (
    
    <Form onSubmit={handleSubmit(onUpdatePlace)} noValidate>

    {/* Form for name */}
    <Form.Group className='editPlaceForm' controlId='name'>
        <Form.Label><strong>Name</strong></Form.Label>
        <Form.Control
        {...register("name", {
            required: "A name is required",
            minLength: {
                value: 2,
                message: "Must atlest be 2 charatcers"
            }
        })}
        defaultValue={place.name}
        type="text"
        />
    </Form.Group>

        {/* Form for adress */}
    <Form.Group className='editPlaceForm' controlId='adress'>
    <Form.Label><strong>Adress</strong></Form.Label>
        <Form.Control
        {...register("adress", {
            required: "A adress is required",
            minLength: {
                value: 2,
                message: "Must atlest be 2 charatcers"
            }
        })}
        defaultValue={place.adress}
        type="text"
        />

    </Form.Group>

       {/* Form for Town */}
       <Form.Group className='editPlaceForm' controlId='town'>
    <Form.Label><strong>Town</strong></Form.Label>
        <Form.Control
        {...register("town", {
            required: "A town is required",
            minLength: {
                value: 2,
                message: "Must atlest be 2 charatcers"
            }
        })}
        defaultValue={place.town}
        type="text"
        />

    </Form.Group>

        {/* Form for Cuisine */}
     <Form.Group className='editPlaceForm' controlId='cuisine'>
    <Form.Label><strong>Cuisine</strong></Form.Label>
        <Form.Control
        {...register("cuisine", {
            required: "A cuisine is required",
        })}
        defaultValue={place.cuisine}
        type="text"
        />

        </Form.Group>

        {/* Form for Supply */}

        <Form.Group className='editPlaceForm' controlId='supply'>
    <Form.Label><strong>Supply</strong></Form.Label>
        <Form.Control
        {...register("supply", {
            required: "You must choose a supply",
        })}
        defaultValue={place.supply}
        type="text"
        />
    </Form.Group>

        {/* Form for Phonenumber */}
    <Form.Group className='editPlaceForm' controlId='phonenumber'>
    <Form.Label><strong>Phonenumber</strong></Form.Label>
        <Form.Control
        {...register("phonenumber",)}
        defaultValue={place.phonenumber}
        type="text"
        />
    </Form.Group>

    {/* Form for Facebook */}
    <Form.Group className='editPlaceForm' controlId='facebook'>
    <Form.Label><strong>Facebook</strong></Form.Label>
        <Form.Control
        {...register("facebook",)}
        defaultValue={place.facebook}
        type="text"
        />
    </Form.Group>

    {/* Form for Instagram */}
    <Form.Group className='editPlaceForm' controlId='instagram'>
    <Form.Label><strong>Instagram</strong></Form.Label>
        <Form.Control
        {...register("instagram",)}
        defaultValue={place.instagram}
        type="text"
        />
    </Form.Group>


    {/* Form for E-mail */}
    <Form.Group className='editPlaceForm' controlId='email'>
    <Form.Label><strong>Email</strong></Form.Label>
        <Form.Control
        {...register("email",)}
        defaultValue={place.email}
        type="text"
        />
    </Form.Group>

    {/* Form for Website */}
    <Form.Group className='editPlaceForm' controlId='website'>
    <Form.Label><strong>Website</strong></Form.Label>
        <Form.Control
        {...register("website",)}
        defaultValue={place.website}
        type="text"
        />
    </Form.Group>

    {/* Form for type */}
     <Form.Group className='editPlaceForm' controlId='type'>
    <Form.Label><strong>Type</strong></Form.Label>
        <Form.Control
        {...register("type", {
            required: "A Type is required",
        })}
        defaultValue={place.type}
        type="text"
        />

    </Form.Group>

    {/* Form for Description */}
    <Form.Group className='editPlaceForm' controlId='description'>
    <Form.Label><strong>Description</strong></Form.Label>
        <Form.Control
        {...register("description", {
            required: "A description is required",
            minLength: {
                value: 2,
                message: "Must atlest be 2 charatcers"
            }
        })}
        defaultValue={place.description}
        type="text"
        as="textarea"
        rows={3}
        />
    </Form.Group>

    <Button className="updatePlaceButton" variant="success" type="submit">Update</Button>
</Form>
  )
}

export default EditPlaceForm