import { connect } from "react-redux";
import React, { Component } from "react";
import { Route } from "react-router-dom";
import CollectionPage from "../collection/collection.component";
import { updateCollections } from "../../redux/shop/shop.actions";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

class ShopPage extends Component {
  unsuscribe = null;

  state = { isLoading: true };

  componentDidMount() {
    const { updateCollections } = this.props;
    const colRef = firestore.collection("collections");
    this.unsuscribe = colRef.onSnapshot(async (snapshot) => {
      const collections = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collections);
      this.setState({ isLoading: false });
    });
  }

  componentWillUnmount() {
    this.unsuscribe();
  }

  render() {
    const { match } = this.props;
    const { isLoading } = this.state;
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

export default connect(null, { updateCollections })(ShopPage);
