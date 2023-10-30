import { useState } from 'react'
import './ImgCard.css'

const ImgCard = (props) => {
    const {img, id, tag} = props.img
   
    const deletImg = () => {
        props.byRemove(id)
    }
    const open = () => {
        props.TagFieldOpen()
    }

    return (
        <div className='img_card'  id={id}>
            <div className='img_card-control'>
                <button className='close' onClick={ event => deletImg()}/>
                <button className='addTag' onClick={ event => open()}/>
            </div>
            <div className='img_card-content'>
                <img src={img}/>
            </div>
            <div className='img_card-tag_container'>
                <div className='tag'></div>
            </div>
        </div>
    )
}

export default ImgCard