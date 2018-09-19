<template>
  <div class="k-header">
    <el-tabs v-model="active" type="card" @tab-click="handleClick">
      <el-tab-pane
        v-for="(item, i) in tabs"
        :key="i"
        :label="item"
        :name="item">{{ item }}</el-tab-pane>
    </el-tabs>
    <Github/>
  </div>
</template>

<script>
import Github from './Github'
export default {
  name: 'k-header',
  props: {
    currentTab: String,
    tabs: Array
  },
  data () {
    return {
      active: this.currentTab
    }
  },
  components: {
    Github
  },
  methods: {
    handleClick: function() {
      this.$emit('update:currentTab', this.active)
    }
  }
}
</script>

<style lang="scss">
@import '../assets/config.scss';
.el-tabs__header {
  padding: 10px 10px 0;
}
.el-tabs__content {
  display: none;
}
.el-tabs__item {
  color: #fff;
  opacity: 0.8;
  background: $c0;
  &:hover {
    color: #fff;
  }
  &.is-active {
    color: #fff;
    opacity: 1;
  }
}
.el-tabs--card>.el-tabs__header .el-tabs__item.is-active,
.el-tabs--card>.el-tabs__header,
.el-tabs--card>.el-tabs__header .el-tabs__nav{
  border-color: $c0;
}

</style>
