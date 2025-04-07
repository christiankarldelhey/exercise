<script setup lang="ts">
import { ref } from 'vue';

const categories = [
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

const inputCategory = ref('');
const resultPath = ref('');

const findPath = () => {
  resultPath.value = getCategoryPath(categories, inputCategory.value);
};

const getCategoryPath = (categories: any[], categoryName: string) => {
    let path;

    const getPath = (cats: any[], currentPath: string) => {
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

</script>

<template>
  <div class="p-6 max-w-md mx-auto">
    <h1 class="text-xl font-bold mb-4">Category Path Finder</h1>

    <pre class="bg-gray-100 p-4 rounded">
      {{ categories }}
    </pre>

    <input
      v-model="inputCategory"
      type="text"
      placeholder="Enter category name"
      class="border p-2 w-full mb-4"
    />

    <button
      @click="findPath"
      class="bg-blue-500 text-white px-4 py-2 rounded mb-4"
    >
      Find Path
    </button>

    <div v-if="resultPath" class="mb-4">
      <strong>Result:</strong> {{ resultPath }}
    </div>

  </div>
</template>
