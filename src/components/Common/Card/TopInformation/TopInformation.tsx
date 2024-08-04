import Image from 'next/image';
import { format, isValid, parseISO } from 'date-fns';
import { CalendarDaysIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import tw from 'twin.macro';
import { useMemo } from 'react';

const StyledWrapper = tw.div`
flex
flex-col
gap-3
p-6

tablet:flex-row
tablet:justify-between
tablet:items-center
`;

const StyledLeftContainer = tw.div`
flex
items-center
gap-x-3
`;

const StyledSubLeftContainer = tw.div`
flex
flex-col
gap-y-0.5
`;

const StyledName = tw.h3`
font-bold
text-lg
text-darks-black
leading-6
tablet:text-xl
`;

const StyledWebsite = tw.span`
font-normal
text-sm
text-grays-smooth
leading-5
hover:underline
tablet:text-base
`;

const StyledRightContainer = tw.div`
flex
items-center
gap-2
`;

const StyledDate = tw.span`
font-normal
text-sm
leading-5
text-darks-black

tablet:text-base
`;

const removeHttpPrefix = (url: string) => {
  if (url.startsWith('http://')) {
    return url.slice(7);
  }
  if (url.startsWith('https://')) {
    return url.slice(8);
  }

  return url;
};

type Props = {
  name: string;
  avatar: string;
  website: string;
  createdAt: string;
};

const TopInformation = ({ name, avatar, website, createdAt }: Props) => {
  const formattedDate = useMemo(() => {
    const dateWithoutZ = createdAt.slice(0, -1);
    const date = parseISO(dateWithoutZ);

    if (!isValid(date)) return undefined;

    return format(date, 'MM/dd/yyyy');
  }, [createdAt]);

  return (
    <StyledWrapper>
      <StyledLeftContainer>
        {avatar && (
          <Image
            alt={`${name}-avatar`}
            height={48}
            src={avatar}
            style={{
              objectFit: 'cover',
              borderRadius: '100px',
              maxWidth: '48px',
              maxHeight: '48px',
            }}
            width={48}
          />
        )}
        <StyledSubLeftContainer>
          <StyledName>{name}</StyledName>
          <Link href={website} rel="noopener noreferrer" target="_blank">
            <StyledWebsite>{removeHttpPrefix(website)}</StyledWebsite>
          </Link>
        </StyledSubLeftContainer>
      </StyledLeftContainer>
      {formattedDate && (
        <StyledRightContainer>
          <CalendarDaysIcon className="h-6 w-6 text-darks-black" />
          <StyledDate>{formattedDate}</StyledDate>
        </StyledRightContainer>
      )}
    </StyledWrapper>
  );
};

export default TopInformation;
