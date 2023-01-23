export interface FullData {
  destinations: Destination[];
  crew: Crew[];
  technology: Technology[];
}

export interface Destination {
  name: string;
  images: Images;
  description: string;
  distance: string;
  travel: string;
}

export interface Images {
  png: string;
  webp: string;
}

export interface Crew {
  name: string;
  images: Images2;
  role: string;
  bio: string;
}

export interface Images2 {
  png: string;
  webp: string;
}

export interface Technology {
  name: string;
  images: Images3;
  description: string;
}

export interface Images3 {
  portrait: string;
  landscape: string;
}
