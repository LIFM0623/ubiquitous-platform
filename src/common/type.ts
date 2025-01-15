interface logoListItem {
  id: number;
  name: string;
  src: string;
  alt: string;
}

type WordData = {
  [key in `wordData_${number}`]: { name: string; value: number }[];
};

// tabs Type
interface tabListItem {
  id: string;
  name: string;
  url?: string;
  children?: tabListItem[];
}

export type { WordData, logoListItem, tabListItem };
