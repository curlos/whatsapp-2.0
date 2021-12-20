<template>
  <div className="authContainer">
    <div className="topContainer">
      <div>
        <div className="icon">
          <ion-icon name="logo-whatsapp"></ion-icon>
        </div>
        <div>WhatsApp</div>
      </div>
    </div>

    <div className="formContainer">
      <div>
        <div className="title">Create a New Account</div>

        <form>
          <div className="smallFont">Email Address</div>
          <input placeholder="Email Address"/>

          <div className="smallFont">Password</div>
          <input type="password" placeholder="Password"/>

          <button>Sign Up</button>
        </form>

        <div className="orOptionTitle">
          <span>or sign up with</span>
        </div>

        <div className="authOptions">
          <div className="authOption">
            <ion-icon name="logo-facebook"></ion-icon>
          </div>

          <div className="authOption">
            <ion-icon name="logo-instagram"></ion-icon>
          </div>

          <div className="authOption">
            <img src="../assets/google_logo.svg" alt="" />
          </div>
        </div>

        <div className="routeLink">
          <router-link :to="'login'">Already have an account? <strong>Login Here</strong></router-link>
        </div>


      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'SignUp'
}
</script>

<style scoped>
  .authContainer {
    color: #fff;
    height: 100vh;
    width: 100vw;
  }

  .topContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #2BD14C;
    height: 30%;
    font-size: 35px;
  }

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 100px;
  }

  .title {
    text-align: center;
    font-size: 25px;
  }
  
  .smallFont {
    font-size: 13px;
    margin-bottom: 4px;
  }

  .formContainer {
    color: #075E54;
    padding: 30px;
  }

  .formContainer input {
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-bottom: 25px;
    border: none;
    border-bottom: 2px solid #2BD14C;
  }

  .formContainer input:focus {
    outline: none;
  }

  .formContainer button {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 10px;
    background-color: #2BD14C;
    color: #fff;
    font-size: 18px;
  }

  .orOptionTitle {
    display: flex;
    flex-direction: row;
    color: gray;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .orOptionTitle:before, .orOptionTitle:after{
    content: "";
    flex: 1 1;
    border-bottom: 1px solid gray;
    margin: auto;
  }
  .orOptionTitle:before {
    margin-right: 10px
  }
  .orOptionTitle:after {
    margin-left: 10px
  }

  .authOptions {
    display: flex;
    justify-content: center;
    gap: 20px;
  }

  .authOption {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    width: 50px;
    border: 1px solid lightgray;
    border-radius: 50%;
    cursor: pointer;
  }

  .authOption ion-icon {
    height: 30px;
    width: 30px;

  }

  .authOption ion-icon[name="logo-facebook"] {
    color: #3C5998;
    border-radius: 10px;
  }

  .authOption ion-icon[name="logo-instagram"] {
    color: #E1316D;
  }

  .routeLink {
    text-align: center;
    margin: 20px auto;
  }

  .routeLink a {
    color: #075E54;
    underline: none;
  }

</style>