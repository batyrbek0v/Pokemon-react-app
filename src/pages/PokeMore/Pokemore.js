import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getData } from '../../configs/Index'
import { GiMightyForce } from 'react-icons/gi'
import { BiStats } from 'react-icons/bi'
import { AiFillHeart } from 'react-icons/ai'
import { ImStatsBars } from 'react-icons/im'
import { GiFragmentedSword } from 'react-icons/gi'
import { GiCheckedShield } from 'react-icons/gi'
import { GiBouncingSword } from 'react-icons/gi'
import { GiCrenulatedShield } from 'react-icons/gi'
import { BsSpeedometer2 } from 'react-icons/bs'
import { MdOutlineArrowBack } from 'react-icons/md'
import './Pokemore.scss'


const Pokemore = () => {
    const {id} = useParams()
  
    const [data, setData] = useState(null)
  
    useEffect(() => {
        getData(`pokemon/${id}`)
        .then(res => res.json())
        .then(r => setData(r))
    }, [])

    if(!data) return <h1>Loading...</h1>
    console.log(data);

  return (
    <>
        <div className="more_container">
            <div className="more_card">
                <div className="more_card_header">
                    <h1>{ data.name } / #{ data.id }</h1>
                </div>
                <div className='more_card_body'>
                    <img src={data.sprites.other.dream_world.front_default} alt={data.name} />
                </div>
                <div className='more_card_buttons'>
                    <button className={data.types[0].type.name}>Type: {data.types[0].type.name}</button>
                    {/* <button className={data.types[1].type.name}>Type: {data.types[1].type.name ? data.types[1].type.name : data.types[0].type.name }</button> */}
                </div>
            </div>
            <div className="more_about_block">
                <p> <BiStats/> </p>
                <ul className='more_about_list'>
                    <li>Height: { data.height } ft</li>
                    <li>Weight:  { data.weight / 10 } kg</li>
                </ul>
                <p> <ImStatsBars/> </p>
                <ul className='more_stats_list'>
                    <div className='hp' style={{width:`${data.stats[0].base_stat}%`}}>
                        <span> <AiFillHeart/> </span>
                        <span>{ data.stats[0].base_stat }%</span>
                    </div>
                    <div className='hp' style={{width:`${data.stats[1].base_stat}%`}}>
                        <span> <GiFragmentedSword/> </span>
                        <span>{ data.stats[1].base_stat }%</span>
                    </div>
                    <div className='hp' style={{width:`${data.stats[2].base_stat}%`}}>
                        <span> <GiCheckedShield/> </span>
                        <span>{ data.stats[2].base_stat }%</span>
                    </div>
                    <div className='hp' style={{width:`${data.stats[3].base_stat}%`}}>
                        <span> <GiBouncingSword/> </span>
                        <span>{ data.stats[3].base_stat }%</span>
                    </div>
                    <div className='hp' style={{width:`${data.stats[4].base_stat}%`}}>
                        <span> <GiCrenulatedShield/> </span>
                        <span>{ data.stats[4].base_stat }%</span>
                    </div>
                    <div className='hp' style={{width:`${data.stats[5].base_stat}%`}}>
                        <span> <BsSpeedometer2/> </span>
                        <span>{ data.stats[5].base_stat }%</span>
                    </div>
                </ul>
            </div>
            <div className='more_abilities_block'>
                <div className="more_abilities_block_title">
                    <h1><GiMightyForce/></h1>
                </div>
                <div className='more_abilities'>
                    <h3>{ data.abilities[0].ability.name }</h3>
                    <h3>{ data.abilities[1].ability.name }</h3>
                </div>
            </div>
            <div className='back_btn'>
                <Link to={'/'} className="back"><MdOutlineArrowBack/></Link>
            </div>
        </div>
    </>
  )
}

export default Pokemore