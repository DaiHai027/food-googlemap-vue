import useStreamDocument from "./useStreamDocument"

const useGettip = (id) => {
    return useStreamDocument('tips', id)
}

export default useGettip