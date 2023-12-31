import { ChipFilterType } from "../../Pages/Home/types";
import APIClient from "../../Providers/ApiClient";
import config from "../../config";
import { NewsApiResponse } from "./types";

type ParamsType = {
  q: ChipFilterType;
  from: string;
  to: string;
  language: string;
  sortBy?: string;
};

export default class News {
  public static Everything(params: ParamsType): Promise<NewsApiResponse> {
    const {
      q: query,
      from,
      to,
      language: selectedLanguage,
      sortBy = "publishedAt",
    } = params;
    const client = new APIClient(config.BASE_URL);

    return client.get<NewsApiResponse>(
      `v2/everything?q=${query}&from=${from}&to=${to}&sortBy=${sortBy}&language=${selectedLanguage}&apiKey=${config.API_KEY_NEWS}`
    );
  }
}
