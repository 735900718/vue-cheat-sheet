<template>
  <div class="view-model">
    <ul
      class="menu-root"
      :style="{
        columnCount: $parent.currentTab === 'vue-router' ? 5 : ''
      }">
      <li
        v-for="(item, key, index) in link"
        :key="index"
        :class="item.title">
        <a @click="handleClick(item.url)">
          <small>{{item.title}}</small>
          {{key}}
        </a>
        <ul>
          <li v-for="(i, j) in item.sub" :key="j">
            <a @click="handleClick(i)">
              <span v-html="j"></span>
              <var v-if="/@/.test(i)">{{i | version}}</var>
            </a>
          </li>
        </ul>
      </li>
    </ul>
    <div class="modal" v-show="isShow" @click.self="handleClose">
      <button @click="handleClose">×</button>
      <iframe :src="currentLink" ref="iframe"></iframe>
    </div>
  </div>
</template>

<script>

export default {
  name: 'view-model',
  props: {
    link: Object,
    baseUrl: String
  },
  data () {
    return {
      current: '',
      isShow: false
    }
  },
  computed: {
    currentLink: function() {
      if (!this.current) return '';
      return this.baseUrl + (this.current.charAt(0) === '#' ? 'api/' : '') + this.current;
    }
  },
  methods: {
    handleClose: function() {
      this.isShow = false;
      this.current = this.current.slice(0, this.current.indexOf('#') + 1);
    },
    handleClick: function(href) {
      this.current = href.split('@')[0];
      this.isShow = true;
    }
  },
  filters: {
    version: function(val) {
      return val.split('@')[1];
    }
  }
}
</script>

<style lang="scss">
@import "../assets/config.scss";
.menu-root {
  padding: 10px;
  padding-bottom: 0;
  column-gap: 10px;
  column-count: 8;
}

.menu-root > .Global {background-color: $c1}
.menu-root > .Options {background-color: $c2}
.menu-root > .Methods {background-color: $c3}
.menu-root > .Instance {background-color: $c4}
.menu-root > .html {background-color: $c5}
.menu-root > .指令 {background-color: $c6}
.menu-root > .内置 {background-color: $c7}
.menu-root > .Modifiers {background-color: $c8}

.menu-root > .router-link {background-color: $c1}
.menu-root > .router-view {background-color: $c6}
.menu-root > .路由对象 {background-color: $c7}


.menu-root > li {
  background-color: $c0;
  padding: 10px;
  width: 100%;
  margin-bottom: 5px;
  border-radius: 10px;
  display: inline-block;
  break-inside: avoid;
  overflow: hidden;
}

.menu-root > li > a,
.menu-root > li > a > small {
  font-size: 14px;
  color: #343D46;
}

.menu-root > li > a > small {
  float: right;
}

.menu-root ul li a small {
  color: #C0C5CE;
  pointer-events: none;
}

.menu-root > li > a::first-line {
  font-size: 18px;
  color: black;
  font-weight: bold;
  margin-bottom: 5px;
  display: block;
}

.menu-root ul li a {
  cursor: pointer;
}

.menu-root var {
  font-size: 11px;
  font-style: normal;
  float: right;
  color: #eee;
  background-color: #343D46;
  padding: 2px 4px;
  border-radius: 5px;
}

.menu-root ul li:nth-child(odd) a {
  color: #e6e6e6;
  background-color: rgba(0,0,0,0.05);
}

a {
  border-radius: 10px;
  padding: 5px;
  text-decoration: none;
  color: inherit;
  display: block;
  cursor: default;
  outline: none;
}

.menu-root ul li a:hover, .menu-root ul li a:focus {
  background-color: rgba(255,255,255,0.1);
  color: black;
}

.modal {
  background: rgba(0, 0, 0, 0.75);
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
}

.modal.hidden {
  display: none;
}

iframe {
  z-index: 1;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 719px;
  border: none;
  background: #fff;
  border-radius: 5px;
}

.modal button {
  z-index: 2;
  border: 1px solid silver;
  background-color: white;
  border-radius: 50%;
  font-size: 35px;
  font-family: monospace;
  font-weight: bold;
  width: 50px;
  height: 50px;
  position: absolute;
  top: 5px;
  right: 5px;
  outline: none;
  cursor: pointer;
}

#modal button:hover {
  color: white;
  background-color: black;
}

@media (min-width : 1440px) {
  .menu-root > li:nth-child(2)
  ,.menu-root > li:nth-child(12)
  ,.menu-root > li:nth-child(14)
   {
    break-after: column;
  }
}

@media (max-width : 900px) {
  #iframe {
    margin-top: 0;
    margin-bottom: 0;
    flex-grow: 1;
    width: auto;
  }
}

@media (max-width : 480px) {
  .menu-root {
    column-count: 2;
  }
}

@media (min-width : 481px) and (max-width : 767px) {
  .menu-root {
    column-count: 3;
  }
}

@media (min-width : 768px) and (max-width : 1023px) {
  .menu-root {
    column-count: 4;
  }
}

@media (min-width : 1024px) and (max-width : 1279px) {
  .menu-root {
    column-count: 5;
  }
  .menu-root ul li a {
    padding: 2px 5px;
  }
}

@media (min-width : 1280px) and (max-width : 1439px) {
  .menu-root {
    column-count: 6;
  }
  .menu-root ul li a {
    padding: 3px 5px;
  }
}

@media (min-width : 1440px) and (max-width : 1679px) {
  .menu-root {
    column-count: 7;
  }
}

@media (min-width : 1680px) and (max-width : 1919px) {
  .menu-root {
    column-count: 8;
    font-size: 18px;
  }
}

@media print and (min-width : 1920px) {
  .menu-root {
    column-count: 9;
    font-size: 18px;
  }

  .menu-root > li:nth-child(8)
  ,.menu-root > li:nth-child(16)
  ,.menu-root > li:nth-child(19)
   {
    break-after: column;
  }

  .menu-root ul li {
    margin-bottom: 5px;
  }

  body {
    overflow: hidden;
  }
}

@media print and (max-width : 1920px) {
  .menu-root > li:nth-child(8)
   {
    break-after: column;
  }

  body {
    padding-bottom: 10px;
  }
}

@media screen and (min-width : 1920px) {
  a {
    padding: 10px 5px;
    line-height: 15px;
  }
}

@media print {
  .github-corner {
    display: none;
  }
}

</style>
