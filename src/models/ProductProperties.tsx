type ProductPropertyDetail = {
    title: String;
    isStock: boolean;
};

type ProductProperties = {
    title: String;
    listData: Array<ProductPropertyDetail>;
};

export type {ProductProperties,ProductPropertyDetail };