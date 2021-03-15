<template>
  <div>
    <div class="border-b border-gray">
      <div class="max-w-5xl mx-auto px-2 sm:px-6 lg:px-8 py-12">
        <div class="">
          <p class="text-2xl font-bold text-blue-800">
            Select a setting to explore
          </p>
          <div class="flex mt-8 space-x-2">
            <div
              class="font-bold bg-white hover:bg-blue-700 hover:text-white text-sm border-2 py-1 px-3 rounded shadow cursor-pointer transition-all duration-100"
              v-bind:class="{
                'border-blue-700': setting == 'basic',
                'text-blue-800': setting == 'basic',
                'border-gray-500': setting != 'basic',
                'text-gray-700': setting != 'basic',
              }"
              @click="setting = 'basic'"
            >
              Basic
            </div>
            <div
              class="font-bold bg-white hover:bg-blue-700 hover:text-white text-sm border-2 py-1 px-3 rounded shadow cursor-pointer transition-all duration-100"
              v-bind:class="{
                'border-blue-700': setting == 'event',
                'text-blue-800': setting == 'event',
                'border-gray-500': setting != 'event',
                'text-gray-700': setting != 'event',
              }"
              @click="setting = 'event'"
            >
              Event
            </div>
            <div
              class="font-bold bg-white hover:bg-blue-700 hover:text-white text-sm border-2 py-1 px-3 rounded shadow cursor-pointer transition-all duration-100"
              v-bind:class="{
                'border-blue-700': setting == 'view',
                'text-blue-800': setting == 'view',
                'border-gray-500': setting != 'view',
                'text-gray-700': setting != 'view',
              }"
              @click="setting = 'view'"
            >
              View
            </div>
          </div>
          <div class="mt-2 ml-2">
            <!-- <p class="mb-1 text-xl font-bold text-blue-800">Description:</p> -->
            <p v-if="setting == 'basic'">Single-step transformation.</p>
            <p v-else-if="setting == 'event'">Multi-step transformation.</p>
            <p v-else>Multi-step transformation with view variants.</p>
          </div>
          <div class="flex space-x-2 mt-8">
            <div
              class="font-bold bg-white text-sm border-2 py-1 px-3 rounded cursor-default shadow transition-all duration-100"
              v-bind:class="{
                'border-blue-700': current_idx > 0,
                'text-blue-800': current_idx > 0,
                'hover:bg-blue-700': current_idx > 0,
                'cursor-pointer': current_idx > 0,
                'hover:text-white': current_idx > 0,
                'border-gray-500': current_idx <= 0,
                'text-gray-700': current_idx <= 0,
              }"
              @click="previous_sample"
            >
              Previous Sample
            </div>
            <div
              class="font-bold bg-white text-sm border-2 py-1 px-3 rounded cursor-default shadow transition-all duration-100"
              v-bind:class="{
                'border-blue-700': current_idx + 1 < current_samples.length,
                'hover:bg-blue-700': current_idx + 1 < current_samples.length,
                'hover:text-white': current_idx + 1 < current_samples.length,
                'text-blue-800': current_idx + 1 < current_samples.length,
                'cursor-pointer': current_idx + 1 < current_samples.length,
                'border-gray-500': current_idx + 1 >= current_samples.length,
                'text-gray-700': current_idx + 1 >= current_samples.length,
              }"
              @click="next_sample"
            >
              Next Sample
            </div>
          </div>
          <div class="flex">
            <div class="flex flex-col items-center">
              <div
                class="mt-5 flex flex-col border-2 border-black rounded-xl shadow-lg px-5 py-3"
              >
                <div class="flex items-center sm:space-x-6">
                  <div>
                    <p class="font-bold font-serif">
                      Initial State
                      <span class="text-yellow-800 italic text-lg">S</span>
                    </p>
                    <img
                      :src="current_init"
                      width="160"
                      height="120"
                      alt=""
                      @click="current_diagram = 'init'"
                      class="cursor-pointer"
                    />
                  </div>
                  <div class="pt-5">
                    <img
                      class="w-32 sm:w-48 object-contain"
                      src="@/assets/images/question.jpg"
                      alt=""
                    />
                  </div>
                  <div>
                    <p class="font-bold font-serif">
                      Final State
                      <span class="text-yellow-800 italic text-lg">S'</span>
                    </p>
                    <img
                      :src="current_fin"
                      width="160"
                      height="120"
                      alt=""
                      @click="current_diagram = 'fin'"
                      class="cursor-pointer"
                    />
                  </div>
                </div>
                <p class="text-xs text-gray-600 pt-2 italic">
                  *Click the image to change the diagram below.
                </p>
              </div>
              <div class="flex flex-col sm:flex-row">
                <div class="flex">
                  <div id="diagram" class="font-serif mx-auto sm:mx-0"></div>
                </div>
                <div class="flex mt-5 font-serif sm:self-start self-center">
                  <div
                    class="border-2 px-3 py-2 rounded border-black border-dashed"
                  >
                    <p class="font-bold text-base">Reference Transformation</p>
                    <table class="table-auto mx-auto" v-if="this.current_sample">
                      <tr class="text-sm border-b-2 border-gray-700">
                        <th class="px-1 py-2">Step</th>
                        <th class="px-1">Object</th>
                        <th class="px-1">Attribute</th>
                        <th class="px-1">Value</th>
                      </tr>
                      <tr
                        v-for="(t, i) in this.current_sample.transformations"
                        :key="'t' + i"
                        class="font-bold"
                      >
                        <td class="italic text-xl text-center align-middle">
                          {{ i + 1 }}.
                        </td>
                        <td>
                          <div class="flex justify-center">
                            <p
                              class="border-2 rounded-full border-black w-6 h-6 text-center"
                            >
                              {{ t.obj_idx }}
                            </p>
                          </div>
                        </td>
                        <td class="text-center text-sm">{{ t.attr }}</td>
                        <td class="pt-2">
                          <div
                            v-if="lodash.isArray(t.val)"
                            class="flex space-x-2"
                          >
                            <img
                              v-for="val in t.val"
                              :key="'t_val_' + val"
                              :src="get_icon_url(val)"
                              alt=""
                              class="object-contain h-6"
                              v-bind:class="{
                                'w-6': lodash.split(val, '-').length == 1,
                                'w-4': lodash.split(val, '-').length == 2,
                                'mx-1': lodash.split(val, '-').length == 2,
                                'w-12': val == '2',
                              }"
                            />
                          </div>
                          <div v-else class="flex justify-center">
                            <img
                              :src="get_icon_url(t.val)"
                              alt=""
                              class="w-6 object-contain h-6"
                            />
                          </div>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="border-b border-gray">
      <div class="max-w-5xl mx-auto px-2 sm:px-6 lg:px-8 py-12">
        <div class="">
          <p class="text-2xl font-bold text-blue-800">
            Available Attributes and Values for Transformation
          </p>
          <div class="font-serif font-bold mt-5">
            <div
              v-for="(options, attr) in values"
              :key="'attr' + attr"
              class=""
            >
              <div class="flex">
                <div class="flex border-r-2 border-gray-500">
                  <div class="text-xl w-24 self-center pr-4">
                    <p class="text-right">{{ attr }}</p>
                    <p class="text-gray-500 text-right text-base self-end">
                      ×
                      <span v-if="lodash.isArray(options)">
                        {{ options.length }}
                      </span>
                      <span v-else>{{
                        lodash.reduce(
                          lodash.map(options, (x) => {
                            return x.length;
                          }),
                          (x, y) => {
                            return x * y;
                          }
                        )
                      }}</span>
                    </p>
                  </div>
                </div>
                <div
                  v-if="lodash.isArray(options)"
                  class="flex flex-wrap pl-2 my-3"
                >
                  <div v-for="val in options" :key="'val' + val">
                    <img
                      class="w-8 h-8 mx-4 object-contain"
                      :src="get_icon_url(val)"
                      alt=""
                    />
                    <p class="text-center italic">{{ val }}</p>
                  </div>
                </div>
                <div v-else class="my-3">
                  <div
                    v-for="(sub_options, sub_attr) in options"
                    :key="'sub_attr' + sub_attr"
                  >
                    <div class="flex">
                      <div class="flex text-right border-r-2 border-gray-500">
                        <div class="pr-4 self-center">
                          <p class="text-lg w-24">{{ sub_attr }}</p>
                          <p
                            class="text-gray-500 text-right text-base self-end"
                          >
                            ×
                            <span>
                              {{ sub_options.length }}
                            </span>
                          </p>
                        </div>
                      </div>
                      <div class="flex items-bottom flex-wrap my-3">
                        <div v-for="val in sub_options" :key="'val' + val">
                          <img
                            class="mx-5 h-8 object-contain"
                            :src="get_icon_url(val)"
                            v-bind:class="{
                              'w-8': lodash.split(val, '-').length == 1,
                              'w-6': lodash.split(val, '-').length == 2,
                              'w-16': val == '2 step',
                            }"
                            alt=""
                          />
                          <p
                            class="text-center italic"
                            v-for="word in lodash.split(val, '-')"
                            :key="val + word"
                          >
                            {{ word }}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-2 text-sm">
              <p>Total attributes: 5</p>
              <p>Total Values: 33</p>
              <p class="italic">*: existing values in CLEVR</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import samples from "../assets/trance/data.json";
