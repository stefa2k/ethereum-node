<template>
  <section>
    <section id="header">
      <h2>welcome</h2>
    </section>
    <div class="container">
      <div class="col" v-for="install in installation" :key="install.title">
        <router-link :to="{ path: '/clickinstall' }"
          ><button-installation
            :title="install.title"
            :img="install.img"
          ></button-installation
        ></router-link>
      </div>
    </div>
    <circle-loading open="true"></circle-loading>
    <div id="txt">
      <p>
        IN THIS STEP YOU CHOOSE HOW YOU WANT TO INSTALL YOUR NODE. IF YOU NEED
        ASSISTANCE WITH THE SETUP, JOIN OUR DISCORD - WE ARE HAPPY TO HELP YOU
        OUT
      </p>
    </div>
  </section>
</template>
<script>
import ButtonInstallation from "./ButtonInstallation.vue";
import CircleLoading from "../UI/CircleLoading.vue";
export default {
  components: { ButtonInstallation, CircleLoading },
  data() {
    return {
      installation: [
        { title: "1CLICK INSTALLATION", img: "/img/icon/clickinstall.png" },
        { title: "CUSTOM INSTALLATION", img: "/img/icon/custominstall.png" },
        {
          title: "IMPORT CONFIGURATION",
          img: "/img/icon/one click installer.png",
        },
      ],
    };
  },
};
</script>
<style scope>
.container {
  width: 72vw;
  height: 30vh;
  resize: both;
  margin: 0 auto;
  position: relative;
  border-radius: 40px;
}
.col {
  width: 25%;
  height: 22vh;
  background: rgba(51, 102, 102, 0.4);
  float: left;
  border: 3px solid grey;
  resize: both;
  margin: 25px;
  border-radius: 20px;
}
#header {
  text-align: center;
  margin: 1rem auto;
  margin-top: 1.7rem;
  max-width: 15rem;
  border-radius: 40px;
  /* box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26); */
  padding: 0.1rem;
  background: #336666;
  color: #fff;
  border: 3px solid rgb(88, 86, 86);
  position: relative;
  resize: both;
}
#header h2 {
  margin: 0 auto;
  font-size: 30pt;
  resize: both;
}
#txt {
  width: 70vw;
  height: auto;
  border: 3px solid grey;
  margin: 100px auto;
  background: #336666;
  border-radius: 40px;
  position: relative;
  padding: 2%;
  resize: both;
}
#txt p {
  margin-top: -1px;
  font-size: 14pt;
  font-weight: bold;
  color: #fff;
}
.headCol {
  text-align: center;
  width: 98%;
  border: 3px solid red;
  border-radius: 40px;
}
</style>
