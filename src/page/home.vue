<template>
  <div class="me">
    <ion-app>
      <keep-alive>
        <my-header :activeTab="activeTab"> 
          <div slot="left">去分享</div>  
          <div slot="right">去快乐</div>  
        </my-header>
      </keep-alive>
      <ion-content>
        <my-tabs></my-tabs>
      </ion-content>
    </ion-app>
  </div>
</template>

<script type='text/ecmascript-6'>
import MyHeader from '@/components/Header/Header';
import MyTabs from '@/components/Tabs/Tabs';

export default {
    data() {
        return {
            activeTab: '首页'
        };
    },
    created() {
      
    },
    watch: {},
    methods: {
    },
    components: {
        'my-header': MyHeader,
        'my-tabs': MyTabs
    }
};
</script>

<style lang='less' scoped>
</style>
