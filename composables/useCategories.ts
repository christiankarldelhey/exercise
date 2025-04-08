import type { Categories, CategoryPath } from '../types/types';


export function useCategories() {

    const categories: Categories = 
    [
        {
        name: 'category1',
        subcategories: [
            {
            name: 'category2',
            subcategories: []
            },
            {
            name: 'category3',
            subcategories: [
                {
                name: 'category4',
                subcategories: []
                }
            ]
            }
        ]
        },
        {
        name: 'category5',
        subcategories: []
        }
    ];

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
        categories,
        getCategoryPath,
    };
}
