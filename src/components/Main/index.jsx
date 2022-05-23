import React, { useEffect, useState } from 'react'
import { getData } from '../../configs/Index'
import './index.scss'
import { Link } from 'react-router-dom'

const Main = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        getData('pokemon')
            .then(res => res.json())
            .then(r => { setData(r) })
    }, [])

    if (!data) return <h1>Loading...</h1>

    return (
        <>
            <div className='wrapper'>
                {
                    data.results.map(({ name, url},index) => (
                        <div className="card" key={index}>
                            <div className="card_title">
                                <h2> {name} </h2>
                            </div>
                            <div className="card_body">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1280px-International_Pok%C3%A9mon_logo.svg.png"/>
                            </div>
                            <div className="card_footer">
                                <Link className='moreBtn' to={`/pokemon/${name}`}>Go to Pokedex</Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Main
