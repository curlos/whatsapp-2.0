<template>
  <div className="smallChatContainer">
    <div className="personDetails">
      <div>
        <ion-icon name="person-circle" className="largeIcon"></ion-icon>
      </div>

      <div>
        <div className="personName">Anthony</div>
        <div>Papi puede traerle a mami una ensa...</div>
      </div>
    </div>

    <div>Thursday</div>


  </div>
</template>

<script>
export default {
  name: 'SmallChat'
}
</script>

<style scoped>
  .smallChatContainer {
    background-color: #0E0E0E;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid gray;
  }

  .largeIcon {
    height: 50px;
    width: 50px;
  }

  .personDetails {
    display: flex;
    gap: 5px;
    align-items: center;
  }
  
  .personName {
    color: white;
  }
</style>