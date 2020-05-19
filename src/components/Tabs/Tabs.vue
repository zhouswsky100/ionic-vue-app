<template>
  <div class="tabs">
    <div @click="activeTab = item.name" class="each-tabs" v-for="item of tabsData" :key="item.name" :class="[item.name == activeTab ?  'active' : '']">
      <div class="icon">
        <icon-svg :icon-class="item.icon" />
      </div>
      <div class="name">
        {{item.name}}
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
    data() {
      return {
        activeTab: 'kpi',
        tabsData:[ {name: '创新', icon: 'kpi'}, {name: '首页', icon: 'shishi'}, {name: '我的', icon: 'wode'}]
      }
    },
    created(){
        let activeTab = this.$route.path.split('/')[1];
        switch (activeTab) {
            case '首页':
                this.activeTab = '首页';
                break;
            case '创新':
                this.activeTab = '创新';
                break;
            case '我的':
                this.activeTab = '我的';
                break;
        }
    },
    watch: {
        $route() {
            let activeTab = this.$route.path.split('/')[1];
            switch (activeTab) {
              case '首页':
                this.activeTab = '首页';
                break;
              case '创新':
                this.activeTab = '创新';
                break;
              case '我的':
                this.activeTab = '我的';
                break;
            }
        },
        activeTab(newValue) {
            this.activeTab = newValue;
            switch (newValue) {
                case '首页':
                    this.$router.push({path: '/Index'})
                    break;
                case '创新':
                    this.$router.push({path: '/About'})
                    break;
                case '我的':
                    this.$router.push({path: '/Me'})
                    break;
            }
        }
    }
}
</script>

<style lang="less" scoped>
  @import "../../common/css/index.less";
  .tabs {
    position: absolute;
    bottom: 0;
    display: flex;
    width: 100vw;
    border-top: solid 1px #eee;
    z-index: 1000;
    background: #fff;
    .each-tabs {
      flex: 1;
      display: flex;
      flex-direction: column;
      color: @font-dark-color;
      .icon {
        height: 29px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;
      }
      .name {
        height: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 10px;
      }
      &.active {
        color: @font-active-color;
      }
    }
  }
</style>
