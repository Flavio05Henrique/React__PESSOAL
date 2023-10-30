import { useState } from 'react';
import './App.css';
import ContainerImgs from './Components/ContainerImgs/ContainerImgs';
import Form from './Components/Form/Form';

function App() {

const [yourImagesURLS, setYourImagesURLS] = useState([])
  const tags =''
  const byAdding = (img) => {
    const id = yourImagesURLS.length -1 >= 0 ? yourImagesURLS[yourImagesURLS.length -1].id + 1 : 0
    
    setYourImagesURLS([...yourImagesURLS, {id:id ,img: img, tags: tags}])
  }

  const byRemove = (imgId) => {
    const removeImg = yourImagesURLS.filter( img => img.id != imgId )
    setYourImagesURLS(removeImg)
  }

  const byAddNewTag = () => {
    
  }

  const TagFieldOpen = () => {
    console.log('add')
  }

  return (
    <div className="App">
      <Form byAdding={byAdding} fildName='URL'/>
      <Form byAdding={byAddNewTag} fildName='Tag'/>
      <ContainerImgs 
        imgsForLoad={yourImagesURLS} 
        byRemove={byRemove} 
        TagFieldOpen={TagFieldOpen}
      />
    </div>
  );
}

export default App;
