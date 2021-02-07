import React, { useEffect, useState } from 'react';
import linkService from './services/links'

const App = () => {
    const [links, setLinks] = useState([])
    const [newLink, setNewLink] = useState('')
    useEffect(() => {
        linkService.getAll().then(res => setLinks(res))
    }, [])
    const addLink = (event) => {
        event.preventDefault()
        const linkObject = {
            url: newLink
        }
        linkService.create(linkObject).then(res => {
            setLinks(links.concat(res))
            setNewLink('')
        })
    }

    const removeLink = (id) => {
        linkService.remove(id).then(res => setLinks(links.filter(l => l.id !== id)))
    }
    return (
        <div>
            <ul>
                {links.map((link, i) =>
                    <li key={i}>{link.url} 
                    <button onClick={(event)=>{removeLink(link.id)}}>delete</button>
                    <button onClick={(event)=>{console.log(link)}}>show</button></li>
                )}
            </ul>
            <form onSubmit={addLink}>
                <input value={newLink}
                    onChange={(event) => setNewLink(event.target.value)}
                ></input>
                <button type='submit'>save</button>
            </form>
        </div>
    )
}

export default App;