import { GetStaticProps, NextPage } from "next";
import ReactMarkdown from "react-markdown";
import Layout from "../components/Layout";
import { Survey } from "../interfaces/index";
import {
  getData,
  readDataFromPackageNpm,
  readDataFromStackOverFlow
} from "../lib/request";

interface IPackage {
  package?: string;
  name?: string;
}

interface PropsPackage {
  data: IPackage[][];
}

const markdown = `# Esta é uma pesquisa que avalia de forma sintética a interface de pacotes que usam _UI declarative_ em janeiro de 2021

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

\`\`\`js
if (user.likes()) {
  if (hasBlue()) {
    removeBlue();
    addGrey();
  } else {
    removeGrey();
    addBlue();
  }
}
\`\`\`

**Exemplo Declarativo**

\`\`\`js
if (this.state.liked) {
  return <blueLike />;
} else {
  return <greyLike />;
}
\`\`\`

# Os pacotes entorno dessa pesquisa serão:

1. Ant-designer
2. Material-UI
3. Chackria
4. Styled-system
5. Semantic-UI
6. React-Bootstrap

> **Nota sobre o styled-components**\n
> O motivo pelo qual não o coloquei é que, na verdade, styled-components não é uma lib declarativa, antes, usa CSS-in-JS.

---

# Variáveis analisadas em cada pacote:

- **Star** (github) - a quantidade de estrela no github, que facilita a localização posterior de um repositório ou tópico, além disso, mostra a quantidade relativa de pessoas que usam o pacote.
- **Issues** (github) - Lugar onde o usuário contribuem para o projeto, seja na quantidade de problemas, dicas, melhorias do pacote, etc.
- **Contribuidores** (github) - a quantidade de contribuidores do pacote, que é encontrado no github do pacote escolhido.
- **Perguntas no Stackoverflow** (stackvorflow) - Stack Overflow é um dos maiores site de perguntas e respostas para profissionais e entusiastas na área de programação de computadores. É o principal site de capital fechado da Rede Stack Exchange.
- **NPM** - é o Gerenciador de Pacotes do Node (Node Package Manager).Npm é a maior biblioteca de software do mundo (registro). A variável será a quantidade de downloads geral pelo pacote.

---`;

const MuDAta = () => {
  return (
    <>
      <ReactMarkdown children={markdown} />
    </>
  );
};

const IndexPage: NextPage<PropsPackage> = (props) => (
  <Layout title="Home | Next.js + TypeScript Example">
    <MuDAta />

    {props.data[2].map((el: Survey, index) => {
      return (
        <div key={el.name}>
          <h2>
            {index + 1}. {el.name}
          </h2>
          <p>{el.about}</p>
          <table style={{border:"1px solid #ccc", borderCollapse:"collapse"}}>
            <tbody>
              <tr style={{ border: "1px solid  #ccc" }}>
                <td style={{ border: "1px solid  #ccc" }}>Github:</td>
                <td style={{ border: "1px solid  #ccc" }}>
                  <a href="${github}">{el.github}</a>
                </td>
              </tr>
              <tr style={{ border: "1px solid  #ccc" }}>
                <td style={{ border: "1px solid  #ccc" }}>Star:</td>
                <td style={{ border: "1px solid  #ccc" }}>{el.Star}</td>
              </tr>
              <tr style={{ border: "1px solid  #ccc" }}>
                <td style={{ border: "1px solid  #ccc" }}>Issues</td>
                <td style={{ border: "1px solid  #ccc" }}>{el.Issues}</td>
              </tr>
              <tr style={{ border: "1px solid  #ccc" }}>
                <td style={{ border: "1px solid  #ccc" }}>Stackoverflow</td>
                <td style={{ border: "1px solid  #ccc" }}>{props.data[1][index].package}</td>
              </tr>
              <tr style={{ border: "1px solid  #ccc" }}>
                <td style={{ border: "1px solid  #ccc" }}>Contribuidores</td>
                <td style={{ border: "1px solid  #ccc" }}>{props.data[0][index].package}</td>
              </tr>
              <tr style={{ border: "1px solid  #ccc" }}>
                <td style={{ border: "1px solid  #ccc" }}>NPM</td>
                <td style={{ border: "1px solid  #ccc" }}>{el.NPM}</td>
              </tr>
            </tbody>
          </table>
          <br />
          Site:{" "}
          <a href={el.site} target="_blank">
            {el.site}
          </a>
        </div>
      );
    })}
  </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
  const data = await getData([
    [
      "https://github.com/ant-design/ant-design",
      "Ant-Designer",
      "https://ant.design",
    ],
    [
      "https://github.com/mui-org/material-ui",
      "Material-UI",
      "https://material-ui.com",
    ],
    [
      "https://github.com/chakra-ui/chakra-ui",
      "Chackra-ui",
      "https://chakra-ui.com/",
    ],
    [
      "https://github.com/styled-system/styled-system",
      "Styled-system",
      "https://styled-system.com/",
    ],
    [
      "https://github.com/Semantic-Org/Semantic-UI-React",
      "Semantic-UI-React",
      "https://semantic-ui.com/introduction/integrations.html",
    ],
    [
      "https://github.com/react-bootstrap/react-bootstrap",
      "React-Bootstrap",
      "https://react-bootstrap.github.io/",
    ],
  ]);

  const npm = await readDataFromPackageNpm([
    "antd",
    "@material-ui/core",
    "@chakra-ui/core",
    "styled-system",
    "semantic-ui-react",
    "react-bootstrap",
  ]);

  const stackoverflow = await readDataFromStackOverFlow([
    "antd",
    "material-ui",
    "chakra-ui",
    "styled-system",
    "semantic-ui-react",
    "react-bootstrap",
  ]);

  let newArr = [[...npm], [...stackoverflow], [...data]];

  return {
    props: { data: newArr }, // will be passed to the page component as props
  };
};

export default IndexPage;
