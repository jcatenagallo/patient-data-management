import Image, { StaticImageData } from 'next/image';

type Props = {
  name: string;
  src: string | StaticImageData;
};

const Avatar = ({ name, src }: Props) => {
  return (
    <Image
      alt={`${name}-avatar`}
      height={48}
      src={src}
      style={{
        objectFit: 'cover',
        borderRadius: '100px',
        maxWidth: '48px',
        maxHeight: '48px',
      }}
      width={48}
    />
  );
};

export default Avatar;
