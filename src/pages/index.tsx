import tw from 'twin.macro';

import Layout from '@/components/Layout';
import useGetPatientsRecords from '@/hooks/api/useGetPatientsRecord';
import Card from '@/components/Common/Card';

const StyledWrapper = tw.div`
flex
relative
p-4
gap-4
flex-wrap
`;

export default function Home() {
  const { data } = useGetPatientsRecords();

  return (
    <Layout>
      <StyledWrapper>
        {data?.map((item) => <Card key={item.id} patientData={item} />)}
      </StyledWrapper>
    </Layout>
  );
}
