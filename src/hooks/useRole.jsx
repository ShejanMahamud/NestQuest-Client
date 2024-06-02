import { useQuery } from '@tanstack/react-query'
import useAuth from './useAuth'
import useAxiosSecure from './useAxiosSecure'

const useRole = () => {
const axiosSecure = useAxiosSecure()
const {user,loading} = useAuth()
const {data:role,isPending:rolePending} = useQuery({
    queryKey: ['role'],
    enabled: !loading || !!user?.email,
    queryFn: async () => {
        const {data} = await axiosSecure.get(`/user/${user?.email}`)
        return data.role
    }
})
return {role,rolePending}
}

export default useRole