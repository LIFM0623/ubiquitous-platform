interface logoListItem {
  id: number;
  name: string;
  src: string;
  alt: string;
}

type WordData = {
  [key in `wordData_${number}`]: { name: string; value: number }[];
};

export type { WordData, logoListItem };
