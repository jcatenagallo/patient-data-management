import tw from 'twin.macro';

import { PatientRecord } from '@/types/common';

import AccordionDescription from './AccordionDescription';

const StyledWrapper = tw.div`
flex
flex-col
border-grays-light
border
rounded-2xl
max-w-2xl
w-full
`;

const StyledTopContainer = tw.div`
flex
p-6
`;

const StyledDivider = tw.div`
w-full
bg-grays-light
h-px
`;

type Props = {
  patientData: PatientRecord;
};

const Card = ({ patientData }: Props) => {
  const { description, name } = patientData;

  return (
    <StyledWrapper>
      <StyledTopContainer>{name}</StyledTopContainer>
      <StyledDivider />
      <AccordionDescription description={description} />
    </StyledWrapper>
  );
};

export default Card;
