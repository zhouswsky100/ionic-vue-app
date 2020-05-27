<template>
    <header class="header-wrapper">
      <div class="left">
        <slot name="left"></slot>
      </div>
      <div class="title title-center header-item"  v-text="activeTab"></div>
      <div class="right">
        <slot name="right"></slot>
      </div>
    </header>
</template>

<script>
import {timeStrToDate} from '@/common/js/timeFormat'
export default {
    props: {
        activeTab: {
            type: String,
            default: '首页'
        },
    },
    data() {
        return {
        }
    },
    created() {
    },
    methods: {
    }
}
</script>

<style lang="less" scoped>
  .header-wrapper {
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    border-bottom: solid 1px #ddd;
    .left{
          position: relative;
          left: 5px;
          font-size: 13px;
    }
    .right{
          position: relative;
          right: 5px;
          font-size: 13px;
    }
  }
</style>
