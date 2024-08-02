import tw from 'twin.macro';
import Image from 'next/image';

import Layout from '@/components/Layout';
import useGetPatientsRecords from '@/hooks/api/useGetPatientsRecord';

const StyledWrapper = tw.div`
flex
flex-col
relative
overflow-hidden
`;

export default function Home() {
  const { data } = useGetPatientsRecords();

  return (
    <Layout>
      <StyledWrapper>
        {data?.map((item) => (
          <div key={item.id}>
            <h1>{item.name}</h1>
            <p>{item.website}</p>
            <p>{item.createdAt}</p>
            <p>{item.description}</p>
            <Image alt={`${item.avatar}-avatar`} height={200} src={item.avatar} width={200} />
          </div>
        ))}
      </StyledWrapper>
    </Layout>
  );
}
