import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "../../redux/auth/operations";
import { selectIsRefreshing } from "../../redux/auth/selectors";

import Layout from "../Layout/Layout";
import RoutresSet from "../RoutersSet/RoutersSet";
import Loader from "../Loader/Loader";

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-[url('/img/bg-img.webp')] bg-cover bg-center">
      {isRefreshing && <Loader />}
      <Layout />
      <RoutresSet />
    </div>
  );
};

export default App;
