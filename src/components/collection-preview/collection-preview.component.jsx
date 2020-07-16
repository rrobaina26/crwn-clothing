import React from "react";
import CollectionItem from "../collection-item/collection-item.component"
import "./collection-preview.styles.scss"
import {Link} from "react-router-dom"
import {withRouter} from "react-router-dom"

const CollectionPreview = ({ title, items, match }) => {
  return (
    <div className="collection-preview">
      <h1 className="title"><Link to={`${match.path}/${title.toLowerCase()}`}>{title.toUpperCase()}</Link></h1>
      <div className="preview">
        {items
          .filter((i, index) => index <= 3)
          .map((item) => (
           <CollectionItem key={item.id} item={item}/>
          ))}
      </div>
    </div>
  );
};

export default withRouter(CollectionPreview);
