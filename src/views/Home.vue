<template>
  <div>
    <div class="border-b border-gray">
      <div class="max-w-5xl mx-auto px-2 sm:px-6 lg:px-8 py-12">
        <p class="text-4xl text-center font-bold text-blue-900">
          <span class="font-extrabold">TVR:</span>
          Transformation Driven Visual Reasoning
        </p>
        <div class="flex justify-center mt-10">
          <img width="600" src="@/assets/images/tvr_web.svg" alt="" />
        </div>
        <p class="text-blue-900 text-2xl font-bold mt-10">Abstract</p>
        <p class="mt-2">
          We define a new visual reasoning paradigm by introducing an important
          factor, i.e., transformation. The motivation comes from the fact that
          most existing visual reasoning tasks, such as CLEVR in VQA, are solely
          defined to test how well the machine understands the concepts and
          relations within static settings, like one image. We argue that this
          kind of
          <span class="italic">state driven visual reasoning</span>
          approach has limitations in reflecting whether the machine has the
          ability to infer the dynamics between different states, which has been
          shown as important as state-level reasoning for human cognition in
          Piaget's theory. To tackle this problem, we propose a novel
          <span class="italic">transformation driven visual reasoning</span>
          task.
          <span class="text-red-900">
            Given both the initial and final states, the target is to infer the
            corresponding single-step or multi-step transformation, represented
            as a triplet
            <span class="italic tex">(object, attribute, value)</span> or a
            sequence of triplets, respectively.
          </span>
        </p>
      </div>
    </div>
    <div class="border-b border-gray">
      <div class="max-w-5xl mx-auto px-2 sm:px-6 lg:px-8 py-12">
        <p class="text-blue-900 text-2xl font-bold">News</p>
        <ul class="list-disc pl-10 mt-2">
          <li>
            <span class="font-bold mr-3">2020.12.09</span>
            <span
              >The code for data generation is ready at
              <a
                href="https://github.com/hughplay/TVR/tree/master/data/gen_src"
                class="text-blue-800 hover:text-blue-600"
                >Github</a
              >.</span
            >
          </li>
          <li>
            <span class="font-bold mr-3">2020.11.30</span>
            <span
              >Our paper <i>Transformation Driven Visual Reasoning</i> is
              available at
              <a
                href="https://arxiv.org/pdf/2011.13160.pdf"
                class="text-blue-800 hover:text-blue-600"
                >arXiv</a
              >.</span
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="border-b border-gray">
      <div class="max-w-5xl mx-auto px-2 sm:px-6 lg:px-8 py-12">
        <p class="text-blue-900 text-2xl font-bold">TRANCE Dataset</p>
        <p class="mt-2">
          Following the definition of TVR, a new dataset namely TRANCE is
          constructed on the basis of
          <a
            class="underline text-blue-800 hover:text-blue-600"
            href="https://cs.stanford.edu/people/jcjohns/clevr/"
            >CLEVR</a
          >, including three levels of settings, i.e., Basic, Event, and View.
          The additional attributes of initial objects are provided so that the
          objects can be referred with numbers.
        </p>
        <div class="flex mt-2 space-x-2">
          <div
            class="bg-white hover:bg-blue-700 border-blue-700 text-blue-800 hover:text-white text-sm border-2 py-1 px-3 rounded shadow cursor-pointer transition-all duration-100"
          >
            <router-link to="/dataset">Download Dataset</router-link>
          </div>
          <div
            class="italic bg-white hover:bg-blue-700 border-blue-700 text-blue-800 hover:text-white text-sm border-2 py-1 px-3 rounded shadow cursor-pointer transition-all duration-100"
          >
            <router-link to="/try">Try it!</router-link>
          </div>
        </div>
        <div class="mt-5 flex flex-wrap justify-between">
          <div>
            <p class="font-bold text-xl text-blue-900">Basic</p>
            <p class="text-xs">Single-step transformation.</p>
            <div class="flex mt-1">
              <font-awesome-icon :icon="['fas', 'star']" />
            </div>
            <div class="flex space-x-2 mt-6">
              <div>
                <p class="text-sm text-gray-700 font-bold">Initial State</p>
                <img
                  class="w-32"
                  src="@/assets/images/examples/basic_init.png"
                  alt=""
                />
              </div>
              <div>
                <p class="text-sm text-gray-700 font-bold">Final State</p>
                <img
                  class="w-32"
                  src="@/assets/images/examples/basic_fin.png"
                  alt=""
                />
              </div>
            </div>
            <div class="mt-5">
              <p class="text-sm text-gray-700 font-bold">
                Attributes of Initial Objects
              </p>
              <Attributes
                :attributes="require('@/assets/images/examples/basic_attr.svg')"
                :visualization="
                  require('@/assets/images/examples/basic_vis.svg')
                "
                :show="true"
              ></Attributes>
            </div>
            <div class="mt-5 border-t border-gray-300 pt-3">
              <p class="text-sm text-red-900 font-bold">
                Reference Transformations
              </p>
              <img
                class="w-48"
                src="@/assets/images/examples/basic_res.svg"
                alt=""
              />
            </div>
          </div>
          <div>
            <p class="font-bold text-xl text-blue-900">Event</p>
            <p class="text-xs">Multi-step transformation.</p>
            <div class="flex space-x-1 mt-1">
              <font-awesome-icon :icon="['fas', 'star']" />
              <font-awesome-icon :icon="['fas', 'star']" />
              <font-awesome-icon :icon="['fas', 'star']" />
            </div>
            <div class="flex space-x-2 mt-6">
              <div>
                <p class="text-sm text-gray-700 font-bold">Initial State</p>
                <img
                  class="w-32"
                  src="@/assets/images/examples/event_init.png"
                  alt=""
                />
              </div>
              <div>
                <p class="text-sm text-gray-700 font-bold">Final State</p>
                <img
                  class="w-32"
                  src="@/assets/images/examples/event_fin.png"
                  alt=""
                />
              </div>
            </div>
            <div class="mt-5">
              <p class="text-sm text-gray-700 font-bold">
                Attributes of Initial Objects
              </p>
              <div class="flex"></div>
              <Attributes
                :attributes="require('@/assets/images/examples/event_attr.svg')"
                :visualization="
                  require('@/assets/images/examples/event_vis.svg')
                "
                :show="true"
              ></Attributes>
            </div>
            <div class="mt-5 border-t border-gray-300 pt-3">
              <p class="text-sm text-red-900 font-bold">
                Reference Transformations
              </p>
              <img
                class="w-48"
                src="@/assets/images/examples/event_res.svg"
                alt=""
              />
            </div>
          </div>
          <div>
            <p class="font-bold text-xl text-blue-900">View</p>
            <p class="text-xs">Multi-step transformation with variant views.</p>
            <div class="flex space-x-1 mt-1">
              <font-awesome-icon :icon="['fas', 'star']" />
              <font-awesome-icon :icon="['fas', 'star']" />
              <font-awesome-icon :icon="['fas', 'star']" />
              <font-awesome-icon :icon="['fas', 'star']" />
            </div>
            <div class="flex space-x-2 mt-6">
              <div>
                <p class="text-sm text-gray-700 font-bold">Initial State</p>
                <img
                  class="w-32"
                  src="@/assets/images/examples/view_init.png"
                  alt=""
                />
              </div>
              <div>
                <div class="flex justify-between">
                  <p class="text-sm text-gray-700 font-bold">Final State</p>
                  <div class="flex text-xs items-center font-bold italic">
                    <div
                      @click="view = 'left'"
                      v-bind:class="{ 'text-red-800': view == 'left' }"
                      class="cursor-pointer px-1 text-gray-500"
                    >
                      L
                    </div>
                    <div
                      @click="view = 'center'"
                      v-bind:class="{ 'text-red-800': view == 'center' }"
                      class="cursor-pointer px-1 text-gray-500"
                    >
                      C
                    </div>
                    <div
                      @click="view = 'right'"
                      v-bind:class="{ 'text-red-800': view == 'right' }"
                      class="cursor-pointer px-1 text-gray-500"
                    >
                      R
                    </div>
                  </div>
                </div>
                <img
                  class="w-32"
                  :src="
                    require('@/assets/images/examples/view_fin_' +
                      view +
                      '.png')
                  "
                  alt=""
                />
              </div>
            </div>
            <div class="mt-5">
              <p class="text-sm text-gray-700 font-bold">
                Attributes of Initial Objects
              </p>
              <Attributes
                :attributes="require('@/assets/images/examples/view_attr.svg')"
                :visualization="
                  require('@/assets/images/examples/view_vis.svg')
                "
                :show="true"
              ></Attributes>
            </div>
            <div class="mt-5 border-t border-gray-300 pt-3">
              <p class="text-sm text-red-900 font-bold">
                Reference Transformations
              </p>
              <img
                class="h-32"
                src="@/assets/images/examples/view_res.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="border-b border-gray">
      <div class="max-w-5xl mx-auto px-2 sm:px-6 lg:px-8 py-12">
        <p class="text-blue-900 text-2xl font-bold">
          Transformation Driven Visual Reasoning
        </p>
        <div class="mt-2">
          <a href="https://arxiv.org/pdf/2011.13160.pdf">
            <img src="@/assets/images/tvr.png" alt="" />
          </a>
          <div class="flex">
            <div
              class="bg-white hover:bg-blue-700 border-blue-700 text-blue-800 hover:text-white text-sm border-2 py-1 px-3 rounded shadow cursor-pointer transition-all duration-100"
            >
              <a href="https://arxiv.org/pdf/2011.13160.pdf"> Read Paper </a>
            </div>
          </div>
        </div>
        <div class="">
          <p class="mt-6">If the paper inspires you, please cite us:</p>
          <div class="">
            <pre
              id="bibtex"
              class="overflow-auto mt-2 bg-gray-100 py-3 px-4 rounded border border-gray-400 text-xs"
            >
