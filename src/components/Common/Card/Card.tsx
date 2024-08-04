import tw from 'twin.macro';

import { PatientRecord } from '@/types/common';

import AccordionDescription from './AccordionDescription';
import TopInformation from './TopInformation';

const StyledWrapper = tw.div`
flex
flex-col
border-grays-light
border
rounded-2xl
tablet:max-w-[500px]
w-full
h-fit
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
  const { description, name, avatar, website, createdAt } = patientData;

  return (
    <StyledWrapper>
      <TopInformation avatar={avatar} createdAt={createdAt} name={name} website={website} />
      <StyledDivider />
      <AccordionDescription description={description} />
    </StyledWrapper>
  );
};

export default Card;
