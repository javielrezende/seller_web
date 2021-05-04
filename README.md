<p align="center"><img src="https://images.tcdn.com.br/static_inst/site/vendedor/tray-cdn/uploads/logo-header.svg" width="400"></p>

# Sistema para lançamento de vendas  
Repositório do desenvolvimento do sistema que cadastra vendedores, suas vendas e comissões.  

Este client foi desenvolvido em Vue.js. Documentação disponível em: <a href="https://vuejs.org/v2/guide/">Vue.js</a>  
  
## Scripts úteis  :rocket:  

### Acesso ao sistema com docker  
  
**1**. Na raiz do projeto rodar  
`$ docker-compose up`
  
**2**. Configurado no docker para subir no localhost:8080
  
### Acesso ao sistema sem docker  
  
**1**. Na raiz do projeto rodar  
`$ npm i`
  
`$ npm run dev`
  
## IMPORTANTE
  
### No arquivo src/plugins/axios.js foi configurado uma instância do axios para se comunicar com o back-end. Caso o mesmo suba em uma porta diferente, alterar neste arquivo.
