# Esta é uma pesquisa que avalia de forma sintética a interface de pacotes que _UI declarative_ em janeiro de 2021

## Glossário

- **UI** - _User Interface_

## Conteúdo

- [Introdução](#Introdução)
- [Mas afinal, o que é UI Declarative?](#Conceito)
- [Variáveis Analisadas](#variáveisanalisadas)
- [Os pacotes entorno dessa pesquisa]()
- [Análise dos pacotes:]()
  1. Ant-designer
  2. Material-UI
  3. Chackra-ui
  4. Styled-system
  5. Semantic-UI-React
  6. React-Bootstrap

# Introdução

Desde os primórdios da web, que programadores de todas as idades trabalham com css, visto que é um ponto fundamental para que haja estilização nas páginas no desenvolvimento web. Para tanto, até os anos 2010, eram usados seletores como ID, classes, etc. Porém, com o advento da web e a progressão exponencial de informações, houve a necessidade de criar ferramentas que atendessem essa demanda de forma mais eficaz. É aí que surge o paradigma da UI Declarativa. Nesse padrão, as coisas funcionam um pouco diferente, a forma de estilização vem dentro do html, em cada elemento, usando props, por exemplo, no react js.
O seguinte trabalho vista descobrir quais, quantitativamente, as melhores UIs Declarativas em janeiro de 2021. Para isso, analisaremos dados dos site **stackoverflow**, em inglês, **github** e **npm**.

# Conceito

Mas afinal, o que é UI Declarative?

A UI declarativa não é um conceito novo no mundo do desenvolvimento, mas está ganhando impulso no SDK nativo móvel e web, provavelmente depois que algumas outras estruturas de plataforma cruzada começaram a explorar essas abordagens. Aprender como usá-los implica em mudar a maneira como imaginamos os layouts e as interfaces gráficas de usuário nos últimos anos. Dessa forma, UI Declarativa é o processo que descreve em algum tipo de linguagem quais elementos você precisa em sua UI e, até certo ponto, como eles deveriam ser, mas você pode omitir detalhes como a posição exata e o estilo visual dos elementos. Por exemplo, em HTML, você pode descrever que deseja um campo de entrada, mas como e onde esse campo será colocado na UI depende muito do navegador que você está usando. Nesse formato, o usuário descreve sua UI como funções que transformam dados em uma hierarquia de UI. Hoje, o termo é usado com mais frequência para estruturas de UI com uma separação estrita da aparência da UI do comportamento, o que significa que o código reage aos eventos da IU. Por exemplo, usando XAML, você declara a aparência de sua interface do usuário em um dialeto XML específico, mas implementa o comportamento em código de programa separado.

**O benefício do declarativo é que você não se atola nos detalhes de implementação da representação do estado. Você está delegando o componente organizacional de manter as visualizações do aplicativo consistentes, então você só precisa se preocupar com o estado.**

# Imperatividade versus Declarativo

Imagine um componente de IU simples, como um botão "Curtir". Quando você toca nele, ele fica azul se antes era cinza e cinza se era azul.
**Exemplo Imperativo**

```js
if (user.likes()) {
  if (hasBlue()) {
    removeBlue();
    addGrey();
  } else {
    removeGrey();
    addBlue();
  }
}
```

**Exemplo Declarativo**

```js
if (this.state.liked) {
  return <blueLike />;
} else {
  return <greyLike />;
}
```

# Os pacotes entorno dessa pesquisa serão:

1. Ant-designer
2. Material-UI
3. Chackria
4. Styled-system
5. Semantic-UI
6. React-Bootstrap

> **Nota sobre o styled-components** <br/>
> O motivo pelo qual não o coloquei é que, na verdade, styled-components não é uma lib declarativa, antes, usa CSS-in-JS.

---

# Variáveis analisadas em cada pacote:

- **Star** (github) - a quantidade de estrela no github, que facilita a localização posterior de um repositório ou tópico, além disso, mostra a quantidade relativa de pessoas que usam o pacote.
- **Issues** (github) - Lugar onde o usuário contribuem para o projeto, seja na quantidade de problemas, dicas, melhorias do pacote, etc.
- **Contribuidores** (github) - a quantidade de contribuidores do pacote, que é encontrado no github do pacote escolhido.
- **Perguntas no Stackoverflow** (stackvorflow) - Stack Overflow é um dos maiores site de perguntas e respostas para profissionais e entusiastas na área de programação de computadores. É o principal site de capital fechado da Rede Stack Exchange.
- **NPM** - é o Gerenciador de Pacotes do Node (Node Package Manager).Npm é a maior biblioteca de software do mundo (registro). A variável será a quantidade de downloads geral pelo pacote.

---

## 1. Ant-designer

Um sistema de design para produtos de nível empresarial. Crie uma experiência de trabalho eficiente e agradável.

<table>
<tbody>
<tr style="border:1px solid #000">
    <td style="border:1px solid #000">Github:</td>
    <td style="border:1px solid #000">
    <a href="https://github.com/ant-design/ant-design">https://github.com/ant-design/ant-design</a>
    </td></tr><tr style="border:1px solid #000">
    <td style="border:1px solid #000">Star:</td>
    <td style="border:1px solid #000">66.4k</td></tr>
    <tr style="border:1px solid #000">
    <td style="border:1px solid #000">Issues</td>
    <td style="border:1px solid #000">553</td></tr>
    <tr style="border:1px solid #000">
    <td style="border:1px solid #000">Stackoverflow</td><td style="border:1px solid #000">2,864 questions</td></tr>
    <tr style="border:1px solid #000">
    <td style="border:1px solid #000">Contribuidores</td><td style="border:1px solid #000">+1352</td></tr><tr style="border:1px solid #000">
    <td style="border:1px solid #000">NPM</td><td style="border:1px solid #000">515.889</td></tr>
</tbody>
</table>

<br/>

Site: https://ant.design/

---

## 2. Material-UI

Biblioteca de componentes React para um desenvolvimento ágil e fácil. Construa seu próprio design, ou comece com Material Design.

<table>
<tbody>
<tr style="border:1px solid #000">
    <td style="border:1px solid #000">Github:</td>
    <td style="border:1px solid #000">
    <a href="https://github.com/mui-org/material-ui">https://github.com/mui-org/material-ui</a>
    </td></tr><tr style="border:1px solid #000">
    <td style="border:1px solid #000">Star:</td>
    <td style="border:1px solid #000">64.6k</td></tr>
    <tr style="border:1px solid #000">
    <td style="border:1px solid #000">Issues</td>
    <td style="border:1px solid #000">446</td></tr>
    <tr style="border:1px solid #000">
    <td style="border:1px solid #000">Stackoverflow</td><td style="border:1px solid #000"> 500 results</td></tr>
    <tr style="border:1px solid #000">
    <td style="border:1px solid #000">Contribuidores</td><td style="border:1px solid #000">+2079</td></tr><tr style="border:1px solid #000">
    <td style="border:1px solid #000">NPM</td><td style="border:1px solid #000">1.504.274</td></tr>
</tbody>
</table>

<br/>

Site: https://material-ui.com

---

## 3. Chackra-ui

Chakra UI é uma biblioteca de componentes simples, modular e acessível que fornece os blocos de construção de que você precisa para construir seus aplicativos React.

<table>
<tbody>
<tr style="border:1px solid #000">
    <td style="border:1px solid #000">Github:</td>
    <td style="border:1px solid #000">
    <a href="https://github.com/chakra-ui/chakra-ui">https://github.com/chakra-ui/chakra-ui</a>
    </td></tr><tr style="border:1px solid #000">
    <td style="border:1px solid #000">Star:</td>
    <td style="border:1px solid #000">14.6k</td></tr>
    <tr style="border:1px solid #000">
    <td style="border:1px solid #000">Issues</td>
    <td style="border:1px solid #000">81</td></tr>
    <tr style="border:1px solid #000">
    <td style="border:1px solid #000">Stackoverflow</td><td style="border:1px solid #000">30 questions</td></tr>
    <tr style="border:1px solid #000">
    <td style="border:1px solid #000">Contribuidores</td><td style="border:1px solid #000">+310</td></tr><tr style="border:1px solid #000">
    <td style="border:1px solid #000">NPM</td><td style="border:1px solid #000">32.280</td></tr>
</tbody>
</table>

<br/>

Site: https://chakra-ui.com/

---

## 4. Styled-system

O Styled System permite que você crie rapidamente componentes de UI personalizados com adereços de estilo baseados em restrições com base em escalas definidas em seu tema

<table>
<tbody>
<tr style="border:1px solid #000">
    <td style="border:1px solid #000">Github:</td>
    <td style="border:1px solid #000">
    <a href="https://github.com/styled-system/styled-system">https://github.com/styled-system/styled-system</a>
    </td></tr><tr style="border:1px solid #000">
    <td style="border:1px solid #000">Star:</td>
    <td style="border:1px solid #000">6.5k</td></tr>
    <tr style="border:1px solid #000">
    <td style="border:1px solid #000">Issues</td>
    <td style="border:1px solid #000">69</td></tr>
    <tr style="border:1px solid #000">
    <td style="border:1px solid #000">Stackoverflow</td><td style="border:1px solid #000">14 questions</td></tr>
    <tr style="border:1px solid #000">
    <td style="border:1px solid #000">Contribuidores</td><td style="border:1px solid #000">+109</td></tr><tr style="border:1px solid #000">
    <td style="border:1px solid #000">NPM</td><td style="border:1px solid #000">387.930</td></tr>
</tbody>
</table>

<br/>

Site: https://styled-system.com/

---

## 5. Semantic-UI-React

O Semantic UI é um framework de desenvolvimento rápido que te ajuda a criar layouts responsivos utilizando o HTML de uma forma simples e fácil.

<table>
<tbody>
<tr style="border:1px solid #000">
    <td style="border:1px solid #000">Github:</td>
    <td style="border:1px solid #000">
    <a href="https://github.com/Semantic-Org/Semantic-UI-React">https://github.com/Semantic-Org/Semantic-UI-React</a>
    </td></tr><tr style="border:1px solid #000">
    <td style="border:1px solid #000">Star:</td>
    <td style="border:1px solid #000">12k</td></tr>
    <tr style="border:1px solid #000">
    <td style="border:1px solid #000">Issues</td>
    <td style="border:1px solid #000">104</td></tr>
    <tr style="border:1px solid #000">
    <td style="border:1px solid #000">Stackoverflow</td><td style="border:1px solid #000">838 questions</td></tr>
    <tr style="border:1px solid #000">
    <td style="border:1px solid #000">Contribuidores</td><td style="border:1px solid #000">307</td></tr><tr style="border:1px solid #000">
    <td style="border:1px solid #000">NPM</td><td style="border:1px solid #000">187.024</td></tr>
</tbody>
</table>

<br/>

Site: https://semantic-ui.com/introduction/integrations.html

---

## 6. React-Bootstrap

Como uma das bibliotecas React mais antigas, React-Bootstrap evoluiu e cresceu junto com React, tornando-se uma excelente escolha como sua base de IU.

<table>
<tbody>
<tr style="border:1px solid #000">
    <td style="border:1px solid #000">Github:</td>
    <td style="border:1px solid #000">
    <a href="https://github.com/react-bootstrap/react-bootstrap">https://github.com/react-bootstrap/react-bootstrap</a>
    </td></tr><tr style="border:1px solid #000">
    <td style="border:1px solid #000">Star:</td>
    <td style="border:1px solid #000">18.9k</td></tr>
    <tr style="border:1px solid #000">
    <td style="border:1px solid #000">Issues</td>
    <td style="border:1px solid #000">96</td></tr>
    <tr style="border:1px solid #000">
    <td style="border:1px solid #000">Stackoverflow</td><td style="border:1px solid #000">2,676 questions</td></tr>
    <tr style="border:1px solid #000">
    <td style="border:1px solid #000">Contribuidores</td><td style="border:1px solid #000">387</td></tr><tr style="border:1px solid #000">
    <td style="border:1px solid #000">NPM</td><td style="border:1px solid #000">688.455</td></tr>
</tbody>
</table>

<br/>

Site: https://react-bootstrap.github.io/

---

**REFERÊNCIAS**

**What is Declarative UI?**. Disponível em
https://softwareengineering.stackexchange.com/questions/173354/what-is-declarative-ui. Acessado em 21 de janeiro de 2021.

**What is Declarative UI?**. Disponível em
https://old.black/2020/10/06/what-is-declarative-ui/
. Acessado em 21 de janeiro de 2021.

**Difference between declarative and imperative in React.js?**. Disponível em
https://stackoverflow.com/questions/33655534/difference-between-declarative-and-imperative-in-react-js. Acessado em 22 de janeiro de 2021.

**Styling Components In React**. Disponível em
https://www.smashingmagazine.com/2020/05/styling-components-react. Acessado em 23 de janeiro de 2021.
