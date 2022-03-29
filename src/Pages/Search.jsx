import { useState } from 'react'
import { getSearch } from '../services/getRequests'

export default function Search() {

    const [srch, setSrch] = useState([])

    const findSrch = e => {
        e.preventDefault()
        let find = document.querySelector('#find').value
        getSearch(find)
            .then(res => setSrch(res.data.data))
            .then(document.querySelector('#find').value = null)
    }

    return (
        <div>
            <form onSubmit = {findSrch}>
                <input type = 'text' id = 'find' placeholder = 'Search'/>
                <input type = 'submit' />
            </form>
            <div className = 'responsive'>
                {
                    srch.map((gif, i) => {
                        return <img src = {gif.images.downsized_large.url} key = {i} className = 'multImg'/>
                    })
                }
            </div>
        </div>
    )
}