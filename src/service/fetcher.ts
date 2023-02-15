import { AxiosResponse } from "axios";

import API from "@/service/instance";

const fetcher = (url: string): Promise<AxiosResponse> =>
  API.get(url).then((res) => res.data);

export default fetcher;
