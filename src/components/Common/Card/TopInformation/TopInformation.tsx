import Image from 'next/image';
import { PencilIcon } from '@heroicons/react/24/outline';
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
relative

tablet:flex-row
tablet:justify-between
tablet:items-center
`;

const StyledLeftContainer = tw.div`
flex
items-center
gap-x-3
`;

const StyledSubContainer = tw.div`
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

const StyledDateContainer = tw.div`
items-center
flex
gap-2
`;

const StyledSpan = tw.span`
font-normal
text-sm
leading-5
text-darks-black

tablet:text-base 
`;

const StyledEditSpan = tw(StyledSpan)`
hidden
tablet:block
`;

const StyledEditButton = tw.button`
items-center
flex
gap-2
absolute
top-6
right-6

tablet:relative
tablet:top-auto
tablet:right-auto

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
        <StyledSubContainer>
          <StyledName>{name}</StyledName>
          <Link href={website} rel="noopener noreferrer" target="_blank">
            <StyledWebsite>{removeHttpPrefix(website)}</StyledWebsite>
          </Link>
        </StyledSubContainer>
      </StyledLeftContainer>
      <StyledSubContainer>
        <StyledEditButton>
          <PencilIcon className="h-5 w-5 text-darks-black" />
          <StyledEditSpan>Edit</StyledEditSpan>
        </StyledEditButton>

        {formattedDate && (
          <StyledDateContainer>
            <CalendarDaysIcon className="h-6 w-6 text-darks-black" />
            <StyledSpan>{formattedDate}</StyledSpan>
          </StyledDateContainer>
        )}
      </StyledSubContainer>
    </StyledWrapper>
  );
};

export default TopInformation;
