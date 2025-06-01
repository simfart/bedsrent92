export type MediaItem = {
  type: 'image' | 'video';
  src: string;
  altLabel?: string;
  poster?: string;
};

export type Product = {
  id: number;
  name: string;
  price: string;
  description?: string;
  media: MediaItem[];
};
