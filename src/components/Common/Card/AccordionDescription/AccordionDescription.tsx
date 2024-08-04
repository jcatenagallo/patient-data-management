import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import tw, { styled } from 'twin.macro';
import { ChevronRightIcon } from '@heroicons/react/16/solid';

const StyledWrapper = tw.div`
bg-grays-background
p-6
flex
flex-col
rounded-b-2xl
`;

const StyledDivider = tw(motion.div)`
w-full
bg-grays-light
h-px
my-3
self-center
`;

const StyledButton = styled.button<{ $rotate?: boolean }>`
  .card-arrowIcon {
    ${({ $rotate }) => ($rotate ? tw`rotate-90` : tw`rotate-0`)}
    ${tw`
    transition-transform
    `}
  }

  ${tw`
    flex
    gap-1
    items-center
  `}
`;

const StyledButtonLabel = tw.span`
font-semibold
text-base
`;

const StyledDescriptionWrapper = tw(motion.div)`
flex
flex-col
`;

const StyledDescription = tw(motion.p)`
font-normal
text-base
`;

type Props = {
  description: string;
};

const AccordionDescription = ({ description }: Props) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState<boolean>(false);

  return (
    <StyledWrapper>
      <StyledButton $rotate={isAccordionOpen} onClick={() => setIsAccordionOpen((prev) => !prev)}>
        <ChevronRightIcon className="card-arrowIcon h-6 w-6 text-darks-black" />
        <StyledButtonLabel>View Details</StyledButtonLabel>
      </StyledButton>
      <AnimatePresence>
        {isAccordionOpen && (
          <StyledDescriptionWrapper
            key="content"
            animate="open"
            exit="collapsed"
            initial="collapsed"
            transition={{ duration: 0.2, ease: [0.04, 0.62, 0.23, 0.98] }}
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 },
            }}>
            <StyledDivider
              transition={{ duration: 0.3 }}
              variants={{ collapsed: { width: 0 }, open: { width: '100%' } }}
            />
            <StyledDescription
              className="content-placeholder"
              transition={{ duration: 0.2 }}
              variants={{ collapsed: { scale: 0.9 }, open: { scale: 1 } }}>
              {description}
            </StyledDescription>
          </StyledDescriptionWrapper>
        )}
      </AnimatePresence>
    </StyledWrapper>
  );
};

export default AccordionDescription;
