<template>
  <a-layout-sider v-model="collapsed" :style="{ overflow: 'auto', position: 'fixed', left: 0 }"
    id="warp">
    <div class="logo_warp">
      <div class="logo" />
    </div>
    <a-menu theme="dark" mode="inline" :selectedKeys="selectedKeys" class="sider_menu" @click="changekeys">
      <a-menu-item key="/dashboard">
        <img src="@/assets/order.svg" alt="" class="svg" />
        <span>总览</span>
      </a-menu-item>
      <a-menu-item key="/order">
        <img src="@/assets/order.svg" alt="" class="svg" />
        <span>业务工单</span>
      </a-menu-item>
      <a-menu-item key="/overhaul">
        <img src="@/assets/u30.svg" alt="" class="svg" />
        <span>检修管理</span>
      </a-menu-item>
      <a-menu-item key="/antitheft">
        <img src="@/assets/u30.svg" alt="" class="svg" />
        <span>反窃查违</span>
      </a-menu-item>
      <a-menu-item key="/extend">
        <img src="@/assets/u20.svg" alt="" class="svg" />
        <span>业扩报装</span>
      </a-menu-item>
      <a-menu-item key="/achievements">
        <img src="@/assets/u142.svg" alt="" class="svg" />
        <span>绩效管理</span>
      </a-menu-item>
      <a-menu-item key="/collection">
        <img src="@/assets/u146.svg" alt="" class="svg" />
        <span>采集数据</span>
      </a-menu-item>
      <a-menu-item key="/basic">
        <img src="@/assets/u146.svg" alt="" class="svg" />
        <span>基础服务</span>
      </a-menu-item>
    </a-menu>
    <div class="logo_warp">
      <div class="filpLogo" />
    </div>
  </a-layout-sider>
</template>

<script>
  export default {
    data() {
      return {
        collapsed: true,
        selectedKeys: []
      };
    },

    mounted() {
      const path = this.$route.path.split('/')
      this.selectedKeys = ['/' + path[1]]
    },
    methods: {
      changekeys(e) {
        this.selectedKeys = [e.key]
        this.$router.push(e.key)
      },
    },
    computed: {

    }
  };
</script>

<style lang="less" scoped>
  #warp {
    background-color: #fff;
    width: 80px !important;

    .logo_warp {
      flex: 1;
      width: 75px;
      height: 75px;

      .logo {
        width: 75px;
        height: 75px;
        background-color: #010827;
        border-top-right-radius: 75px;
      }

      .filpLogo {
        width: 75px;
        height: 75px;
        background-color: #010827;
        border-bottom-right-radius: 75px;
      }
    }

    .sider_menu {
		// 侧边栏高度问题就在这里！！！
      height: calc(100vh - 150px);

      background-color: #010827;
      width: 75px;
      display: flex;
      flex-direction: column;

      .ant-menu-item {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 75px;
      }

      .ant-menu-item-selected {
        background-color: #D7D7D7;
      }

      span {
        font-weight: 700;
        font-size: 16px;
      }

      .svg {
        width: 30px;
        height: 30px;
        // background-color: #fff;
        color: #fff;
      }
    }

    .ant-layout-sider-children {
      display: flex;
      flex-direction: column;
    }
  }
</style>
