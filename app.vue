<script setup lang="ts">
import { ref } from 'vue';
import type { Categories, CategoryPath } from './types/types';
import { useCategories } from './composables/useCategories';

const { getCategoryPath } = useCategories();

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

const inputCategory = ref<string>('');
const resultPath = ref<CategoryPath>('');

const findPath = () => {
  resultPath.value = getCategoryPath(categories, inputCategory.value);
};

</script>

<template>
  <h1 class="pl-6 pt-6 text-xl font-bold mb-4">Category Path Finder</h1>
  <div class="p-6 flex flex-row justify-between">
    <div class="w-1/2">

      <pre class="bg-gray-100 p-4 rounded">
        {{ categories }}
      </pre>
    </div>

    <div class="w-1/2 ml-4">
      <div class="flex flex-row">
        <input
        v-model="inputCategory"
        type="text"
        placeholder="Enter category name"
        class="border p-2"
        />
     </div>
    
     <div class="flex flex-row pt-2">
      <button
        @click="findPath"
        class="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
        Find Path
      </button>
     </div>
      <div v-if="resultPath" class="mb-4">
        <strong>Result:</strong> {{ resultPath }}
      </div>
    </div>
  </div>
</template>
