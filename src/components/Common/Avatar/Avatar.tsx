import React from 'react';
import tw from 'twin.macro';
import Image from 'next/image';

const StyledLogoutWrapper = tw.div`
max-w-10
max-h-10
rounded-full
flex
items-center
justify-center
`;

type Props = {
  image: string;
};

const Avatar = ({ image }: Props) => {
  return <StyledLogoutWrapper />;
};

export default Avatar;
