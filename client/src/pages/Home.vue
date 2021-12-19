<template>
  <div className="homeContainer">
    <Sidebar />
    <Chat />
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar'
import Chat from '../components/Chat'


export default {
  name: 'Home',
  components: {
    Sidebar,
    Chat
  }
}
</script>

<style scoped>
  .homeContainer {
    display: flex;
    max-height: 100vh;
  }
</style>