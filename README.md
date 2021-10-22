# fcarp-tech
Projeto para minicurso no evento FCARP/Tech
 O intuito deste projeto é apresentar uma aplicação web toda desenvolvida com ferramentas online sem a necessidade de instalar nenhuma aplicação no próprio computador
 e coloca-la online com uso de hospedagem gratuito e banco de dados gratuito(Claro que tudo atento aos limites de "gratuidade")
 
 O projeto original encontra-se disponível para teste no endereço:
 
 https://fcarp-tech.herokuapp.com/
 
 ## Tecnologias usadas
  . Github
  
  . Gitpod
  
  . Heroku
  
  . MongoDB
  
  
## Executando com uso do Gitpod
Na barra de endereço do navegador digite o seguinte endereço:

  https://gitpode.io/#https://github.com/marcosfaneli/fcarp-tech
   
Após aberto o projeto será necessário criar o arquivo .env na raiz do projeto para definições das variáveis de ambiente do projeto. Assim no arquivo deverão constar
as seguintes constantes PORT e MONGO_URL, onde:

  PORT: é a porta ondeo serviço web irá subir, pode ser qualquer número, comumente usado 3000;
  
  MONGO_URL: endereço do serviço de banco de dado mongoDB. Para este exemplo testei com o servico do https://github.com/marcosfaneli/fcarp-tech que é gratuito.
  
O arquivo deverá ter um conteúdo como este abaixo:
```
PORT=3000
MONGO_URL='mongodb+srv://localhost:27017'
```

No console digite:

  ```
  npm install
  ```
  
  ```
  npm run start:dev
  ```
  
  https://www.linkedin.com/in/marcosfaneli/
