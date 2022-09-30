import useStreamCollection from "./useStreamCollection"
import { useFirestoreQueryData } from '@react-query-firebase/firestore'
import { collection, query, where, orderBy } from 'firebase/firestore'
import { db } from '../firebase'

/**
 *  Hook to get food places list from firebase with query constraints
 */

const useGetQueryPlaces = (queryLimits) => {

    // Get collection referense from firestore
    const collectionRef = collection(db, 'places')

    // Make sure query updates when queryLimits changes
    const queryKey = ['places', queryLimits]

    // Variable to keep track of what query constraints to use
    let queryRef

    if (queryLimits.townWhere) {
        // Query to use if neither type or supply has been restricted
        if (queryLimits.typeWhere === 'All' && queryLimits.supplyWhere === 'All') {
            queryRef = query(collectionRef, where('town', '==', queryLimits.townWhere), orderBy('name', queryLimits.nameOrder))
        // Query to use if supply has been restricted
        } else if (queryLimits.typeWhere === 'All') {
            queryRef = query(collectionRef, where('supply', '==', queryLimits.supplyWhere), where('town', '==', queryLimits.townWhere), orderBy('name', queryLimits.nameOrder))
        // Query to use if type has been restricted
        } else if (queryLimits.supplyWhere === 'All') {
            queryRef = query(collectionRef, where('type', '==', queryLimits.typeWhere), where('town', '==', queryLimits.townWhere), orderBy('name', queryLimits.nameOrder))
        // Query to use if both type and supply has been restricted
        } else {
            queryRef = query(collectionRef, where('type', '==', queryLimits.typeWhere), where('supply', '==', queryLimits.supplyWhere), where('town', '==', queryLimits.townWhere), orderBy('name', queryLimits.nameOrder))
        }
    } else {
        // Query to use if neither type or supply has been restricted
        if (queryLimits.typeWhere === 'All' && queryLimits.supplyWhere === 'All') {
            queryRef = query(collectionRef, orderBy('name', queryLimits.nameOrder))
        // Query to use if supply has been restricted
        } else if (queryLimits.typeWhere === 'All') {
            queryRef = query(collectionRef, where('supply', '==', queryLimits.supplyWhere), orderBy('name', queryLimits.nameOrder))
        // Query to use if type has been restricted
        } else if (queryLimits.supplyWhere === 'All') {
            queryRef = query(collectionRef, where('type', '==', queryLimits.typeWhere), orderBy('name', queryLimits.nameOrder))
        // Query to use if both type and supply has been restricted
        } else {
            queryRef = query(collectionRef, where('type', '==', queryLimits.typeWhere), where('supply', '==', queryLimits.supplyWhere), orderBy('name', queryLimits.nameOrder))
        }
    }


    // Create react-query instance
    const placesQuery = useFirestoreQueryData(queryKey, queryRef, {
        idField: 'id',
    })

    return placesQuery

}

export default useGetQueryPlaces