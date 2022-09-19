import axios from 'axios'

axios.defaults.baseURL = 'https://maps.googleapis.com/maps/api'

const apiKey = import.meta.env.VITE_MAPS_API_KEY

const getLatAndLong = async () => {

    // Stuff to be done

}

const exports = {
    getLatAndLong
}

export default exports