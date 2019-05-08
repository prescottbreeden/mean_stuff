export interface Hero {
  _id: string;
  name: string;
  power: string;
}

export function MapHero(data: Hero): Hero {
  return {
    _id: data._id,
    name: data.name,
    power: data.power
  };
}


