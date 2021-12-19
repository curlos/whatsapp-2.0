<template>
  <div className="sidebarContainer">
    <div>
      <div className="topContainer">
        <div>
          <ion-icon name="person-circle" className="largeIcon"></ion-icon>
        </div>
        
        <div>
          <ion-icon name="chatbox" className="smallIcon gray"></ion-icon>
          <ion-icon name="ellipsis-vertical" className="smallIcon gray"></ion-icon>
        </div>
      </div>
      
      <div className="searchChatInputContainerContainer">
        <div className="searchChatInputContainer">
          <ion-icon name="search" className="superSmallIcon"></ion-icon>
          <input className="searchChatInput" placeholder="Search or start new chat"/>
        </div>
      </div>

      <div className="chatsContainer">
        <SmallChat />
        <SmallChat />
        <SmallChat />
        <SmallChat />
        <SmallChat />
        <SmallChat />
        <SmallChat />
        <SmallChat />
        <SmallChat />
        <SmallChat />
        <SmallChat />
        <SmallChat />
        <SmallChat />
        <SmallChat />
        <SmallChat />
      </div>

      
    </div>
  </div>
</template>

<script>
import SmallChat from './SmallChat'


export default {
  name: 'Sidebar',
  components: {
    SmallChat
  }
}
</script>

<style scoped>

  .sidebarContainer {
    flex: 1;
    background-color: #131C21;
    color: gray;
    max-height: 100vh;
  }

  .topContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #2A2F32;
    padding: 10px;
    border-right: 1px solid gray;
    height: 60px;
  }

  .largeIcon {
    height: 50px;
    width: 50px;
  }

  .smallIcon {
    height: 25px;
    width: 25px;
  }

  .superSmallIcon {
    height: 20px;
    width: 20px;
  }

  .gray {
    color: gray;
  }

  .searchChatInputContainerContainer {
    padding: 20px;
    background-color: #0E0E0E;
    border-bottom: 1px solid gray;
    border-right: 1px solid gray;
  }

  .searchChatInputContainer {
    display: flex;
    align-items: center;
    gap: 4px;
    background-color: #0E0E0E;
    border-radius: 25px;
    border: 1px solid white;
    padding: 10px;
  }

  .searchChatInput {
    border: none;
    font-size: 16px;
    background-color: transparent;
    color: white;
    width: 100%;
    padding: 5px;
    padding-left: 6px;
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

  .chatsContainer {
    overflow-y: auto;
    max-height: 82.75vh;
  }
</style>