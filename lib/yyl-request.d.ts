interface IRes {
  statusCode: number;
  [key: string]: any;
}

interface IOptions {
  method?: string;
  uri?: string;
  har?: any;
  baseUrl?: string;
  headers?: any;
  qs?: any;
  qaParseOptions?: any;
  qsStringifyOptions?: any;
  useQuerystring?: boolean;
  body?: any;
  form?: any;
  formData?: any;
  multipart?: any[];
  preambleCRLF?: any;
  postambleCRLF?: any;
  json?: any;
  jsonReviver?: any;
  jsonReplacer?: any;
  auth?: any;
  oauth?: any;
  hawk?: any;
  aws?: any;
  httpSignature?: any;
  followRedirect?: boolean;
  followAllRedirects?: boolean;
  followOriginalHttpMethod?: boolean;
  maxRedirects?: number;
  removeRefererHeader?: boolean;
  encoding?: any;
  gzip?: boolean;
  jar?: boolean;
  agent?: any;
  agentClass?: any;
  agentOptions?: any;
  forever?: boolean;
  pool?: any;
  timeout?: number;
  localAddress?: any;
  proxy?: number;
  strictSSL?: any;
  tunnel?: boolean | undefined;
  proxyHeaderWhiteList?: any;
  proxyHeaderExclusiveList?: any;
  time?: any;
  har?: any;
  callback?: any;
}

type cbArr = [Error | undefined, IRes | undefined, any];

declare interface IRequest {
  (url: string): Promise<cbArr>
  (options: IOptions): Promise<cbArr>
  get(url: string): Promise<cbArr>;
  get(options: IOptions): Promise<cbArr>;
  post(url: string): Promise<cbArr>;
  post(options: IOptions): Promise<cbArr>;
  origin: any;
}

declare const extRequest: IRequest;

export = extRequest;