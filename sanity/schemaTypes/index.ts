import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";
import { categoryType } from "./categoryType";
import { authorType } from "./authorType";
import { addressType } from "./addressType";
import { blogCategoryType } from "./blogCategoryType";
import { brandType } from "./brandTypes";
import { orderType } from "./orderType";
import { productType } from "./productType";
import { blogType } from "./blogType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    categoryType,
    productType,
    orderType,
    brandType,
    blogType,
    blogCategoryType,
    authorType,
    addressType,
    blockContentType,
  ],
};