@article{hong2020tvr,
    title={Transformation Driven Visual Reasoning},
    author={Xin Hong, Yanyan Lan, Liang Pang, Jiafeng Guo and Xueqi Cheng},
    year = {2020},
    journal={arXiv}
}</pre
            >
          </div>
          <div class="flex mt-3 items-center">
            <div
              class="bg-white hover:bg-blue-700 border-blue-700 text-blue-800 hover:text-white text-sm border-2 py-1 px-3 rounded shadow cursor-pointer transition-all duration-100"
              @click="do_copy"
            >
              Copy
            </div>
            <p v-if="copied" class="ml-5 text-gray-600">copied!</p>
          </div>
        </div>
      </div>
    </div>
    <div class="border-b border-gray">
      <div class="max-w-5xl mx-auto px-2 sm:px-6 lg:px-8 py-12">
        <p class="text-blue-900 text-2xl font-bold">Authors</p>
        <div class="flex flex-col space-y-10 mt-10">
          <div class="flex flex-wrap space-x-10">
            <a href="https://hongxin2019.github.io/">
              <img
                class="w-24 h-24 object-cover rounded-full"
                src="@/assets/images/hongxin.jpg"
                alt=""
              />
              <p
                class="text-lg text-center text-blue-800 hover:text-blue-600 mt-2"
              >
                Xin Hong
              </p>
            </a>
            <a href="http://www.bigdatalab.ac.cn/~lanyanyan/">
              <img
                class="w-24 h-24 object-cover rounded-full"
                src="@/assets/images/lyy2018.jpg"
                alt=""
              />
              <p
                class="text-lg text-center text-blue-800 hover:text-blue-600 mt-2"
              >
                Yanyan Lan
              </p>
            </a>
            <a href="http://www.bigdatalab.ac.cn/~pangliang/">
              <img
                class="w-24 h-24 object-cover rounded-full"
                src="@/assets/images/pl.jpg"
                alt=""
              />
              <p
                class="text-lg text-center text-blue-800 hover:text-blue-600 mt-2"
              >
                Liang Pang
              </p>
            </a>
            <a href="http://www.bigdatalab.ac.cn/~gjf/">
              <img
                class="w-24 h-24 object-cover rounded-full"
                src="@/assets/images/gjf2.jpg"
                alt=""
              />
              <p
                class="text-lg text-center text-blue-800 hover:text-blue-600 mt-2"
              >
                Jiafeng Guo
              </p>
            </a>
            <a href="http://www.bigdatalab.ac.cn/~cxq/">
              <img
                class="w-24 h-24 object-cover rounded-full"
                src="@/assets/images/cxq.jpg"
                alt=""
              />
              <p
                class="text-lg text-center text-blue-800 hover:text-blue-600 mt-2"
              >
                Xueqi Cheng
              </p>
            </a>
          </div>
          <div class="flex space-x-6">
            <div class="flex flex-col justify-center">
              <a href="http://www.bigdatalab.ac.cn/lab/">
                <img class="h-20" src="@/assets/images/NDST_logo.png" alt="" />
              </a>
            </div>
            <div class="flex flex-col justify-center">
              <a href="http://www.ict.ac.cn/">
                <img class="h-20" src="@/assets/images/ICT_logo.png" alt="" />
              </a>
            </div>
            <div class="flex flex-col justify-center">
              <a href="http://english.ucas.ac.cn/">
                <img class="h-20" src="@/assets/images/CAS_logo.png" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="border-b border-gray">
      <div
        class="max-w-5xl mx-auto px-2 sm:px-6 lg:px-8 py-12 flex justify-center"
      >
        <div class="w-64" id="counter-wrap"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Attributes from '../components/Attributes';

export default {
  name: 'Home',
  components: {
    Attributes,
  },
  data() {
    return {
      copied: false,
      view: 'right',
    };
  },
  methods: {
    do_copy: function () {
      let self = this;
      this.$copyText(this.bibtex).then(function () {
        self.copied = true;
      });
    },
  },
  computed: {
    bibtex: function () {
      if (document.getElementById('bibtex')) {
        return document.getElementById('bibtex').innerText;
      } else {
        return '';
      }
    },
  },
  mounted() {
    let counter = document.createElement('script');
    counter.setAttribute(
      'src',
      '//cdn.clustrmaps.com/map_v2.js?cl=374151&w=a&t=tt&d=hwEsCIPToP-j-nRl-4V6BVcOko1v4asL7L2gX5vt1-s&co=ffffff&cmo=3acc3a&cmn=ff5353&ct=6b7280'
    );
    counter.setAttribute('id', 'clustrmaps');
    document.getElementById('counter-wrap').appendChild(counter);
  },
};
</script>
