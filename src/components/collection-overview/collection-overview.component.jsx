import React from "react";
import "./collection-overview.styles.scss"
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionsForOverview } from "../../redux/shop/shop.selectors";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";

const CollectionOverview = ({ collections }) => {
  return (
    <div className="collection-overview">
      {collections.map(({ id, ...otherProps }) => (
        <CollectionPreview key={id} {...otherProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForOverview,
});
export default connect(mapStateToProps)(CollectionOverview);
