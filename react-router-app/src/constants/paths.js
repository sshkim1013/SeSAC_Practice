const PATHS = {
  ROOT: {
    INDEX: "/",
  },
  DUMMY: {
    INDEX: "/dummy",
    PRODUCTS: "/dummy/products",
    PRODUCT_DETAIL: "/dummy/products/:productId",
    getProductDetail: (productId) => `/dummy/products/${productId}`,

    CARTS: "/dummy/carts",
    CART_DETAIL: "/dummy/carts/:cartId",
    getCartDetail: (cartId) => `/dummy/carts/${cartId}`,

    POSTS: "/dummy/posts",
    POST_DETAIL: "/dummy/posts/:postId",
    getPostDetail: (postId) => `/dummy/posts/${postId}`,
  },
};

export default PATHS;
