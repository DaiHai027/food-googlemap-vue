import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../firebase'

const CreateTipForm = () => {
    const { register, handleSubmit, errors, reset } = useForm()

    const onCreateTip = async (data) => {
            // making a firestore doc
        await addDoc(collection(db, 'tip'), {
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

        toast.success("A new Tip was created! Waiting for admin to approve!")
        reset()
    }
    return (
        <Form onSubmit={handleSubmit(onCreateTip)} noValidate>

            {/* Form for name */}
            <Form.Group>
                <Form.Label>Name</Form.Label>
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
                {errors.title && <div className="invalid">{errors.title.message}</div>}
            </Form.Group>

                {/* Form for adress */}
            <Form.Group>
            <Form.Label>Adress</Form.Label>
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
                {errors.adress && <div className="invalid">{errors.adress.message}</div>}
            </Form.Group>

                {/* Form for Cuisine */}
             <Form.Group>
            <Form.Label>Cuisine</Form.Label>
                <Form.Control
                {...register("cuisine", {
                    required: "A cuisine is required",
                })}
                placeholder="Cusine"
                type="text"
                />
                {errors.cuisine && <div className="invalid">{errors.cuisine.message}</div>}
                </Form.Group>

                {/* Form for Supply */}
                
                <Form.Group>
            <Form.Label>Supply</Form.Label>
                <Form.Select
                {...register("supply", {
                    required: "You must choose a supply is required",
                })}
                placeholder="Supply"
                type="text"
                />
                <option value="lunch">Lunch</option>
                <option value="afterWork">After Work</option>
                <option value="aLaCarte">À la carte</option>
                {errors.supply && <div className="invalid">{errors.supply.message}</div>}
            </Form.Group>  
                
                {/* Form for Phonenumber */}
            <Form.Group>
            <Form.Label>Phonenumber</Form.Label>
                <Form.Control
                {...register("phonenumber",)}
                placeholder="Phonenumber"
                type="number"
                />
            </Form.Group>

            {/* Form for Facebook */}
            <Form.Group>
            <Form.Label>Facebook</Form.Label>
                <Form.Control
                {...register("facebook",)}
                placeholder="Facebbok"
                type="text"
                />
            </Form.Group>

            {/* Form for Instagram */}
            <Form.Group>
            <Form.Label>Instagram</Form.Label>
                <Form.Control
                {...register("instagram",)}
                placeholder="instagram"
                type="text"
                />
            </Form.Group>

            {/* Form for Town */}
            <Form.Group>
            <Form.Label>Town</Form.Label>
                <Form.Control
                {...register("town", {
                    required: "A town is required",
                    minLength: {
                        value: 2,
                        message: "Must atlest be 2 charatcers"
                    }
                })}
                placeholder="Town"
                type="text"
                />
                {errors.town && <div className="invalid">{errors.town.message}</div>}
            </Form.Group>

            {/* Form for E-mail */}
            <Form.Group>
            <Form.Label>Email</Form.Label>
                <Form.Control
                {...register("email",)}
                placeholder="email"
                type="text"
                />
            </Form.Group>

            {/* Form for Website */}
            <Form.Group>
            <Form.Label>Website</Form.Label>
                <Form.Control
                {...register("website",)}
                placeholder="website"
                type="text"
                />
            </Form.Group>

            {/* Form for type */}
             <Form.Group>
            <Form.Label>Type</Form.Label>
                <Form.Select
                {...register("Type", {
                    required: "A Type is required",
                })}
                placeholder="Type"
                type="text"
                />
                <option value="cafe">Café</option>
                <option value="restaurang">Restaurang</option>
                <option value="fastFood">Fast Food</option>
                <option value="kiosk">Kiosk</option>
                <option value="foodtruck">Foodtruck</option>
                {errors.type && <div className="invalid">{errors.type.message}</div>}
            </Form.Group> 

            {/* Form for Description */}
            <Form.Group>
            <Form.Label>Description</Form.Label>
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
                />
                {errors.description && <div className="invalid">{errors.description.message}</div>}
            </Form.Group>
            
            <Button variant="success" type="submit">Create</Button>
        </Form>
    )
}

export default CreateTipForm