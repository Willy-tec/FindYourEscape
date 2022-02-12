import {useRouter} from 'next/router'
import type { NextPage } from 'next'
import Layout from "../../component/Layout";
import useSWR from 'swr';


const fetcher = (url:string) => fetch(url).then((res) => res.json())
const UserProfile : NextPage = ()=>{
    const router = useRouter()
    const { userId } = router.query
    const URL = `/api/user/${userId}`

    const {data, error} = useSWR(URL, fetcher)
    console.log(data, error)
    return (
        <Layout>

            <div>id : {data?.id}</div>
            <div>name : {data?.name}</div>
            <div>email : {data?.email}</div>


        </Layout>
        )
}

export default UserProfile;