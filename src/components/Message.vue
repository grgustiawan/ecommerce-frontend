<template>
  <vs-alert :variant="type" show-close> {{ message }} </vs-alert>
</template>

<script>
import VsAlert from "@vuesimple/vs-alert";
export default {
  name: "messageNotif",
  props: ["message", "type"],
  components: {
    VsAlert,
  },
};
</script>

<style scoped>
.vs-alert {
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 9999;
  width: 350px;
  height: auto;
}
</style>
