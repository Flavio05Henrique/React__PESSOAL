import ImgCard from '../ImgCard/ImgCard'
import './ContainerImgs.css'

const ContainerImgs = (props) => {
    const imgs =  props.imgsForLoad
    return(
        <div className='container'>
           {imgs.map( img => 
            <ImgCard 
                img={img} 
                byRemove={props.byRemove}
                key={img.img + img.id}
                TagFieldOpen={props.TagFieldOpen}
            />)}
        </div>
    )
}

export default ContainerImgs