<template>
  <div class="md:container md:mx-auto bg-no-repeat">
    <!-- Grid profile section -->
    <div class="grid row-auto hover:row-span-3 grid-cols-6 gap-3 p-6 m-5">
      <div
        class="col-span-3 text-center relative h-full w-full overflow-hidden rounded-lg"
      >
        <div class="grid h-screen place-items-center p-8">
          <h1 class="text-5xl text-gray-200 py-5 no-underline">
            I am <span class="text-amber-400">Md Atikur Rahman</span>
            <h4 class="text-xl no-underline italic mt-10">
              <span class="text-orange-200">{{ typeValue }}</span>
              <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
            </h4>
            <div class="mt-1">
              <a
                href="mailto:atikur755@gmail.com"
                class="bg-transparent text-lg hover:bg-yellow-300 text-yellow-300 hover:text-slate-800 rounded-full shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent"
              >
                Contact
              </a>
            </div>
          </h1>
        </div>
      </div>
      <div
        class="col-span-3 text-center pt-6 text-gray-400 relative overflow-hidden rounded-lg hover:opacity-90"
      >
        <img
          class="h-full w-full object-scale-down object-center"
          src="../assets/img/cover-img.webp"
          alt="portfolio-pic"
        />
      </div>
    </div>
    <!-- end Grid profile section -->
  </div>
</template>
<script>
import { useHead } from "unhead";
export default {
  name: "HelloWorld",
  setup() {
    useHead({
      title: "Atikur Rahman | Homepage",
      meta: [
        {
          name: "title",
          content: "Atikur Rahman | Homepage ",
        },
        {
          name: "description",
          content: "I am Md Atikur Rahman, this is my personal Portfolio.",
        },
        {
          property: "og:description",
          content:
            "I am Mohammad Md Atikur Rahman, this is my personal Portfolio.",
        },
        { property: "og:image", content: `summary_large_image` },
        { name: "twitter:card", content: `summary_large_image` },
      ],
    });
  },
  data: () => {
    return {
      typeValue: "",
      typeStatus: false,
      typeArray: [
        "A passionate Civil Engineer",
        "Bridge Design Engineer",
        "Structural Engineer",
      ],
      typingSpeed: 50,
      erasingSpeed: 50,
      newTextDelay: 1500,
      typeArrayIndex: 0,
      charIndex: 0,
    };
  },
  methods: {
    typeText() {
      if (this.charIndex < this.typeArray[this.typeArrayIndex].length) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue += this.typeArray[this.typeArrayIndex].charAt(
          this.charIndex
        );
        this.charIndex += 1;
        setTimeout(this.typeText, this.typingSpeed);
      } else {
        this.typeStatus = false;
        setTimeout(this.eraseText, this.newTextDelay);
      }
    },
    eraseText() {
      if (this.charIndex > 0) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue = this.typeArray[this.typeArrayIndex].substring(
          0,
          this.charIndex - 1
        );
        this.charIndex -= 1;
        setTimeout(this.eraseText, this.erasingSpeed);
      } else {
        this.typeStatus = false;
        this.typeArrayIndex += 1;
        if (this.typeArrayIndex >= this.typeArray.length)
          this.typeArrayIndex = 0;
        setTimeout(this.typeText, this.typingSpeed + 1000);
      }
    },
  },
  created() {
    setTimeout(this.typeText, this.newTextDelay + 200);
  },
};
</script>

<style scoped>
.my-backgroundImage {
  background: url(../assets/img/cover-img.webp) no-repeat 50%;
  height: 1450px;
  max-width: 100%;
  opacity: 0.9;
  /* Any additional styling or classes go here */
}

.cursor {
  display: inline-block;
  margin-left: 3px;
  width: 4px;
  background-color: #fff;
  animation: cursorBlink 1s infinite;
}
.cursor.typing {
  animation: none;
}
@keyframes cursorBlink {
  49% {
    background-color: #fff;
  }
  50% {
    background-color: transparent;
  }
  99% {
    background-color: transparent;
  }
}
</style>
