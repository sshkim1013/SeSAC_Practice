import DummyLayout from "../../layouts/DummyLayout";

import Products from "../../pages/DummyPages/Products";
import ProductDetail from "../../pages/DummyPages/ProductDetail";
import Carts from "../../pages/DummyPages/Carts";
import Posts from "../../pages/DummyPages/Posts";
import PostDetail from "../../pages/DummyPages/PostDetail";

import PATHS from "../../constants/paths";

const dummyRoutes = [
  {
    path: PATHS["DUMMY"]["INDEX"],
    Component: DummyLayout,
    children: [
      {
        path: PATHS["DUMMY"]["PRODUCTS"],
        Component: Products,
      },
      {
        path: PATHS["DUMMY"]["PRODUCT_DETAIL"],
        Component: ProductDetail,
      },
      {
        path: PATHS["DUMMY"]["CARTS"],
        Component: Carts,
      },
      {
        path: PATHS["DUMMY"]["POSTS"],
        Component: Posts,
      },
      {
        path: PATHS["DUMMY"]["POST_DETAIL"],
        Component: PostDetail,
      },
    ],
  },
];

export default dummyRoutes;
