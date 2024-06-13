<template>
  <form id="login" @submit="logarConta">
    <div class="main-login">
      <div class="left-login">
        <h1>Faça login <br>E Organize seu Dinheiro</h1>
      </div>
      <div class="right-login">
        <div class="card-login">
          <h1>LOGIN</h1>
          <div class="textfield">
            <label for="usuario">Usuário:</label>
            <input type="text" name="usuario" v-model="nome" required placeholder="Usuário">
          </div>
          <div class="textfield">
            <label for="senha">Senha:</label>
            <input type="password" name="senha" v-model="senha" required placeholder="Senha">
          </div>
          <button class="btn-login">Login</button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      nome: null,
      senha: null
    }
  },
  methods: {
    logarConta(e) {
      e.preventDefault();
      localStorage.setItem("nomes", this.nome)
      localStorage.setItem("senhas", this.senha)
      this.$router.push('/home');
    }
  }
}
</script>

<style scoped>
.main-login {
  width: 100vw;
  height: 100vh;
  background: #ebf2f2;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}
.left-login {
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
}
.left-login > h1 {
  font-size: 3vw;
  color: #4e3a3b;
  text-align: center;
}
.right-login {
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}
.card-login {
  width: 90%;
  max-width: 500px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 30px 32px;
  background: #bcebdf;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.card-login > h1 {
  color: #4e3a3b;
  font-weight: 800;
  margin: 0;
  font-size: 24px;
}
.textfield {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 10px 0px;
}
.textfield > input {
  width: 100%;
  border: none;
  border-radius: 10px;
  padding: 15px;
  background: #ebf2f2;
  color: #4e3a3b;
  font-size: 12pt;
}
.textfield > label {
  color: #4e3a3b;
  margin-bottom: 5px;
}
.textfield > input::placeholder {
  color: #4e3a3b;
}
.btn-login {
  width: 100%;
  padding: 16px 0px;
  margin: center;
  border: none;
  border-radius: 8px;
  outline: none;
  text-transform: uppercase;
  font-weight: 800;
  letter-spacing: 3px;
  color: #4e3a3b;
  background: #ade0db;
  cursor: pointer;
}
.btn-login:hover {
  background: #d0f2e7;
}

@media only screen and (max-width: 950px) {
  .main-login {
    flex-direction: column;
    padding: 20px;
  }
  .left-login, .right-login {
    width: 100%;
    height: auto;
  }
  .left-login > h1 {
    font-size: 5vw;
  }
}

@media only screen and (max-width: 600px) {
  .card-login {
    width: 100%;
    padding: 20px;
  }
  .left-login > h1 {
    display: none;
  }
}
</style>
