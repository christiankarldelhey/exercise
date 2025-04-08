<script setup lang="ts">
import { ref } from 'vue';
import type { CategoryPath } from './types/types';
import { useCategories } from './composables/useCategories';

const { categories, getCategoryPath } = useCategories();

const inputCategory = ref<string>('');
const resultPath = ref<CategoryPath>('');

const findPath = () => {
  resultPath.value = getCategoryPath(categories, inputCategory.value);
};

</script>

<template>
  <div class="p-6 flex flex-row justify-center">
    <h1 class="text-xl font-bold">Category Path Finder</h1>
  </div>
  <div class="p-6 flex flex-row justify-center">
    <div class="w-1/3">

      <pre class="bg-gray-100 p-4 rounded text-sm">
        {{ categories }}
      </pre>
    </div>

    <div class="w-1/3 ml-4">
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
