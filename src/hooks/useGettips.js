import useStreamCollection from './useStreamCollection'

const useGetTips = () => {
    return useStreamCollection('tip')
}

export default useGetTips