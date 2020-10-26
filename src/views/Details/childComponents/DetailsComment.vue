<template>
  <div id="comment">
    <div class="comment_top">
      <div class="user_comment">用户评价</div>
      <div class="comment_more">更多</div>
    </div>
    <div class="userInfo">
      <div v-if="goodsComment.user" class="user">
        <img :src="goodsComment.user.avatar" alt />
      </div>
      <span class="uname" v-if="goodsComment.user">{{goodsComment.user.uname}}</span>
    </div>
    <p class="comment_p">{{goodsComment.content}}</p>
    <div class="comment_pic">
      
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailsComment",
  props: {
    goodsComment: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  computed: {
    user_avatar() {
      return this.goodsComment.user.avatar;
    }
  },
  created() {
    setTimeout(() => {
      console.log(this.goodsComment);
    }, 3000);
  }
};
</script>

<style scoped>
#comment {
  text-align: center;
  padding: 0 15px;
}
.comment_top {
  display: flex;
  height: 45px;
  line-height: 45px;
  justify-content: space-between;
  font-size: 15px;
  border-top: 3px solid #f6f5f8;
  border-bottom: 1px solid #f1f1f1;
}
.userInfo {
  margin-top: 10px;
  text-align: left;
}
.user {
  display: inline-block;
  width: 47px;
  height: 47px;
  border-radius: 50%;
  overflow: hidden;
  vertical-align: middle;
}
.user img {
  width: 100%;
  height: 100%;
}
.uname {
  margin-left: 10px;
  font-size: 15px;
}
.comment_p {
  margin-top: 10px;
  color: #8f8f8f;
  line-height: 18px;
  font-size: 13px;
  text-align: left;
}
</style>