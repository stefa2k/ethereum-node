<template>
  <div class="body">
    <div class="progress">
      <div class="color"></div>
      <p>CHECKING IF THE OS OF YOUR SERVER IS SUPPORTED...</p>
      <img src="/img/icon/icon-settings.svg" class="modal" v-if="open" />
    </div>
  </div>
</template>

<script>
export default {
  //emits: ["close"],
  props: ["open"],
};
</script>

<style scoped>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.75);
}

dialog {
  position: fixed;
  top: 30vh;
  width: 30rem;
  left: calc(50% - 15rem);
  margin: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 12px;
  padding: 1rem;
  background-color: white;
  z-index: 100;
  border: none;
  /* animation: modal 0.3s ease-out forwards; */
}

.modal {
  animation: modal 5s linear infinite;
  position: relative;
  width: 4%;
}
@keyframes modal {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
/* TEST*/
.body {
  position: absolute;
  top: 53%;
  left: 50%;
  transform: translate(-50%, -50%);
  /*background-color: #2a9d8f;*/
  max-width: 500vw;
text-align: right;}
.progress {
  position: relative;
  height: 20px;
  width: 50vw;
  border: 3px solid grey;
  border-radius: 15px;
}
.progress p {
  float: left;
  margin:0 2%;
  font-weight: bold;
  color: #eee;
  position: relative;
}
.progress .color {
  position: absolute;
  background-color: #1715c4;
  width: 0px;
  height: 20px;
  border-radius: 15px;
  animation: progres 4s infinite linear;
}
@keyframes progres {
  0% {
    width: 0%;
  }
  25% {
    width: 50%;
  }
  50% {
    width: 75%;
  }
  75% {
    width: 85%;
  }
  100% {
    width: 100%;
  }
} ;
</style>
