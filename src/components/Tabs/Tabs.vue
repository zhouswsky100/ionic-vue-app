<template>
  <ion-tabs>
    <ion-tab tab="me" >
    </ion-tab>
    <ion-tab tab="about">
    </ion-tab>
    <ion-tab tab="home">
    </ion-tab>
    <template slot="bottom">
        <ion-tab-bar>
            <ion-tab-button tab="home" @click="tabClick('3')">
            <ion-icon name="home"></ion-icon>
                <ion-label>首页</ion-label>
            </ion-tab-button>
            <ion-tab-button tab="about" @click="tabClick('2')">
                <ion-icon name="book"></ion-icon>
                <ion-label>看看</ion-label>
            </ion-tab-button>
            <ion-tab-button tab="me" @click="tabClick('1')">
                <ion-icon name="person"></ion-icon>
                <ion-label>我的</ion-label>
            </ion-tab-button>
        </ion-tab-bar>
    </template>
  </ion-tabs>
</template>

<script type="text/ecmascript-6">
import {
    mapState,
    mapActions
} from "vuex"
export default {
    data() {
      return {
          footer_hide_item_flag: false
      }
    },
    computed: {
        ...mapState(['footer_tab'])
    },
    methods: {
        ...mapActions(['CHANGE_FOOTERTAB']),
        tabClick: function(tab){
            if(tab == '1'){
                this.$store.commit('CHANGE_FOOTERTAB', 1)
                // this.$router.push('/home');
            }else if(tab == '2'){
                this.$store.commit('CHANGE_FOOTERTAB', 2)
                // this.$router.push('/about');
            }else if(tab == '3'){
                this.$store.commit('CHANGE_FOOTERTAB', 3)
                // this.$router.push('/me');
            }
        }
    }
  
}
</script>

<style lang="less" scoped>
  
</style>
