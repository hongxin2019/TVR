<template>
  <div>
    <div class="border-b">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p class="text-blue-900 text-2xl font-bold">Download</p>
        <p class="mt-6">TRANCE is hosted on Kaggle and can be downloaded:</p>
        <div class="ml-6">
          <p class="mt-2">
            1. from the link on
            <a
              class="text-blue-700 hover:text-blue-500 font-bold"
              href="https://www.kaggle.com/silverhugh/trance"
              >kaggle page</a
            >,
          </p>
          <p class="mt-2">
            2. or using
            <a
              class="text-blue-700 hover:text-blue-500 font-bold"
              href="https://github.com/Kaggle/kaggle-api"
              >kaggle-api</a
            >.
          </p>
          <p class="mt-2 font-mono bg-gray-100 py-1 rounded px-4 shadow-sm">
            > kaggle datasets download -d silverhugh/trance
          </p>
        </div>
        <p class="mt-6">There are three items in the released dataset:</p>
        <ul class="mt-2 ml-6 space-y-2 list-disc list-inside">
          <li class="pt-1 text-gray-700 text-sm">
            <span
              class="text-blue-800 font-bold text-sm border-l-2 border-blue-700 shadow bg-gray-100 py-1 px-2 font-mono"
              >data.josnl</span
            >
            The metadata information of all samples.
          </li>
          <li class="pt-1 text-gray-700 text-sm">
            <span
              class="text-blue-800 font-bold text-sm border-l-2 border-blue-700 shadow bg-gray-100 py-1 px-2 font-mono"
              >data_renderable.josnl</span
            >
            The metadata information of all samples which contains additional
            information for rendering higher resolution images.
          </li>
          <li class="pt-1 text-gray-700 text-sm">
            <span
              class="text-blue-800 font-bold text-sm border-l-2 border-blue-700 shadow bg-gray-100 py-1 px-2 font-mono"
              >image</span
            >
            The image folder contains all images with the resolution of 160 ×
            120. Higher resolution images can be rendered by using our
            <a
              class="text-blue-700 hover:text-blue-500 font-bold"
              href="https://github.com/hughplay/TVR"
              >code</a
            >
            .
          </li>
        </ul>
      </div>
    </div>
    <div class="border-b">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b">
        <div>
          <p class="text-blue-900 text-2xl font-bold">Data Description</p>
          <p class="mt-6">
            There are <b>530k</b> samples in total. <b>Train (500k)</b>,
            <b>validation (10k)</b>, and <b>test (20k)</b> sets are splitted
            without shuffling.
          </p>
          <p class="mt-2">
            The dataset consists of <i>image</i> and <i>metadata files</i>.
            Metadata file is a jsonl file, where each line is a JSON object.
            Here are the important things from the metadata:
          </p>
          <div class="mt-3">
            <ul class="ml-6 space-y-2 list-disc list-inside">
              <li class="pt-1 text-gray-700 text-sm">
                <span
                  class="text-blue-800 font-bold text-sm border-l-2 border-blue-700 shadow bg-gray-100 py-1 px-2 font-mono"
                  >idx</span
                >
                <span
                  class="font-mono text-sm bg-gray-100 shadow-sm text-gray-600 font-bold px-2 py-1 rounded-r border-l-2 border-gray-200"
                  >int</span
                >
                The index of the sample.
              </li>
              <li class="pt-1 text-gray-700 text-sm">
                <span
                  class="text-blue-800 font-bold text-sm border-l-2 border-blue-700 shadow bg-gray-100 py-1 px-2 font-mono"
                  >states</span
                >
                <span
                  class="font-mono text-sm bg-gray-100 shadow-sm text-gray-600 font-bold px-2 py-1 rounded-r border-l-2 border-gray-200"
                  >list</span
                >
                A list of states. Each state contains the following properties:
                <ul class="ml-6 mt-2 space-y-2 list-disc list-inside">
                  <li class="pt-1 text-gray-700 text-sm">
                    <span
                      class="text-blue-800 font-bold text-sm border-l-2 border-blue-700 shadow bg-gray-100 py-1 px-2 font-mono"
                      >objects</span
                    >
                    <span
                      class="font-mono text-sm bg-gray-100 shadow-sm text-gray-600 font-bold px-2 py-1 rounded-r border-l-2 border-gray-200"
                      >list</span
                    >
                    A list of objects. Each object contains the following
                    properties:
                    <ul class="ml-6 mt-2 space-y-2 list-disc list-inside">
                      <li class="pt-1 text-gray-700 text-sm">
                        <span
                          class="text-blue-800 font-bold text-sm border-l-2 border-blue-700 shadow bg-gray-100 py-1 px-2 font-mono"
                          >color</span
                        >
                        <span
                          class="font-mono text-sm bg-gray-100 shadow-sm text-gray-600 font-bold px-2 py-1 rounded-r border-l-2 border-gray-200"
                          >string</span
                        >
                        One of 8 colors include gray, red, blue, green, brown,
                        purple, cyan, and yellow.
                      </li>
                      <li class="pt-1 text-gray-700 text-sm">
                        <span
                          class="text-blue-800 font-bold text-sm border-l-2 border-blue-700 shadow bg-gray-100 py-1 px-2 font-mono"
                          >material</span
                        >
                        <span
                          class="font-mono text-sm bg-gray-100 shadow-sm text-gray-600 font-bold px-2 py-1 rounded-r border-l-2 border-gray-200"
                          >string</span
                        >
                        One of 3 materials include glass, metal, and rubber.
                      </li>
                      <li class="pt-1 text-gray-700 text-sm">
                        <span
                          class="text-blue-800 font-bold text-sm border-l-2 border-blue-700 shadow bg-gray-100 py-1 px-2 font-mono"
                          >shape</span
                        >
                        <span
                          class="font-mono text-sm bg-gray-100 shadow-sm text-gray-600 font-bold px-2 py-1 rounded-r border-l-2 border-gray-200"
                          >string</span
                        >
                        One of 3 shapes include cube, cylinder, and sphere.
                      </li>
                      <li class="pt-1 text-gray-700 text-sm">
                        <span
                          class="text-blue-800 font-bold text-sm border-l-2 border-blue-700 shadow bg-gray-100 py-1 px-2 font-mono"
                          >size</span
                        >
                        <span
                          class="font-mono text-sm bg-gray-100 shadow-sm text-gray-600 font-bold px-2 py-1 rounded-r border-l-2 border-gray-200"
                          >string</span
                        >
                        One of three sizes include small, meduim, and large.
                      </li>
                      <li class="pt-1 text-gray-700 text-sm">
                        <span
                          class="text-blue-800 font-bold text-sm border-l-2 border-blue-700 shadow bg-gray-100 py-1 px-2 font-mono"
                          >position</span
                        >
                        <span
                          class="font-mono text-sm bg-gray-100 shadow-sm text-gray-600 font-bold px-2 py-1 rounded-r border-l-2 border-gray-200"
                          >list of int</span
                        >
                        The coordinate of the object representes as
                        <span class="font-mono text-sm">[x, y]</span>.
                      </li>
                    </ul>
                  </li>
                  <li class="pt-1 text-gray-700 text-sm">
                    <span
                      class="text-blue-800 font-bold text-sm border-l-2 border-blue-700 shadow bg-gray-100 py-1 px-2 font-mono"
                      >images</span
                    >
                    <span
                      class="font-mono text-sm bg-gray-100 shadow-sm text-gray-600 font-bold px-2 py-1 rounded-r border-l-2 border-gray-200"
                      >dict</span
                    >
                    Available images of the current state. The key is the name
                    of the camera and the value is the filename of the
                    corresponding image captured by this camera.
                  </li>
                </ul>
              </li>
              <li class="pt-1 text-gray-700 text-sm">
                <span
                  class="text-blue-800 font-bold text-sm border-l-2 border-blue-700 shadow bg-gray-100 py-1 px-2 font-mono"
                  >transformatons</span
                >
                <span
                  class="font-mono text-sm bg-gray-100 shadow-sm text-gray-600 font-bold px-2 py-1 rounded-r border-l-2 border-gray-200"
                  >list</span
                >
                A list of atomic transformations. Each transformation contains
                the following properties:
                <ul class="ml-6 mt-2 space-y-2 list-disc list-inside">
                  <li class="pt-1 text-gray-700 text-sm">
                    <span
                      class="text-blue-800 font-bold text-sm border-l-2 border-blue-700 shadow bg-gray-100 py-1 px-2 font-mono"
                      >obj_idx</span
                    >
                    <span
                      class="font-mono text-sm bg-gray-100 shadow-sm text-gray-600 font-bold px-2 py-1 rounded-r border-l-2 border-gray-200"
                      >int</span
                    >
                    The index of the transformed object.
                  </li>
                  <li class="pt-1 text-gray-700 text-sm">
                    <span
                      class="text-blue-800 font-bold text-sm border-l-2 border-blue-700 shadow bg-gray-100 py-1 px-2 font-mono"
                      >attr</span
                    >
                    <span
                      class="font-mono text-sm bg-gray-100 shadow-sm text-gray-600 font-bold px-2 py-1 rounded-r border-l-2 border-gray-200"
                      >string</span
                    >
                    The transformed attribute. One of 5 attributes include
                    color, material, position, shape, and size.
                  </li>
                  <li class="pt-1 text-gray-700 text-sm">
                    <span
                      class="text-blue-800 font-bold text-sm border-l-2 border-blue-700 shadow bg-gray-100 py-1 px-2 font-mono"
                      >val</span
                    >
                    <span
                      class="font-mono text-sm bg-gray-100 shadow-sm text-gray-600 font-bold px-2 py-1 rounded-r border-l-2 border-gray-200"
                      >string / list</span
                    >
                    The value of the transformed attribute. If the attr is
                    position, then the value is a list contains direction
                    (string) and step (int), otherwise it is a string.
                  </li>
                  <li class="pt-1 text-gray-700 text-sm">
                    <span
                      class="text-blue-800 font-bold text-sm border-l-2 border-blue-700 shadow bg-gray-100 py-1 px-2 font-mono"
                      >options</span
                    >
                    <span
                      class="font-mono text-sm bg-gray-100 shadow-sm text-gray-600 font-bold px-2 py-1 rounded-r border-l-2 border-gray-200"
                      >list</span
                    >
                    All feasible target values. It takes effects when one object
                    is moved out, there might be several feasible moving options
                    leading to the same visual result (the object disapears from
                    the image).
                  </li>
                </ul>
              </li>
              <li class="pt-1 text-gray-700 text-sm">
                <span
                  class="text-blue-800 font-bold text-sm border-l-2 border-blue-700 shadow bg-gray-100 py-1 px-2 font-mono"
                >
                  cameras</span
                >
                <span
                  class="font-mono text-sm bg-gray-100 shadow-sm text-gray-600 font-bold px-2 py-1 rounded-r border-l-2 border-gray-200"
                  >dict</span
                >
                The coordinates of cameras. Essential for rendering higher
                resolution images.
              </li>
              <li class="pt-1 text-gray-700 text-sm">
                <span
                  class="text-blue-800 font-bold text-sm border-l-2 border-blue-700 shadow bg-gray-100 py-1 px-2 font-mono"
                  >lamps</span
                >
                <span
                  class="font-mono text-sm bg-gray-100 shadow-sm text-gray-600 font-bold px-2 py-1 rounded-r border-l-2 border-gray-200"
                  >dict</span
                >
                The coordinates of lamps. Essential for rendering higher
                resolution images.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="border-b">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b">
        <div>
          <p class="text-blue-900 text-2xl font-bold">Example</p>
          <p class="mt-6">We show a sample below as an example.</p>
          <pre
            class="border mt-2 p-5 text-xs overflow-auto rounded"
            style="height: 720px"
          ><code class="json">{
    "idx":1,
    "states":[
        {
            "objects":[
                {'color': 'yellow', 'material': 'metal', 'shape': 'cylinder', 'size': 'large', 'position': [20, -36]}
                {'color': 'gray', 'material': 'rubber', 'shape': 'sphere', 'size': 'medium', 'position': [-20, -3]}
                {'color': 'brown', 'material': 'glass', 'shape': 'cylinder', 'size': 'large', 'position': [32, 40]}
                {'color': 'yellow', 'material': 'metal', 'shape': 'cube', 'size': 'medium', 'position': [4, -19]}
                {'color': 'green', 'material': 'glass', 'shape': 'sphere', 'size': 'medium', 'position': [12, 14]}
                {'color': 'red', 'material': 'metal', 'shape': 'cylinder', 'size': 'large', 'position': [-37, 38]}
                {'color': 'blue', 'material': 'rubber', 'shape': 'sphere', 'size': 'small', 'position': [-39, 24]}
                {'color': 'yellow', 'material': 'metal', 'shape': 'cylinder', 'size': 'small', 'position': [-9, 39]}
                {'color': 'green', 'material': 'glass', 'shape': 'cylinder', 'size': 'small', 'position': [-4, 15]}
                {'color': 'cyan', 'material': 'rubber', 'shape': 'sphere', 'size': 'large', 'position': [18, -21]}
            ],
            "images":{
                "Camera_Center":"img_000001-init.C.png"
            }
        },
        {
            "objects":[
                {'color': 'yellow', 'material': 'metal', 'shape': 'cylinder', 'size': 'large', 'position': [20, -36]}
                {'color': 'gray', 'material': 'rubber', 'shape': 'sphere', 'size': 'medium', 'position': [-30, -13]}
                {'color': 'brown', 'material': 'glass', 'shape': 'cylinder', 'size': 'large', 'position': [32, 40]}
                {'color': 'gray', 'material': 'metal', 'shape': 'cube', 'size': 'medium', 'position': [-6, -9]}
                {'color': 'red', 'material': 'glass', 'shape': 'sphere', 'size': 'medium', 'position': [12, 14]}
                {'color': 'red', 'material': 'metal', 'shape': 'cylinder', 'size': 'large', 'position': [-37, 38]}
                {'color': 'blue', 'material': 'rubber', 'shape': 'sphere', 'size': 'small', 'position': [-39, 24]}
                {'color': 'yellow', 'material': 'metal', 'shape': 'cylinder', 'size': 'small', 'position': [-9, 39]}
                {'color': 'green', 'material': 'glass', 'shape': 'cylinder', 'size': 'small', 'position': [-4, 15]}
                {'color': 'cyan', 'material': 'rubber', 'shape': 'sphere', 'size': 'large', 'position': [18, -21]}
            ],
            "images":{
                "Camera_Left":"img_000001-fin.L.png",
                "Camera_Right":"img_000001-fin.R.png",
                "Camera_Center":"img_000001-fin.C.png"
            }
        }
    ],
    "transformations":[
        {
            "obj_idx":3,
            "attr":"color",
            "val":"gray",
            "options":["gray"]
        },
        {
            "obj_idx":1,
            "attr":"position",
            "val":["front-left", 1],
            "options":[
                ['front-left', 1]
                ['front-left', 2]
                ['front-right', 1]
                ['front-right', 2]
                ['left', 2]
                ['behind-left', 2]
                ['front', 1]
                ['front', 2]
            ]
        },
        {
            "obj_idx":3,
            "attr":"position",
            "val":["front-right", 1],
            "options":[["front-right", 1]]
        },
        {
            "obj_idx":4,
            "attr":"color",
            "val":"red",
            "options":["red"]
        }
    ]
}</code></pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: 'TRANCE Dataset',
  },
};
</script>