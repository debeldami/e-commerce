import React from 'react';
import CollectionItems from "../item-collection/collection-item.comp";
import './collection.style.scss';

const CollectionPrev = ({ title, items }) => {
    return (
        <div className="collection-preview">
            <h1 className="title">{title}</h1>
            <div className="preview">
                {items.filter(({ item }, index) => index < 4).map(({ id, ...item }) => (<CollectionItems key={id} {...item} />))}
            </div>
        </div>
    )
}


export default CollectionPrev;