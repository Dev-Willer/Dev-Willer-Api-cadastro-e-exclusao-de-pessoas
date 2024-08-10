### <h1> API Restfull de Cadastro e exclusão de pessoas </h1> ###


Este projeto foi desenvolvido para realizar o cadastro de um usuário por meio de uma tela de login simples e intuitiva, e inseri-lo no banco de dados, neste projeto utilizei a biblioteca prisma para definir os schemas (Tabelas) dentro do código e manter uma visualização dos usuários sendo inseridos no banco de dados que estava rodando em nuvem. Após definir os dados que eu iria requerer do meu usuário e inseri-los no código, foi feita a conexão com o Mongo DB através do banco online Atlas, para que assim eu conseguisse manter os dados e exibi-los em tela ao meu usuário como uma confirmação do seu cadastro sendo efetuado com sucesso.

A API seguiu os padrões Restfull de desenvolvimento utilizando os status code corretos para as requisições do usuário e também para os erros, afim de tornar uma conexão fácil com o meu front-end.

Já na parte do front-end foi utilizado o React para criação da tela de login e a estilização feita com Css. Utilizei a biblioteca Vite para que ela trouxesse o projeto React montado, e eu pudesse apoenas me preocupar em começar o projeto com as minhas definições. Foi utilizada a biblioteca Axios para facilitar a conexão com o meu banco de dados, prezando assim por uma agilidade e escalabilidade no desenvolvimento deste código. 

Dos desafios...

No Backend a parte de lidar com as bibliotecas e a utilização do Prisma, também das bibliotecas como expess, foi um desafio, e uma praticidade, já que o Prisma tem a sua sintaxe muito simples e de fácil utilização. Em todo tempo a documentação foi consultada tanto para realizar o consumo da API como para utilização da biblioteca Prisma, trazendo assim um entendeimento da documentação da biblioteca. 

Sem nenhuma dúvida o maior desafio foi lidar com os hooks do React, e entender como lidar com os encapsulamentos que ele proporciona para que seja economizado tempo, e menor  utilização de linhas de código, deixando assim o projeto mais rápido e limpo, não necessitando que fosse repetido inumeras vezeso mesmo código em diversos trechos do código.


