<template>
  <div id="app" class="text-gray-800">
    <!-- This example requires Tailwind CSS v2.0+ -->
    <nav class="bg-white border-b border-grey-100 font-bold">
      <div class="max-w-5xl mx-auto px-2 sm:px-6 lg:px-8">
        <div class="relative flex items-center justify-between h-16">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <!-- Mobile menu button-->
            <p
              class="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-200 cursor-pointer"
              aria-expanded="false"
              @click="menu_visible = !menu_visible"
            >
              <span class="sr-only">Open main menu</span>
              <!-- Icon when menu is closed. -->
              <!--
            Heroicon name: menu

            Menu open: "hidden", Menu closed: "block"
          -->
              <svg
                class="block h-6 w-6"
                v-bind:class="{ hidden: menu_visible }"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <!-- Icon when menu is open. -->
              <!--
            Heroicon name: x

            Menu open: "block", Menu closed: "hidden"
          -->
              <svg
                class="h-6 w-6"
                v-bind:class="{ hidden: !menu_visible }"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </p>
          </div>
          <div
            class="h-full flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"
          >
            <div class="flex-shrink-0 flex items-center">
              <div class="block lg:hidden h-10 w-auto">
                <!-- class="flex flex-col justify-center mr-5 sm:mx-auto"> -->
                <router-link class="text-3xl text-blue-800 font-bold" to="/"
                  >TVR</router-link
                >
              </div>
              <div class="hidden lg:block w-auto h-10">
                <!-- class="block lg:hidden h-8 w-auto"> -->
                <!-- class="flex flex-col justify-center mr-5 sm:mx-auto"> -->
                <router-link
                  class="text-3xl text-blue-900 font-extrabold"
                  to="/"
                  >TVR</router-link
                >
              </div>
            </div>
            <div class="h-full hidden sm:block sm:ml-10 pt-2 w-full">
              <div class="h-full flex justify-between w-full">
                <div class="flex space-x-4 h-full">
                  <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                  <div
                    class="border-b-2 border-transparent h-full flex-col px-4 flex justify-center"
                    v-bind:class="{
                      'border-blue-700': this.$router.currentRoute.path == '/',
                      'text-blue-700': this.$router.currentRoute.path == '/',
                    }"
                  >
                    <router-link
                      class="hover:text-blue-700 trainsition-all duration-100"
                      to="/"
                      >Home</router-link
                    >
                  </div>
                  <div
                    class="border-b-2 border-transparent h-full flex-col px-4 flex justify-center"
                    v-bind:class="{
                      'border-blue-700': current_page.includes('dataset'),
                      'text-blue-700': current_page.includes('dataset'),
                    }"
                  >
                    <router-link
                      class="hover:text-blue-700 trainsition-all duration-100"
                      to="/dataset"
                      >Dataset</router-link
                    >
                  </div>
                  <div
                    class="border-b-2 border-transparent h-full flex-col px-4 flex justify-center"
                    v-bind:class="{
                      'border-blue-700': current_page.includes('leaderboard'),
                      'text-blue-700': current_page.includes('leaderboard'),
                    }"
                  >
                    <router-link
                      class="hover:text-blue-700 trainsition-all duration-100"
                      to="/leaderboard"
                      >Leaderboard</router-link
                    >
                  </div>
                  <div
                    class="border-b-2 border-transparent h-full flex-col px-4 flex justify-center"
                    v-bind:class="{
                      'border-blue-700': current_page.includes('try'),
                      'text-blue-700': current_page.includes('try'),
                    }"
                  >
                    <router-link
                      class="italic hover:text-blue-700 trainsition-all duration-100"
                      to="/try"
                      >Try!</router-link
                    >
                  </div>
                </div>
                <div class="h-full flex flex-shrink space-x-6">
                  <div
                    class="border-b-2 border-transparent h-full flex-col flex justify-center text-2xl text-gray-700"
                  >
                    <a href="https://arxiv.org/pdf/2011.13160.pdf"
                      ><font-awesome-icon :icon="['fas', 'file-pdf']"
                    /></a>
                  </div>
                  <div
                    class="border-b-2 border-transparent h-full flex-col flex justify-center text-2xl text-gray-700"
                  >
                    <a href="https://github.com/hughplay/TVR"
                      ><font-awesome-icon :icon="['fab', 'github']"
                    /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
          ></div>
        </div>
      </div>

      <!--
    Mobile menu, toggle classes based on menu state.

    Menu open: "block", Menu closed: "hidden"
  -->
      <div
        v-bind:class="{ hidden: !menu_visible }"
        class="sm:hidden border-t border-gray"
      >
        <div
          class="px-12 py-2 text-center"
          @click="menu_visible = !menu_visible"
        >
          <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
          <router-link
            class="py-2 hover:bg-gray-200 rounded block hover:text-blue-700 trainsition-all duration-100 w-full"
            v-bind:class="{
              'text-blue-700': this.$router.currentRoute.path == '/',
            }"
            to="/"
            >Home</router-link
          >
          <router-link
            class="py-2 hover:bg-gray-200 rounded block hover:text-blue-700 trainsition-all duration-100 w-full"
            v-bind:class="{
              'text-blue-700': this.$router.currentRoute.path == '/dataset',
            }"
            to="/dataset"
            >Dataset</router-link
          >
          <router-link
            class="py-2 hover:bg-gray-200 rounded block hover:text-blue-700 trainsition-all duration-100 w-full"
            v-bind:class="{
              'text-blue-700': this.$router.currentRoute.path == '/leaderboard',
            }"
            to="/leaderboard"
            >Leaderboard</router-link
          >
          <router-link
            class="italic py-2 hover:bg-gray-200 rounded block hover:text-blue-700 trainsition-all duration-100 w-full"
            v-bind:class="{
              'text-blue-700': this.$router.currentRoute.path == '/try',
            }"
            to="/try"
            >Try!</router-link
          >
          <div class="flex justify-center">
            <a
              class="py-2 px-3 mx-2 text-xl"
              href="https://arxiv.org/pdf/2011.13160.pdf"
              ><font-awesome-icon :icon="['fas', 'file-pdf']"
            /></a>
            <a
              class="py-2 px-3 mx-2 text-xl"
              href="https://github.com/hughplay/TVR"
              ><font-awesome-icon :icon="['fab', 'github']"
            /></a>
          </div>
        </div>
      </div>
    </nav>

    <router-view class="min-h-screen" />
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: 'Transformation Driven Visual Reasoning',
    titleTemplate: '%s | TVR',
    meta: [
      {
        name: 'description',
        content:
          "We define a new visual reasoning paradigm by introducing an important factor, i.e., transformation. The motivation comes from the fact that most existing visual reasoning tasks, such as CLEVR in VQA, are solely defined to test how well the machine understands the concepts and relations within static settings, like one image. We argue that this kind of state driven visual reasoning approach has limitations in reflecting whether the machine has the ability to infer the dynamics between different states, which has been shown as important as state-level reasoning for human cognition in Piaget's theory. To tackle this problem, we propose a novel transformation driven visual reasoning task. Given both the initial and final states, the target is to infer the corresponding single-step or multi-step transformation, represented as a triplet (object, attribute, value) or a sequence of triplets, respectively.",
      },
    ],
  },
  data() {
    return {
      menu_visible: false,
    };
  },
  computed: {
    current_page: function () {
      return this.$route.path;
    },
  },
};
</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
