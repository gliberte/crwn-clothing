import React from "react";
import { Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCollections } from "../../redux/shop/shop.selectors";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from '../../pages/collection/collection.component'

const ShopPage = ({ match }) => {
  const {collectionId} = match.params
  const collections = useSelector(selectCollections);
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
    </div>
  );
};

export default ShopPage;
