# This is a survey that evaluates in a synthetic way the deliberative ui in January 2021

Desde os primórdios da web, que programadores de todas as idades trabalham com css, visto que é um ponto fundamental para que haja estilização nas páginas no desenvolvimento web. Para tanto, até os anos 2010, eram usados seletores como ID, classes, etc. Porém, com o advento da web e a progressão exponencial de informações, houve a necessidade de criar ferramentas que atendessem essa demanda de forma mais eficaz. É aí que surge o paradigma da UI Declarativa. Nesse padrão, as coisas funcionam um pouco diferente, a forma de estilização vem dentro do html, em cada elemento, usando props, por exemplo, no react js.
O seguinte trabalho vista descobrir quais, quantitativamente, as melhores UIs Declarativas em janeiro de 2021. Para isso, analisaremos dados dos site **stackoverflow**, em inglês, **github** e **npm**.

Os variáveis escolhidas serão:

- **Star** - a quantidade de estrela no github, que facilita a localização posterior de um repositório ou tópico, além disso, mostra a quantidade relativa de pessoas que usam o pacote.
- **Issues** - Lugar onde o usuário contribuem para o projeto, seja na quantidade de problemas, dicas, melhorias do pacote, etc.
- **Perguntas no Stackoverflow** - Stack Overflow é um dos maiores site de perguntas e respostas para profissionais e entusiastas na área de programação de computadores. É o principal site de capital fechado da Rede Stack Exchange.
- **Contribuidores** - a quantidade de contribuidores do pacote, que é encontrado no github do pacote escolhido.
- **NPM** - é o Gerenciador de Pacotes do Node (Node Package Manager).Npm é a maior biblioteca de software do mundo (registro). A variável será a quantidade de downloads geral pelo pacote.
