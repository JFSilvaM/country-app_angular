export interface Country {
  uuid: string;
  flag: Flag;
  name: string;
  capitals: string;
  population: number;
}

export interface Flag {
  emoji: string;
  url_svg: string;
}
