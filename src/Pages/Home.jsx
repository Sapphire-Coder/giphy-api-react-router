import { useEffect, useState } from 'react'
import { getRandom } from '../services/getRequests'

export default function Home() {

    const [randomGif, setRandomGif] = useState([])

    const rand = () => {
        getRandom().then(res => setRandomGif(res.data.data.images.downsized_large.url))
    }

    useEffect(() => {
        getRandom()
            .then(res => setRandomGif(res.data.data.images.downsized_large.url))
    }, [])

    return (
        <div>
            <img src = {randomGif} />
            <button onClick = {rand}>Random Gif</button>
        </div>
    )
}