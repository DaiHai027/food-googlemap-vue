import Container from "react-bootstrap/Container"
import CreateTipForm from "../components/CreateTipForm"
import TipList from "../components/TipList"
import useGettips from "../hooks/useGettips"

const AddTipsPage = () => {

        const { data: tips, loading } = useGettips()


      return (
          <Container className="py-3">

              <div className="d-flex justify-content-between align-items-start mb-3">
                  <h1>Add a new place</h1>
              </div>

              <CreateTipForm />

              <hr className="my-4" />

              {loading && (<p>Loading ...</p>)}

              {loading && <TipList tips={tips} />}

</Container>
  )
}

export default AddTipsPage