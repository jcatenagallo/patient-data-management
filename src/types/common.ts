import { StaticImageData } from 'next/image';

export type PatientRecord = {
  avatar: string | StaticImageData;
  createdAt: string;
  description: string;
  id: string;
  name: string;
  website: string;
};
