import axios from 'axios'

// Get google maps API ket from env file
const apiKey = import.meta.env.VITE_MAPS_API_KEY

/**
 *
 * Function to get coordinates from given address
 *
 * @param {string} address
 * @returns Object with latitude and longitude values
 */
const getLatAndLng = async (address) => {

    // Get data about given address from geocode API
    const res = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${apiKey}`)

    // Get coordinates from first result from geocode api
    const coordinates = res.data.results[0].geometry.location

    // Return coordinates
    return coordinates

}

/**
 *
 * Function to get directions guide from google between two places
 *
 * @param {Coords Object} origin
 * @param {Coords Object} destination
 * @returns href - link as a string
 */

const getDirectionsLink = (origin, destination) => {

    return `https://www.google.com/maps/dir/?api=1&origin=${origin.lat},${origin.lng}&destination=${destination.lat},${destination.lng}`

}

// Functions to export so they can be used by other components
const exports = {
    getLatAndLng,
    getDirectionsLink,
}

export default exports