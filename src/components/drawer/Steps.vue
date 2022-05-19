<template>
  <div class="warp">
    <div class="steps">
      <div class="left">
        <span class="time">2022-03-04 12:22:43</span>
        <span class="info">处理人：站长杨万里</span>
      </div>
      <div class="main">
        <div class="circular"></div>
        <div class="line"></div>
      </div>
      <div class="right">
        <div class="title">工单派单</div>
        <div class="reason">计量异常</div>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style lang="less" scoped>

  .steps {
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;

    .left {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .main {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .circular {
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background-color: #F9B205;
      }

      .line {
        width: 4px;
        height: 60px;
        background-color: #F9B205;
      }
    }

    .right {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      .title {
        color: red;
      }
    }
  }
  .circular_small{
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background-color: #F9B205;
  }
  .line_long{
    width: 4px;
    height: 100px;
    background-color: #F9B205;
  }
</style>
