import { Survey } from "../interfaces/index";
import axios from "axios";
import cheerio from "cheerio";

// interface IData {
//   githubUrl: string;
//   name: string;
//   site: string;
// }

export async function getData(urlGithub: string[][]): Promise<any[]> {
  let myData: any[];

  let contributors: any;

  myData = urlGithub.map(async (url) => {
    const [githubUrl, name, site, about] = url;

    const data = await axios(githubUrl);

    const html = data.data;

    const $ = cheerio.load(html);

    const star = $(".js-social-count");

    const issues = $(".d-flex > a > span.Counter");

    const Contribuidores = $("h2>a>span");

    if (name == "Ant-Designer") {
      contributors = $(Contribuidores[2])
        .attr("title")
        ?.trim()
        .replace(/\D+/gim, "");
    } else if (name == "Material-UI") {
      contributors = $(Contribuidores[2])
        .attr("title")
        ?.trim()
        .replace(/\D+/gim, "");
    } else if (name == "Chackra-ui") {
      contributors = $(Contribuidores[3])
        .attr("title")
        ?.trim()
        .replace(/\D+/gim, "");
    } else if (name == "Styled-system") {
      contributors = $(Contribuidores[3])
        .attr("title")
        ?.trim()
        .replace(/\D+/gim, "");
    } else if (name == "Semantic-UI-React") {
      contributors = $(Contribuidores[3])
        .attr("title")
        ?.trim()
        .replace(/\D+/gim, "");
    } else if (name == "React-Bootstrap") {
      contributors = $(Contribuidores[3])
        .attr("title")
        ?.trim()
        .replace(/\D+/gim, "");
    }

    //Ant 2
    //Material 2
    //Chackra-ui 3
    //Styled-system 3
    //Semantic-UI-React 3
    //React 3
    return new Promise<Survey>((resolve) => {
      resolve({
        name,
        site,
        Star: $(star[0]).attr("aria-label")?.trim().replace(/\D+/gim, ""),
        Issues: $(issues[1]).text().trim().replace(/\D+/gim, ""),
        Contribuidores: contributors,
        github: githubUrl,
        about,
        Stackoverflow: "",
        NPM: "",
      });
    });
  });

  return Promise.all(myData);
}

export async function readDataFromPackageNpm(urlNpm: string[]): Promise<any[]> {
  let myData: any[];

  myData = urlNpm.map(async (url) => {
    const data = await axios(`https://www.npmjs.com/package/${url}`);

    const html = data.data;

    const $ = cheerio.load(html);

    const countDownload = $(".flex-row-reverse>p");

    return new Promise<any>((resolve) => {
      resolve(+$($(countDownload)[0]).text().trim().replace(/\D+/gim, ""));
    });
  });

  return Promise.all(myData);
}

export async function readDataFromStackOverFlow(
  stackoverflowUrl: string[]
): Promise<any[]> {
  let myData: any[];

  myData = stackoverflowUrl.map(async (url) => {
    const data = await axios(
      `https://stackoverflow.com/questions/tagged/${url}`
    );

    const html = data.data;

    const $ = cheerio.load(html);

    const stackoverflow = $(".fs-body3");

    return new Promise<any>((resolve) => {
      resolve(+$($(stackoverflow)[0]).text().trim().replace(/\D+/gim, ""));
    });
  });

  return Promise.all(myData);
}
