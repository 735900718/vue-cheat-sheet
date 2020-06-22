<template>
  <div class="k-header">
    <nav>
      <div
        :class="{ active: item === currentTab }"
        v-for="(item, i) in tabs"
        :key="i"
        @click="handleClick(item)"
      >
        {{ item }}
      </div>
    </nav>
    <Github />
  </div>
</template>

<script>
import Github from "./Github";
export default {
  name: "k-header",
  props: {
    currentTab: String,
    tabs: Array
  },
  components: {
    Github
  },
  methods: {
    handleClick: function(item) {
      this.$emit("update:currentTab", item);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/config.scss";
nav {
  padding: 10px 10px 0;
  margin: 0 0 15px;
  display: flex;
  border-bottom: 1px solid #fff;
  font-size: 14px;
  div {
    cursor: pointer;
    padding: 10px 20px;
    border-left: 1px solid #fff;
    border-top: 1px solid #fff;
    opacity: .8;
    background: $c0;
    &.active {
      opacity: 1;
    }
    &:nth-child(1) {
      border-top-left-radius: 5px;
    }
    &:nth-last-child(1) {
      border-top-right-radius: 5px;
      border-right: 1px solid #fff;
    }
  }

}
</style>
