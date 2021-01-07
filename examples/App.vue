<template>
  <div id="app">
    <breadCrumNav />
  </div>
</template>

<script>

import breadCrumNav from '../packages/breadCrumNav/src/breadNav'
export default {
  name: "App",
  data() {
    return {
      breadNavList: [
        {
          id: "0",
          name: "所有商品",
          url: "/home1",
          menu: [
            {
              id: "0-0",
              name: "女装",
              url: "/home2",
              menu: [
                {
                  id: "0-0-0",
                  name: "连衣裙",
                  url: "/home3",
                },
              ],
            },
          ],
        },
        {
          id: "1",
          name: "主页",
          url: "/",
        },
      ],
    };
  },
  components: {
    breadCrumNav
  },
  methods: {
    changeBread(item) {
      this.$router.push({
        path: item.url,
      });
    },
  },
};
</script>

<style>
</style>
