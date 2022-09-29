import useStreamCollection from "./useStreamCollection"
import { useFirestoreQueryData } from '@react-query-firebase/firestore'
import { collection, query, where, orderBy } from 'firebase/firestore'
import { db } from '../firebase'

/**
 *  Använd useQueryFIreStore med key för name/supply/type state
 *
 *  argument: objekt med egenskap för where fält och värde för where värde
 *  switch case för att ändra querysträngen
 */

const useGetQueryPlaces = (queryLimits) => {

    const collectionRef = collection(db, 'places')

    const queryKey = ['places', queryLimits]

    let queryRef

    if (queryLimits.typeWhere === 'All' && queryLimits.supplyWhere === 'All') {
        queryRef = query(collectionRef, orderBy('name', queryLimits.nameOrder))
    } else if (queryLimits.typeWhere === 'All') {
        queryRef = query(collectionRef, where('supply', '==', queryLimits.supplyWhere), orderBy('name', queryLimits.nameOrder))
    } else if (queryLimits.supplyWhere === 'All') {
        queryRef = query(collectionRef, where('type', '==', queryLimits.typeWhere), orderBy('name', queryLimits.nameOrder))
    } else {
        queryRef = query(collectionRef, where('type', '==', queryLimits.typeWhere), where('supply', '==', queryLimits.supplyWhere), orderBy('name', queryLimits.nameOrder))
    }

    const placesQuery = useFirestoreQueryData(queryKey, queryRef, {
        idField: 'id',
        // subscribe: true,
    })

    return placesQuery

}

export default useGetQueryPlaces