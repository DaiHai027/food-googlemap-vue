import axios from 'axios'

//axios.defaults.baseURL = 'https://maps.googleapis.com/maps/api'

const apiKey = import.meta.env.VITE_MAPS_API_KEY

const getLatAndLng = async (city) => {

    // Stuff to be done

    const res = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=${apiKey}`)

    const resultData = res.data.results[0].geometry.location

    return resultData

}

const exports = {
    getLatAndLng
}

export default exports