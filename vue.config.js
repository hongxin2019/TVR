module.exports = {
  publicPath: '/TVR/',
  pluginOptions: {
    sitemap: {
      outputDir: 'public',
      pretty: true,
      urls: [
        'https://hongxin2019.github.io/TVR/',
        'https://hongxin2019.github.io/TVR/dataset',
        'https://hongxin2019.github.io/TVR/leaderboard',
        'https://hongxin2019.github.io/TVR/try',
      ],
    },
  },
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = 'TVR: Transformation Driven Visual Reasoning';
      args[0].description =
        "We define a new visual reasoning paradigm by introducing an important factor, i.e., transformation. The motivation comes from the fact that most existing visual reasoning tasks, such as CLEVR in VQA, are solely defined to test how well the machine understands the concepts and relations within static settings, like one image. We argue that this kind of state driven visual reasoning approach has limitations in reflecting whether the machine has the ability to infer the dynamics between different states, which has been shown as important as state-level reasoning for human cognition in Piaget's theory. To tackle this problem, we propose a novel transformation driven visual reasoning task. Given both the initial and final states, the target is to infer the corresponding single-step or multi-step transformation, represented as a triplet (object, attribute, value) or a sequence of triplets, respectively.";
      return args;
    });
  },
};
