import React from 'react';
import CollectionItems from "../item-collection/collection-item.comp";
import './collection.style.scss';
import { Link } from 'react-router-dom';

const CollectionPrev = ({ title, items }) => {

    return (
        <div className="collection-preview">
            <h1 className="title"><Link to={`shop/${title.toLowerCase()}`}>{title}</Link></h1>
            <div className="preview">
                {items.filter(({ item }, index) => index < 4).map(item => (<CollectionItems key={item.id} item={item} />))}
            </div>
        </div>
    )
}


export default CollectionPrev;