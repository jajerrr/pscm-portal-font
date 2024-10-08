
export interface NewsItem {
  date: string;
  header: string;
  detail: string;
  img: string;
}

export interface NewsStore {
  newsItems: NewsItem[];  // เก็บรายการข่าวสารในรูปแบบ array
}