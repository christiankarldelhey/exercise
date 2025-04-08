import type { Categories, CategoryPath } from '../types/types';


export function useCategories() {

    const getCategoryPath = (categories: Categories, categoryName: string) => {
        let path: CategoryPath = '';
    
        const getPath = (cats: Categories, currentPath: CategoryPath) => {
            cats.forEach(cat => {
                const newPath = `${currentPath}/${cat.name}`;
                if (cat.name === categoryName) {
                    path = newPath;
                    return;
                }
                if (cat.subcategories && cat.subcategories.length > 0) {
                    getPath(cat.subcategories, newPath);
                }
            });
        };
    
        getPath(categories, '');
    
        return path;
    };

    return {
        getCategoryPath,
    };
}
