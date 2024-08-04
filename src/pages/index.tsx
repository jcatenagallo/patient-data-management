import tw from 'twin.macro';

import Layout from '@/components/Layout';
import useGetPatientsRecords from '@/hooks/api/useGetPatientsRecord';
import Card from '@/components/Common/Card';

const StyledWrapper = tw.div`
relative
p-4
gap-4
grid
tablet:mx-auto
grid-cols-1
tablet:grid-cols-2
desktop:grid-cols-3
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
