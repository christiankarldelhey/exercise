export type Categories = Category[];
export type CategoryPath = string;

export type Category = {
    name: CategoryPath;
    subcategories: Categories | [];
};