import _ from "lodash";

import { Diagram } from "../js/diagram";

export default {
  metaInfo: {
    title: "Explore",
  },
  data() {
    return {
      lodash: _,
      setting: "basic",
      samples: samples,
      current_samples: [],
      current_idx: 0,
      views: ["Camera_Center", "Camera_Left", "Camera_Right"],
      default_view: "Camera_Center",
      current_final_view: "Camera_Center",
      diagram_scale: 3.5,
      current_diagram: "init",
      values: {
        size: ["small*", "medium", "large*"],
        shape: ["cube*", "sphere*", "cylinder*"],
        material: ["glass", "metal*", "rubber*"],
        color: [
          "yellow*",
          "gray*",
          "cyan*",
          "blue*",
          "brown*",
          "green*",
          "red*",
          "purple*",
        ],
        position: {
          direction: [
            "front",
            "behind",
            "left",
            "right",
            "front-right",
            "behind-right",
            "front-left",
            "behind-left",
          ],
          step: ["1 step", "2 step"],
        },
      },
    };
  },
  mounted() {
    this.reset();
  },
  methods: {
    reset: function () {
      var samples = []
      if (this.setting == 'basic') {
        samples = _.filter(this.samples, (s) => {return s['transformations'].length == 1;})
      } else {
        samples = this.samples;
      }
      this.current_samples = _.shuffle(samples);
      this.current_idx = 0;
      this.current_diagram = "init";
    },
    previous_sample: function () {
      if (this.current_idx > 0) {
        this.current_idx -= 1;
      }
    },
    next_sample: function () {
      if (this.current_idx + 1 < this.current_samples.length) {
        this.current_idx += 1;
      }
    },
    get_trance_url: function (name) {
      return require("../assets/trance/image/" + name);
    },
    get_icon_url: function (name) {
      name = _.replace(name, "*", "");
      if (name == "1" || name == "2") {
        name = name + " step";
      }
      return require("../assets/images/icons/" + name + ".svg");
    },
  },
  computed: {
    current_sample: function () {
      if (this.current_idx >= 0 && this.current_samples.length > this.current_idx) {
        return this.current_samples[this.current_idx];
      } else {
        return {};
      }
    },
    current_init: function () {
      if (this.current_sample.states) {
        return this.get_trance_url(
          this.current_sample["states"][0]["images"][this.default_view]
        );
      } else {
        return "";
      }
    },
    current_fin: function () {
      if (this.current_sample.states) {
        return this.get_trance_url(
          _.last(this.current_sample["states"])["images"][
            this.current_final_view
          ]
        );
      } else {
        return "";
      }
    },
    current_init_objs: function () {
      if (!_.isUndefined(this.current_sample.states)) {
        return this.current_sample.states[0].objects;
      } else {
        return [];
      }
    },
    current_fin_objs: function () {
      if (!_.isUndefined(this.current_sample.states)) {
        return _.last(this.current_sample.states).objects;
      } else {
        return [];
      }
    },
    current_objs: function () {
      if (this.current_diagram == "fin") {
        return this.current_fin_objs;
      } else {
        return this.current_init_objs;
      }
    },
  },
  watch: {
    current_sample: function () {
      if (this.setting == "view") {
        this.current_final_view = _.sample(this.views);
      } else {
        this.current_final_view = this.default_view;
      }
    },
    current_objs: function () {
      if (this.current_objs.length > 0) {
        Diagram.update_diagram("diagram", this.current_objs, this.diagram_scale);
      }
    },
    setting: function () {
      this.reset();
    },
  },
};
</script>