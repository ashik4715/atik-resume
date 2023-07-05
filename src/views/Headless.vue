<template>
  <div class="">
    <header class="absolute inset-x-0 top-0 z-50 w-full">
      <nav
        :class="{ scrolled: !view.atTopOfPage }"
        class="fixed flex w-full items-center justify-between bg-gray-800 flex-wrap m-auto top-0 animated shadow-2xl shadow-cyan-500/40 p-7 lg:px-7"
        aria-label="Global"
      >
        <div class="flex lg:flex-1">
          <a href="/" class="-m-1.5 p-1.5">
            <!-- <img class="h-8 w-auto" src="#" alt="logo" /> -->
          </a>
        </div>
        <div class="flex lg:hidden">
          <button
            type="button"
            class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-cyan-600 dark:text-white hover:text-emerald-400"
            @click="mobileMenuOpen = true"
          >
            <span class="sr-only">Open main menu</span>
            <Bars3Icon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="hidden lg:flex lg:gap-x-12">
          <router-link
            class="text-lg font-semibold leading-7 text-nav hover:text-gray-500"
            to="/"
            >Home</router-link
          >
          <router-link
            class="text-lg font-semibold leading-7 text-nav hover:text-gray-500"
            to="/about"
            >About Me</router-link
          >
          <router-link
            class="text-lg font-semibold leading-7 text-nav hover:text-gray-500"
            to="/new-projects"
            >My Projects</router-link
          >
          <router-link
            class="text-lg font-semibold leading-7 text-nav hover:text-gray-500"
            to="/FE-tools"
            >Fire Tools</router-link
          >
        </div>
        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="/" class="text-sm font-semibold leading-6 text-white"
            >Log in <span aria-hidden="true">&rarr;</span></a
          >
        </div>
      </nav>
      <Dialog
        as="div"
        class="lg:hidden"
        @close="mobileMenuOpen = false"
        :open="mobileMenuOpen"
      >
        <div class="fixed inset-0 z-50" />
        <DialogPanel
          class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-800 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
        >
          <div class="flex items-center justify-between">
            <a href="/" class="-m-1.5 p-1.5">
              <!-- <img class="h-8 w-auto" src="#" alt="logo" /> -->
            </a>
            <button
              type="button"
              class="-m-2.5 rounded-md p-2.5 text-red-600 hover:text-emerald-500"
              @click="mobileMenuOpen = false"
            >
              <span class="sr-only">Close menu</span>
              <XMarkIcon class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-6">
                <router-link
                  class="-mx-3 block rounded-lg py-2 px-3 text-lg font-semibold leading-7 text-white hover:bg-slate-400"
                  to="/"
                  @click="mobileMenuOpen = false"
                  >Home</router-link
                >
                <router-link
                  class="-mx-3 block rounded-lg py-2 px-3 text-lg font-semibold leading-7 text-white hover:bg-slate-400"
                  to="/about"
                  @click="mobileMenuOpen = false"
                  >About Me</router-link
                >
                <router-link
                  class="-mx-3 block rounded-lg py-2 px-3 text-lg font-semibold leading-7 text-white hover:bg-slate-400"
                  to="/contact"
                  @click="mobileMenuOpen = false"
                  >Contact</router-link
                >
                <router-link
                  class="-mx-3 block rounded-lg py-2 px-3 text-lg font-semibold leading-7 text-white hover:bg-slate-400"
                  to="/new-projects"
                  @click="mobileMenuOpen = false"
                  >Projects</router-link
                >
                <router-link
                  class="-mx-3 block rounded-lg py-2 px-3 text-lg font-semibold leading-7 text-white hover:bg-slate-400"
                  to="/privacy-policy"
                  @click="mobileMenuOpen = false"
                  >Privacy-policy</router-link
                >
                <router-link
                  to="/Terms-conditions"
                  class="-mx-3 block rounded-lg py-2 px-3 text-lg font-semibold leading-7 text-white hover:bg-slate-400"
                  @click="mobileMenuOpen = false"
                  >Terms &amp; Conditions Agreement</router-link
                >
                <router-link
                  to="/FE-tools"
                  class="-mx-3 block rounded-lg py-2 px-3 text-lg font-semibold leading-7 text-white hover:bg-slate-400"
                  @click="mobileMenuOpen = false"
                  >Fire Tools</router-link
                >
              </div>
              <div class="py-6">
                <a
                  href="/"
                  @click="mobileMenuOpen = false"
                  class="-mx-3 block rounded-lg py-2.5 px-3 text-lg font-semibold leading-7 text-white hover:bg-slate-400"
                  >Log in</a
                >
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  </div>

  <div class="bg-no-repeat bg-slate-900 pb-6">
    <div v-if="false">
      <HelloWorld />
    </div>
    <div v-else><router-view></router-view></div>
  </div>
  <!-- footer -->
  <footer
    class="py-6 px-6 flex justify-between bg-gray-800 shadow-2xl shadow-cyan-500"
  >
    <div
      class="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8"
    >
      <nav class="flex flex-wrap justify-center -mx-5 -my-2">
        <div class="px-5 py-2">
          <router-link
            to="/about"
            class="text-lg leading-6 text-nav hover:text-gray-500"
            >About Me</router-link
          >
        </div>
        <div class="px-5 py-2">
          <router-link
            to="/contact"
            class="text-lg leading-6 text-nav hover:text-gray-500"
            >Contact</router-link
          >
        </div>
        <div class="px-5 py-2">
          <router-link
            to="/new-projects"
            class="text-lg leading-6 text-nav hover:text-gray-500"
            >Projects</router-link
          >
        </div>
        <div class="px-5 py-2">
          <router-link
            to="/privacy-policy"
            class="text-lg leading-6 text-nav hover:text-gray-500"
            >Privacy Policy</router-link
          >
        </div>
        <div class="px-5 py-2">
          <router-link
            to="/terms-conditions"
            class="text-lg leading-6 text-white hover:text-gray-500"
            >Terms and Conditions</router-link
          >
        </div>
      </nav>
      <div class="flex justify-center mt-8 space-x-6">
        <a
          href="https://www.facebook.com/atikurrahman.rintu"
          target="_blank"
          rel="noopener noreferrer"
          class="text-gray-400 hover:text-lime-500"
        >
          <span class="sr-only">Facebook</span>
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fill-rule="evenodd"
              d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
        <a
          href="https://github.com/ashik4715"
          target="_blank"
          rel="noopener noreferrer"
          class="text-gray-400 hover:text-lime-500"
        >
          <span class="sr-only">GitHub</span>
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fill-rule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/md-atikur-rahman-54047a95/"
          target="_blank"
          rel="noopener noreferrer"
          class="text-gray-400 hover:text-lime-500"
        >
          <span class="sr-only">linkedin</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 8c0 .557-.447 1.008-1 1.008s-1-.45-1-1.008c0-.557.447-1.008 1-1.008s1 .452 1 1.008zm0 2h-2v6h2v-6zm3 0h-2v6h2v-2.861c0-1.722 2.002-1.881 2.002 0v2.861h1.998v-3.359c0-3.284-3.128-3.164-4-1.548v-1.093z"
            />
          </svg>
        </a>
      </div>
      <p class="mt-8 text-lg leading-6 text-center text-gray-400">
        © 2023
        <a
          href="https://atik.vercel.app"
          class="text-yellow-300 hover:text-lime-300"
          >atikurrahman.com</a
        >
        All rights reserved.
      </p>
    </div>
  </footer>
  <!-- end footer -->
</template>

<script>
import { ref } from "vue";
import HelloWorld from "@src/components/HelloWorld.vue";
import { Dialog, DialogPanel } from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";

export default {
  components: {
    HelloWorld,
  },
  setup() {
    const showRouterView = ref(false);
    return {
      showRouterView,
    };
  },
  data() {
    return {
      view: {
        atTopOfPage: true,
      },
    };
  },

  // a beforeMount call to add a listener to the window
  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },

  methods: {
    // the function to call when the user scrolls, added as a method
    handleScroll() {
      // when the user scrolls, check the pageYOffset
      if (window.pageYOffset > 0) {
        // user is scrolled
        if (this.view.atTopOfPage) this.view.atTopOfPage = false;
      } else {
        // user is at top of page
        if (!this.view.atTopOfPage) this.view.atTopOfPage = true;
      }
    },
  },
};
</script>
<script setup>
const mobileMenuOpen = ref(false);
</script>
<style scoped>
a {
  text-decoration: none;
}
nav {
  z-index: 10;
}

nav.scrolled {
  border-bottom: 0px;
}
</style>
