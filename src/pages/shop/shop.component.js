import React,{useState} from 'react'
import shopdata from './shop.data'
import CollectionPreview from '../../components/collection-preview/collection-preview.component'

const ShopPage = ()=>{
    const [collections,setCollection] = useState(shopdata)
    console.log(collections)
    return (
        <div className="shop-page">
            {
                collections.map(({id,...otherCollectionProps})=>(
                    <CollectionPreview key={id} {...otherCollectionProps}/>
                ))
            }
        </div>
    )
}

export default ShopPage