import { db } from "../../db.js";

export const resolvers = {
  Query: {
    products: () => db.products,
    product: (parent: any, args: { productId: String }, context: any) => {
      return db.products.find((pd) => pd.id === args.productId);
    },
    categories: () => db.categories,
    category: (parent: any, args: { categoryId: String }, context: any) => {
      return db.categories.find((ct) => ct.id === args.categoryId);
    },
  },
  Product: {
    category: (parent, args, context) => {
      // console.log("parent :", parent.categoryId)
      return db.categories.find(
        (category) => category.id === parent.categoryId
      );
    },
    reviews : (parent, args, context) => {
      return db.reviews.filter((review) => review.productId === parent.id);
    }
  },

  Category: {
    products: (parent, args, context) => {
      return db.products.filter((product) => product.categoryId === parent.id);
    },
  },
};
