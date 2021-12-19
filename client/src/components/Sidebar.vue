<template>
  <div className="sidebarBody">
    <div>
      <div className="top">
        <div>
          <ion-icon name="person-circle" className="largeIcon gray"></ion-icon>
        </div>
        
        <div>
          <ion-icon name="chatbox" className="smallIcon gray"></ion-icon>
          <ion-icon name="ellipsis-vertical" className="smallIcon gray"></ion-icon>
        </div>
      </div>
      
      <div className="searchChatInputContainer">
        <ion-icon name="search" className="smallIcon"></ion-icon>
        <input className="searchChatInput" placeholder="Search in chats"/>
      </div>

      <div className="buttonContainer">
        <button className="startChatButton">START A NEW CHAT</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
}
</script>

<style scoped>

  .sidebarBody {
    padding: 10px;
  }

  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }

  .largeIcon {
    height: 60px;
    width: 60px;
  }

  .smallIcon {
    height: 30px;
    width: 30px;
  }

  .gray {
    color: gray;
  }

  .searchChatInputContainer {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .searchChatInput {
    border: none;
    font-size: 18px;
    color: gray;
    width: 100%;
  }

  .searchChatInput:focus {
    outline: none;
  }

  .buttonContainer {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .startChatButton {
    background-color: none;
    border: none;
    font-size: 20px;
    padding: 8px;
  }
  
  .startChatButton:hover {
    background-color: gray;
  }
</style>