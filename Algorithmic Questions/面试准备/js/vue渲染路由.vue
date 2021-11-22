<template>
  <!-- 遍历路由表，生成左侧菜单 -->
          <template v-for="(item,index) in meuns">
            <template v-if="item.children.length>0">
              <el-submenu :index="item.url" :key="index">
<!-- 二级菜单-->
                <template slot="title">
                  <span class="title" @click="send"> {{ item.menuName }}</span>
                </template>
                <template v-for="(subItem,index) in item.children">
                  <el-submenu v-if="subItem.children.length>0" :index="subItem.url" :key="index">
                    <template slot="title">
                      <span class="title" @click="send"> {{ subItem.menuName }}</span>
                    </template>
<!-- 三级菜单-->
                    <el-menu-item v-for="(threeItem,i) in subItem.children" :key="i" :index="threeItem.url">
                      {{ threeItem.menuName }}
                    </el-menu-item>
                  </el-submenu>
                  <el-menu-item v-else :index="subItem.url" :key="subItem.url">
                    {{ subItem.menuName }}
                  </el-menu-item>
                </template>
              </el-submenu>
            </template>
        <!--  一级菜单 -->
            <template v-else>
              <el-menu-item :index="item.url" :key="index">
                <span slot="title">{{ item.menuName }}</span>
              </el-menu-item>
            </template>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  created(){
      if(decodeURI(window.location.href).split("menu=")[1] != undefined && decodeURI(window.location.href).split("menu=")[1] != ""&& decodeURI(window.location.href).split("menu=")[1] != null){
        global.antRouter = decodeURIComponent(decodeURI(window.location.href).split("menu=")[1]);   //获取路由并解析
        localStorage.setItem('menu',global.antRouter);    //将路由存储到本地
        window.location.href = window.location.href.split("?")[0];
        return
      }else {
        global.antRouter = JSON.parse(localStorage.getItem("menu"));
      }
 },
 mounted() {
      console.log('menu:',JSON.parse(localStorage.getItem('menu')));
      let menu = JSON.parse(localStorage.getItem('menu'));   //将json文件转化为数组类型
      this.meuns = menu;  //赋值
      console.log('arr', this.meuns)
    }
}
</script>

<style>

</style>