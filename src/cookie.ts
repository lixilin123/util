interface CookieData {
  [key: string]: string;
}

interface WriteOption {
  path?: string;
  domain?: string;
  maxAge?: number | string;
  expires?: string;
  httpOnly?: boolean;
}

const cookie = {
  
  all(): CookieData {
    const maps: CookieData = {};
    const cookArr = document.cookie.split(";");
    for (const i in cookArr) {
      const tmp = cookArr[i].replace(/^\s*/, "");
      if (tmp) {
        let nv = tmp.split("=");
        maps[nv[0]] = nv[1] || "";
      }
    }
    return maps;
  },

  get(name: string): string | undefined {
    return this.all()[name];
  },

  set(name: string, value: string, option: WriteOption) {
    let str = `${name}=${value}`;
    option.path && (str += `;path=${option.path}`);
    option.domain && (str += `;domain=${option.domain}`);
    option.maxAge && (str += `;max-age=${option.maxAge}`);
    option.expires && (str += `;expires=${option.expires}`);
    option.httpOnly && (str += `;secure`);
    document.cookie = str;
  }
};

export default cookie;
