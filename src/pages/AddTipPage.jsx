import Container from "react-bootstrap/Container"
import CreateTipForm from "../components/CreateTipForm"

const AddTipPage = () => {
  return (
    <Container className="py-3">

    <div className="d-flex justify-content-between align-items-start mb-3">
        <h1>Add a new place</h1>
    </div>

        <CreateTipForm />

</Container>
  )
}

export default AddTipPage