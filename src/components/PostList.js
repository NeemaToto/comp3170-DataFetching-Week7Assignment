import { useState, useEffect } from 'react'
import Post from './Post'

export default function PostList() {
    const [loading, setLoading] = useState(false);

    const [listData, setListData] = useState()
    const API_URL = 'https://jsonplaceholder.typicode.com/posts/'

    useEffect(() => {
        setLoading(true)
        function fetchList() {
            fetch(API_URL)
                .then(response => response.json())
                .then(response => {
                    console.log(response)
                    setListData(response)
                    setLoading(false)
                })
                .catch(err => {
                    console.log(err)
                })
        }

        setTimeout(() => {
            fetchList();
        }, 2000)

    }, [])

    return (
        <div>
            {
                loading ? <div>Loading...</div> : (
                    <Post list={listData} />
                )
            }
        </div>
    )
}