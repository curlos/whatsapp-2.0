<template>
  <div className="chatContainer">
    <div className="chatInfo">
      <div className="chatDetails">
        <div>
          <ion-icon name="person-circle" className="largeIcon gray"></ion-icon>
        </div>

        <div>
          <div className="chatName">Anthony</div>
          <div className="status">last seen yesterday at 11:50 PM</div>
        </div>
      </div>

      <div className="chatInfoRight">
        <ion-icon name="search" className="smallIcon gray"></ion-icon>
        <ion-icon name="ellipsis-vertical" className="smallIcon gray"></ion-icon>
      </div>


    </div>
  </div>
</template>

<script>
export default {
  name: 'Chat'
}
</script>

<style scoped>
  .chatContainer {
    flex: 2;
    color: white;
    background-image: url('../assets/background.jpeg');
  }

  .chatInfo {
    background-color: #2A2F32;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
  }

  .chatInfoRight {
    display: flex;
    gap: 15px;
  }

  .largeIcon {
    height: 50px;
    width: 50px;
  }

  .smallIcon {
    height: 20px;
    width: 20px;
  }

  .chatDetails {
    display: flex;
    gap: 5px;
    align-items: center;
  }
  
  .chatName {
    color: white;
  }

  .status {
    color: lightgray;
  }

  .gray {
    color: gray;
  }
</style>