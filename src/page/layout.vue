<template>
  <div class="index">
     <ion-app>
      <router-view/>
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
