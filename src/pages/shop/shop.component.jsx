import { connect } from "react-redux";
import React, { Component } from "react";
import { Route } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import CollectionPage from "../collection/collection.component";
import { selectIsLoading } from "../../redux/shop/shop.selectors";
import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";

class ShopPage extends Component {
  componentDidMount() {
    this.props.fetchCollectionsStartAsync();
  }

  render() {
    const { match, isLoading } = this.props;
    const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
    const CollectionPageWithSpinner = WithSpinner(CollectionPage);

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionOverviewWithSpinner
              isLoading={isLoading}
              {...props}
            ></CollectionOverviewWithSpinner>
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner
              isLoading={isLoading}
              {...props}
            ></CollectionPageWithSpinner>
          )}
        />
      </div>
    );
  }
}

const mapStateToProp = createStructuredSelector({
  isLoading: selectIsLoading,
});

export default connect(mapStateToProp, { fetchCollectionsStartAsync })(
  ShopPage
);
