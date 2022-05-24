import React, { useEffect, useState } from 'react'
import { getData } from '../../configs/Index'
import './index.scss'
import { Link } from 'react-router-dom'
import { BsArrowBarLeft } from 'react-icons/bs'
import { BsArrowBarRight } from 'react-icons/bs'

const Main = () => {
    const [data, setData] = useState(null)
    const [offset, setOffset] = useState(0)
    const [maxPage, setMaxPage] = useState(0)
    const [current, setCurrent] = useState(1)

    const limit = 9

    useEffect(() => {
        getData(`pokemon?offset=${offset}&limit=${limit}`)
            .then(res => res.json())
            .then(r => {
                setData(r)
                setMaxPage(Math.ceil(r.count / limit))
            })
    }, [current])

    const next = () => {
        current <= maxPage && setOffset(offset + limit)
        setCurrent(current + 1)
    }
    const prev = () => {
        current !== 0 && setOffset(offset - limit)
        setCurrent(current - 1)
    }

    if (!data) return <h1>Loading...</h1>

    return (
        <>
            <div className='wrapper'>
                {
                    data.results.map(({ name }, index) => (
                        <div className="card" key={index}>
                            <div className="card_title">
                                <h2> {name} </h2>
                            </div>
                            <div className="card_body">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1280px-International_Pok%C3%A9mon_logo.svg.png" />
                            </div>
                            <div className="card_footer">
                                <Link className='moreBtn' to={`/pokemon/${name}`}>Go to Pokedex</Link>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="page_btns">
                <div className="page">
                    <button className='prev_btn' disabled={current == 1 ? true : false} onClick={prev} ><BsArrowBarLeft/></button>
                    <div className="pageCounter">
                        <span>{current}</span>
                        /
                        <span>{maxPage}</span>
                    </div>
                    <button className='next_btn' disabled={current == maxPage ? true : false} onClick={next}><BsArrowBarRight/></button>
                </div>
            </div>

        </>
    )
}

export default Main
