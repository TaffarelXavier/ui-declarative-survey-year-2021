# Esta é uma pesquisa que avalia de forma sintética a interface do pacotes que _UI declarative_ em janeiro de 2021

## Conteúdo

- [Introdução](#Introdução)
- [Mas afinal, o que é UI Declarative?](#Conceito)
- [Variáveis Analisadas](#variáveisanalisadas)
- [Os pacotes entorno dessa pesquisa]()
- [Análise dos pacotes]()
  - 1
  - 2
  - 3
  - 4
  - 5
  - 6

# Introdução

Desde os primórdios da web, que programadores de todas as idades trabalham com css, visto que é um ponto fundamental para que haja estilização nas páginas no desenvolvimento web. Para tanto, até os anos 2010, eram usados seletores como ID, classes, etc. Porém, com o advento da web e a progressão exponencial de informações, houve a necessidade de criar ferramentas que atendessem essa demanda de forma mais eficaz. É aí que surge o paradigma da UI Declarativa. Nesse padrão, as coisas funcionam um pouco diferente, a forma de estilização vem dentro do html, em cada elemento, usando props, por exemplo, no react js.
O seguinte trabalho vista descobrir quais, quantitativamente, as melhores UIs Declarativas em janeiro de 2021. Para isso, analisaremos dados dos site **stackoverflow**, em inglês, **github** e **npm**.

# Conceito

Mas afinal, o que é UI Declarative?

A IU declarativa não é um conceito novo no mundo do desenvolvimento, mas está ganhando impulso no SDK nativo móvel, provavelmente depois que algumas outras estruturas de plataforma cruzada começaram a explorar essas abordagens. Aprender como usá-los implica em mudar a maneira como imaginamos os layouts e as interfaces gráficas de usuário nos últimos anos. Dessa forma, UI Declarativa é o processo que descreve em algum tipo de linguagem quais elementos você precisa em sua IU e, até certo ponto, como eles deveriam ser, mas você pode omitir detalhes como a posição exata e o estilo visual dos elementos. Por exemplo, em HTML, você pode descrever que deseja um campo de entrada, mas como e onde esse campo será colocado na IU depende muito do navegador que você está usando. Nesse formato, o usuário descreve sua IU como funções que transformam dados em uma hierarquia de IU. Hoje, o termo é usado com mais frequência para estruturas de IU com uma separação estrita da aparência da IU do comportamento, o que significa que o código reage aos eventos da IU. Por exemplo, usando XAML, você declara a aparência de sua interface do usuário em um dialeto XML específico, mas implementa o comportamento em código de programa separado.

# Os pacotes entorno dessa pesquisa serão:

1. Ant-designer
2. Material-UI
3. Chackria
4. Styled-system
5. Semantic-UI
6. react-bootstrap

# Variáveis analisadas:

- **Star** (github) - a quantidade de estrela no github, que facilita a localização posterior de um repositório ou tópico, além disso, mostra a quantidade relativa de pessoas que usam o pacote.
- **Issues** (github) - Lugar onde o usuário contribuem para o projeto, seja na quantidade de problemas, dicas, melhorias do pacote, etc.
- **Contribuidores** (github) - a quantidade de contribuidores do pacote, que é encontrado no github do pacote escolhido.
- **Perguntas no Stackoverflow** (stackvorflow) - Stack Overflow é um dos maiores site de perguntas e respostas para profissionais e entusiastas na área de programação de computadores. É o principal site de capital fechado da Rede Stack Exchange.
- **NPM** - é o Gerenciador de Pacotes do Node (Node Package Manager).Npm é a maior biblioteca de software do mundo (registro). A variável será a quantidade de downloads geral pelo pacote.

---

## 1. Ant-designer

<table>
<tbody>
<tr style="border:1px solid #000">
    <td style="border:1px solid #000">Github:</td>
    <td style="border:1px solid #000">
    <a href="https://github.com/ant-design/ant-design">https://github.com/ant-design/ant-design</a>
    </td></tr><tr style="border:1px solid #000">
    <td style="border:1px solid #000">Github:</td>
    <td style="border:1px solid #000">66.4k</td></tr>
    <tr style="border:1px solid #000">
    <td style="border:1px solid #000">Issues</td>
    <td style="border:1px solid #000">553</td></tr>
    <tr style="border:1px solid #000">
    <td style="border:1px solid #000">Stackoverflow</td><td style="border:1px solid #000">2,864 questões</td></tr>
    <tr style="border:1px solid #000">
    <td style="border:1px solid #000">Contribuidores</td><td style="border:1px solid #000">+1352</td></tr><tr style="border:1px solid #000">
    <td style="border:1px solid #000">NPM</td><td style="border:1px solid #000">+515.889</td></tr>
</tbody>
</table>

---

**REFERÊNCIAS**

**What is Declarative UI?**. Disponível em
https://softwareengineering.stackexchange.com/questions/173354/what-is-declarative-ui. Acessado em 21 de janeiro de 2021.

**What is Declarative UI?**. Disponível em
https://old.black/2020/10/06/what-is-declarative-ui/
. Acessado em 21 de janeiro de 2021.
