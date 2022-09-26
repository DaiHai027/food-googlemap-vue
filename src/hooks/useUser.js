import useStreamDocument from "./useStreamDocument"

const useUser = (id) => {
    return useStreamDocument('users', id)
}

export default useUser