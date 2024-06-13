<template>
  <form id="cadastro" @submit="criarConta">
    <div class="main-registro">
      <div class="left-registro">
        <h1>Faça seu Registro<br>E Organize seu Dinheiro</h1>
      </div>
      <div class="right-registro">
        <div class="card-registro">
          <h1>REGISTRO</h1>
          <div class="textfield">
            <label for="usuario">Usuário:</label>
            <input type="text" name="usuario" v-model="nome" required  placeholder="Usuário">
          </div>
          <div class="textfield">
            <label for="Email">Email:</label>
            <input type="email" name="email" v-model="email" required placeholder="Email">
          </div>
          <div class="textfield">
            <label for="senha">Senha:</label>
            <input type="password" name="senha" v-model="senha" required placeholder="Senha">
          </div>
          <button class="btn-registro">Registro</button>
          <p>ou clique aqui: <router-link to="/login"> <button class="btn-login">Login</button></router-link></p>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default{
  name: "cadastro",
  data(){
    return{
      nome: null,
      email: null,
      senha: null
    }
  },
  methods:{
    criarConta(e){
      e.preventDefault();
      console.log(this);
      if(this.senha.length < 8){
        alert('A senha deve ter pelo menos 8 caracteres.');
        return;
      }
      localStorage.setItem("nomes", this.nome)
      localStorage.setItem("email", this.email)
      localStorage.setItem("senhas", this.senha)
      this.$router.push('/home');      
    }
  }
}
</script>

<style scoped>
.main-registro {
  width: 100vw;
  height: 100vh;
  background: #ebf2f2;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row; /* Para telas maiores, os elementos ficam lado a lado */
}

.left-registro {
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px; /* Adiciona espaçamento interno para telas menores */
}

.left-registro > h1 {
  font-size: 3vw;
  color: #4e3a3b;
  text-align: center; /* Centraliza o texto */
}

.right-registro {
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px; /* Adiciona espaçamento interno para telas menores */
}

.card-registro {
  width: 90%; /* Ajuste a largura para telas menores */
  max-width: 500px; /* Define uma largura máxima */
  height: auto; /* Ajusta a altura automaticamente */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 30px 32px;
  background: #bcebdf;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Adiciona uma sombra para melhor visualização */
}

.card-registro > h1 {
  color: #4e3a3b;
  font-weight: 800;
  margin: 0;
  font-size: 24px; /* Ajusta o tamanho da fonte */
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

.btn-registro {
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

.btn-registro:hover {
  background: #d0f2e7;
}

.btn-login {
  margin: 8px;
  background: #ade0db;
  border: none;
  padding: 8px 16px; /* Ajusta o padding */
  color: #4e3a3b;
  font-weight: 400;
  border-radius: 8px;
  cursor: pointer;
}

.btn-login:hover {
  background: #d0f2e7;
}

p {
  text-align: center; /* Centraliza o texto */
  color: #4e3a3b;
}

@media only screen and (max-width: 950px) {
  .main-registro {
    flex-direction: column; /* Muda para coluna em telas menores */
    padding: 20px;
  }
  .left-registro, .right-registro {
    width: 100%; /* Ajusta a largura para 100% */
    height: auto; /* Ajusta a altura automaticamente */
  }
  .left-registro > h1 {
    font-size: 5vw; /* Ajusta o tamanho da fonte */
  }
}

@media only screen and (max-width: 600px) {
  .card-registro {
    width: 100%; /* Ajusta a largura para 100% */
    padding: 20px; /* Reduz o padding */
  }
  .left-registro > h1 {
    display: none; /* Esconde o título em telas muito pequenas */
  }
}



</style>