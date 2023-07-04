<script setup>
import Headless from "./views/Headless.vue";
import { useHead } from "unhead";

useHead({
  title: "Homepage | Aydid Hasan",
  meta: [
    {
      name: "title",
      content: "Tanveer Hasan | Homepage ",
    },
    {
      name: "description",
      content: "I am Mohammad Tanveer Hasan, this is my personal Portfolio.",
    },
    {
      property: "og:description",
      content: "I am Mohammad Tanveer Hasan, this is my personal Portfolio.",
    },
    { property: "og:image", content: `summary_large_image` },
    { name: "twitter:card", content: `summary_large_image` },
  ],
});
</script>

<template>
  <Headless />
  <!-- <HelloWorld /> -->
</template>
<style scoped></style>
