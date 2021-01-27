import { Survey } from "../interfaces/index";
import axios from "axios";
import cheerio from "cheerio";

export async function getData(urlGithub: string[][]): Promise<any[]> {
  let myData: any[];

  myData = urlGithub.map(async (url) => {
    const [githubUrl, name, site] = url;

    const data = await axios(githubUrl);

    const html = data.data;

    const $ = cheerio.load(html);

    const star = $(".js-social-count");

    const issues = $(".d-flex > a > span.Counter");

    const Contribuidores = $(".mb-3 > .link-gray-dark span.Counter");

    return new Promise<Survey>((resolve) => {
      resolve({
        name,
        site,
        Star: $(star[0]).text().trim().trim().replace(/\D+/gmi,""),
        Issues: $(issues[1]).text().trim().replace(/\D+/gmi,""),
        Contribuidores: $(Contribuidores[1]).text().trim().replace(/\D+/gmi,""),
        github: githubUrl,
        about: "Sobre",
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
      resolve(+$($(countDownload)[0]).text().trim().replace(/\D+/gmi,""));
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
      resolve(+$($(stackoverflow)[0]).text().trim().replace(/\D+/gmi,""));
    });
  });

  return Promise.all(myData);
}
