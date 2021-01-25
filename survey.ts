interface Survey {
  name: string;
  github: string;
  Star: string;
  Issues: string;
  Stackoverflow: string;
  Contribuidores: string;
  NPM: string;
  about?: string;
  site: string;
}

const data: Survey[] = [
  {
    name: "Ant-designer",
    github: "https://github.com/ant-design/ant-design",
    Star: "66.4k",
    Issues: "553",
    Stackoverflow: "2,864 questions",
    Contribuidores: "+1352",
    NPM: "515.889",
    about:
      "Um sistema de design para produtos de nível empresarial. Crie uma experiência de trabalho eficiente e agradável.",
    site: "https://ant.design/",
  },
  {
    name: "Material-UI",
    github: "https://github.com/mui-org/material-ui",
    Star: "64.6k",
    Issues: "446",
    Stackoverflow: " 500 results",
    Contribuidores: "+2079",
    NPM: "1.504.274",
    about:
      "Biblioteca de componentes React para um desenvolvimento ágil e fácil. Construa seu próprio design, ou comece com Material Design.",
    site: "https://material-ui.com",
  },
  {
    name: "Chackra-ui",
    github: "https://github.com/chakra-ui/chakra-ui",
    Star: "14.6k",
    Issues: "81",
    Stackoverflow: "30 questions",
    Contribuidores: "+310",
    NPM: "32.280",
    about:
      "Chakra UI é uma biblioteca de componentes simples, modular e acessível que fornece os blocos de construção de que você precisa para construir seus aplicativos React.",
    site: "https://chakra-ui.com/",
  },
  {
    name: "Styled-system",
    github: "https://github.com/styled-system/styled-system",
    Star: "6.5k",
    Issues: "69",
    Stackoverflow: "14 questions",
    Contribuidores: "+109",
    NPM: "387.930",
    about: `O Styled System permite que você crie rapidamente componentes de UI personalizados com adereços de estilo baseados em restrições com base em escalas definidas em seu tema`,
    site: "https://styled-system.com/",
  },
  {
    name: "Semantic-UI-React",
    github: "https://github.com/Semantic-Org/Semantic-UI-React",
    Star: "12k",
    Issues: "104",
    Stackoverflow: "838 questions",
    Contribuidores: "307",
    NPM: "187.024",
    about: `O Semantic UI é um framework de desenvolvimento rápido que te ajuda a criar layouts responsivos utilizando o HTML de uma forma simples e fácil.`,
    site: "https://semantic-ui.com/introduction/integrations.html",
  },
  {
    name: "React-Bootstrap",
    github: "https://github.com/react-bootstrap/react-bootstrap",
    Star: "18.9k",
    Issues: "96",
    Stackoverflow: "2,676 questions",
    Contribuidores: "387",
    NPM: "688.455",
    about:
      "Como uma das bibliotecas React mais antigas, React-Bootstrap evoluiu e cresceu junto com React, tornando-se uma excelente escolha como sua base de IU.",
    site: "https://react-bootstrap.github.io/",
  },
];

let str: string;

data.map(
  (
    {
      Contribuidores,
      Issues,
      NPM,
      Stackoverflow,
      Star,
      about,
      github,
      name,
      site,
    }: Survey,
    index: number
  ) => {
    str += `
## ${index+1}. ${name}

${about}

<table>
<tbody>
<tr style="border:1px solid #000">
    <td style="border:1px solid #000">Github:</td>
    <td style="border:1px solid #000">
    <a href="${github}">${github}</a>
    </td></tr><tr style="border:1px solid #000">
    <td style="border:1px solid #000">Star:</td>
    <td style="border:1px solid #000">${Star}k</td></tr>
    <tr style="border:1px solid #000">
    <td style="border:1px solid #000">Issues</td>
    <td style="border:1px solid #000">${Issues}</td></tr>
    <tr style="border:1px solid #000">
    <td style="border:1px solid #000">Stackoverflow</td><td style="border:1px solid #000">${Stackoverflow}</td></tr>
    <tr style="border:1px solid #000">
    <td style="border:1px solid #000">Contribuidores</td><td style="border:1px solid #000">${Contribuidores}</td></tr><tr style="border:1px solid #000">
    <td style="border:1px solid #000">NPM</td><td style="border:1px solid #000">${NPM}</td></tr>
</tbody>
</table>

<br/>

Site: ${site}

----
`;
  }
);

console.log(str);