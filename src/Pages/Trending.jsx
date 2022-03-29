import { useEffect, useState } from 'react'
import { getTrending } from '../services/getRequests'

export default function Trending() {

    const [trending, setTrending] = useState([])

    useEffect(() => {
        getTrending()
            .then(res => setTrending(res.data.data))
    }, [])

    return (
        <div className = 'responsive'>
            {
                trending.map((gif, i) => {
                    return <img src = {gif.images.downsized_large.url} key = {i} className = 'multImg'/>
                })
            }
        </div>
    )
}