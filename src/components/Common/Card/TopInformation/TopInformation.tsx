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

desktop:flex-row
desktop:justify-between
desktop:items-center
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
text-xl
text-darks-black
leading-6
`;

const StyledWebsite = tw.span`
font-normal
text-base
text-grays-smooth
leading-5

hover:underline
`;

const StyledRightContainer = tw.div`
flex
items-center
gap-2
`;

const StyledDate = tw.span`
font-normal
text-base
leading-5
text-darks-black
`;

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
            <StyledWebsite>{website}</StyledWebsite>
          </Link>
        </StyledSubLeftContainer>
      </StyledLeftContainer>
      {formattedDate && (
        <StyledRightContainer>
          <CalendarDaysIcon className="h-6 w-6 text-darks-black" />
          <StyledDate>{`Created at: ${formattedDate}`}</StyledDate>
        </StyledRightContainer>
      )}
    </StyledWrapper>
  );
};

export default TopInformation;
