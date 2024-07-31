import tw from 'twin.macro';

const StyledWrapper = tw.div`
flex
flex-col
`;

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return <StyledWrapper>{children}</StyledWrapper>;
};

export default Layout;
