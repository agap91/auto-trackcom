<template>
  <transition name="fade">
    <section id="popup" class="wrap" v-show="this.$store.getters.POPUP">
      <div class="popup-content">
        <svg
          @click="popupOpen()"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-x"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
        <form method="POST" @submit.prevent="send">
          <p>Оставьте заявку и мы перезвоним вам</p>
          <input type="text" placeholder="Ваше имя" v-model="form.name" />
          <masked-input
            type="text"
            mask="\+\7 (111) 1111-11"
            placeholder="Ваш номер телефона"
            v-model="form.phone"
          />
          <p v-if="errors.length" class="error">
              <span>Пожалуйста исправьте указанные ошибки:</span>
                <ul>
                <li v-for="error in errors" :key="error">{{ error }}</li>
                </ul>
          </p>

          <button class="call-btn" type="submit">Оставить заявку</button>
        </form>
      </div>
    </section>
  </transition>
</template>
<script>
// import MaskedInput from "vue-masked-input";
export default {
  // components: {
  //   MaskedInput
  // },
  data() {
    return {
      // popup: this.$store.getters.POPUP,
      errors: [],
      form: {
        name: "",
        phone: ""
      }
    };
  },
  computed: {
    // popupOpen() {
    //   this.$store.dispatch('UPD_POPUP', !this.$store.getters.POPUP);
    // }
  },
  methods: {
    send() {
      this.errors = [];

      if (!this.form.name) {
        this.errors.push("Укажите имя.");
      }
      if (!this.form.phone) {
        this.errors.push("Укажите телефон.");
      }
    }
  }
};
</script>
<style scoped>
#popup.wrap {
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 999999999;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
}
.popup-content {
  width: 500px;
  text-align: center;
  padding: 20px;
  background: #00aaf8;
  color: #fff;
  position: relative;
}
.popup-content svg {
  position: absolute;
  right: -5px;
  top: -25px;
  cursor: pointer;
}
.popup-content form {
  border: 1px solid #fff;
  padding: 20px;
}
.popup-content p {
  margin-top: 0;
  font-size: 30px;
  font-weight: 100;
  line-height: 1;
  margin-bottom: 50px;
  position: relative;
}
.popup-content p::after {
  content: "";
  width: 150px;
  background: #fff;
  height: 1px;
  display: block;
  left: 0;
  right: 0;
  margin: auto;
  position: absolute;
  bottom: -15px;
}
.popup-content input {
  width: 60%;
  display: block;
  margin: auto;
  margin-bottom: 10px;
  border: none;
  color: #343434;
  text-align: center;
  font-size: 17px;
  font-weight: 500;
  padding: 9px 5px;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 3px;
}
.popup-content input::placeholder {
  color: #343434;
}
.popup-content .call-btn {
  width: 60%;
  margin-top: 10px;
  font-size: 19px;
}
.popup-content p.error {
	font-size: 15px;
	color: red;
    margin: 0;
}
.popup-content p.error::after {
    display: none;
}
.error ul {
	text-align: left;
	width: 60%;
	margin: 14px auto;
}
.fade-enter-active {
  transition: all 0.3s ease;
}
.fade-leave-active {
  transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
}
.fade-enter, .fade-leave-to
/* .slide-fade-leave-active до версии 2.1.8 */ {
  /* transform: translateX(10px); */
  opacity: 0;
}
@media screen and (max-width: 576px) {
  .popup-content{
	width: 98%;
	padding: 10px;
}
.popup-content form {
	border: 1px solid #fff;
	padding: 10px;
}
.popup-content p{
    margin-top: 0;
    font-size: 25px;
}
.popup-content input,.popup-content .call-btn{
    width: 92%;
}
}
</style>