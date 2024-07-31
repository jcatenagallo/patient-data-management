import tw from 'twin.macro';

import Layout from '@/components/Layout';

const StyledWrapper = tw.div`
flex
flex-col
relative
overflow-hidden
`;

export default function Home() {
  return (
    <StyledWrapper>
      <Layout>NEXT JS, TAILWIND, TWIN MACRO, STYLED COMPONENTS, HUSKY, ESLINT BASE PROJECT</Layout>
    </StyledWrapper>
  );
}
