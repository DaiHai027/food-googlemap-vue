import { toast } from 'react-toastify'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../firebase'
// bootstrap
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
// hooks
import { useForm } from 'react-hook-form'
// API
import mapsAPI from '../services/mapsAPI'

const CreatePlaceForm = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm()


    const onCreatePlace = async (data) => {
        // making a firestore doc

        await addDoc(collection(db, 'places'), {
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
            coords: await mapsAPI.getLatAndLng(data.adress + data.town)
        })

        toast.success('A foodplace waas created!', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
        reset()


    }
    return (
        <Form onSubmit={handleSubmit(onCreatePlace)} noValidate>

            {/* Form for name */}
            <Form.Group className='placeFormG' controlId="name">
                <Form.Label><strong>Name</strong></Form.Label>
                <Form.Control
                    {...register("name", {
                        required: "A name is required",
                        minLength: {
                            value: 2,
                            message: "Must atlest be 2 charatcers"
                        }
                    })}
                    placeholder="Name"
                    type="text"
                />

                {errors.name && <div className="invalid">{errors.name.message}</div>}

            </Form.Group>

            {/* Form for adress */}
            <Form.Group className='placeFormG' controlId='adress'>
                <Form.Label><strong>Adress</strong></Form.Label>
                <Form.Control
                    {...register("adress", {
                        required: "A adress is required",
                        minLength: {
                            value: 2,
                            message: "Must atlest be 2 charatcers"
                        }
                    })}
                    placeholder="Adress"
                    type="text"
                />
                {errors.adress && <div className='invalid'>{errors.message}</div>}
            </Form.Group>

            {/* Form for Town */}
            <Form.Group className='placeFormG' controlId='town'>
                <Form.Label><strong>Town</strong></Form.Label>
                <Form.Control
                    {...register("town", {
                        required: "A town is required",
                        minLength: {
                            value: 1,
                            message: "Must atlest be 1 charatcers"
                        }
                    })}
                    placeholder="Town"
                    type="text"
                />
                {errors.town && <div className='invalid'>{errors.message}</div>}
            </Form.Group>

            {/* Form for Cuisine */}
            <Form.Group className='placeFormG' controlId='cuisine'>
                <Form.Label><strong>Cuisine</strong></Form.Label>
                <Form.Control
                    {...register("cuisine", {
                        required: "A cuisine is required",
                    })}
                    placeholder="Cusine"
                    type="text"
                />
                {errors.adress && <div className="invalid">{errors.adress.message}</div>}
            </Form.Group>

            {/* Form for Supply */}

            <Form.Group className='placeFormG' controlId='supply'>
                <Form.Label><strong>Supply</strong></Form.Label>
                <Form.Select
                {...register("supply", {
                    required: "A town is required",
                    minLength: {
                        value: 2,
                        message: "Must atlest be 2 charatcers"
                    }
                })}
                placeholder="Town"
                type="text"
                >
                    <option value="Lunch">Lunch</option>
                    <option value="After Work">After Work</option>
                    <option value="A la Carte">A la carte</option>
                </Form.Select>
                {errors.town && <div className="invalid">{errors.town.message}</div>}
            </Form.Group>

            {/* Form for type */}
            <Form.Group className='placeFormG' controlId='type'>
                <Form.Label><strong>Type</strong></Form.Label>
                <Form.Select
                    {...register("type", {
                        required: "A Type is required",
                    })}
                    placeholder="Type"
                    type="text"
                >
                        <option value="Café">Café</option>
                        <option value="Restaurant">Restaurant</option>
                        <option value="Fast food">Fast food</option>
                        <option value="Grill">Grill</option>
                        <option value="Foodtruck">Foodtruck</option>
                </Form.Select>
                {errors.type && <div className="invalid">{errors.type.message}</div>}
            </Form.Group>

            {/* Form for Description */}
            <Form.Group className='placeFormG' controlId='description'>
                <Form.Label><strong>Description</strong></Form.Label>
                <Form.Control
                    {...register("description", {
                        required: "A description is required",
                        minLength: {
                            value: 2,
                            message: "Must atlest be 2 charatcers"
                        }
                    })}
                    placeholder="Description"
                    type="text"
                    as="textarea"
                    rows={3}
                />
                {errors.description && <div className="invalid">{errors.description.message}</div>}
            </Form.Group>

            {/* Form for Phonenumber */}
            <Form.Group className='placeFormG' controlId='phonenumber'>
            <Form.Label><strong>Phonenumber</strong></Form.Label>
                <Form.Control
                    {...register("phonenumber",)}
                    placeholder="Phonenumber"
                    type="text"
                />
            </Form.Group>

            {/* Form for Facebook */}
            <Form.Group className='placeFormG' controlId='facebook'>
            <Form.Label><strong>Facebook</strong></Form.Label>
                <Form.Control
                    {...register("facebook",)}
                    placeholder="Facebbok"
                    type="text"
                />
            </Form.Group>

            {/* Form for Instagram */}
            <Form.Group className='placeFormG' controlId='instagram'>
            <Form.Label><strong>Instagram</strong></Form.Label>
                <Form.Control
                    {...register("instagram",)}
                    placeholder="instagram"
                    type="text"
                />
            </Form.Group>


            {/* Form for E-mail */}
            <Form.Group className='placeFormG' controlId='email'>
            <Form.Label><strong>Email</strong></Form.Label>
                <Form.Control
                    {...register("email",)}
                    placeholder="email"
                    type="text"
                />
            </Form.Group>

            {/* Form for Website */}
            <Form.Group className='placeFormG' controlId='website'>
            <Form.Label><strong>Website</strong></Form.Label>
                <Form.Control
                    {...register("website",)}
                    placeholder="website"
                    type="text"
                />
            </Form.Group>

            <Button className='btn-color my-3' type="submit">Create</Button>

        </Form>
    )
}

export default CreatePlaceForm