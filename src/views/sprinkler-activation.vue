<template lang="">
  <div class="container sm:mx-auto mt-16 p-10">
    <div class="grid row-auto hover:row-span-3 grid-cols-6 gap-3 p-6 m-5">
      <div
        class="col-span-3 text-center relative h-full w-full overflow-hidden rounded hover:opacity-90"
      >
        <div class="grid h-screen place-items-center p-2">
          <img
            class="h-full w-full object-cover object-center"
            src="../assets/img/sprinkler/FE-tools.gif"
            alt="FE-tools"
          />
        </div>
      </div>
      <div
        class="col-span-3 text-center relative h-full w-full overflow-hidden rounded"
      >
        <div class="col-span-2 place-items-center space-x-8 space-y-16">
          <button
            class="bg-transparent hover:bg-cyan-500 text-white font-semibold hover:text-white py-2 px-4 border border-slate-100 hover:border-transparent rounded-full"
          >
            Sprinkler Activation
          </button>
          <button
            class="bg-transparent hover:bg-cyan-500 text-white font-semibold hover:text-white py-2 px-4 border border-slate-100 hover:border-transparent rounded-full"
          >
            Button
          </button>
        </div>
        <div class="col-span-2 place-items-center space-x-8 space-y-16">
          <button
            class="bg-transparent hover:bg-cyan-500 text-white font-semibold hover:text-white py-2 px-4 border border-slate-100 hover:border-transparent rounded-full"
          >
            Button
          </button>
          <button
            class="bg-transparent hover:bg-cyan-500 text-white font-semibold hover:text-white py-2 px-4 border border-slate-100 hover:border-transparent rounded-full"
          >
            Button
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped></style>
