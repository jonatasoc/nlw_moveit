import { GlobalStyle } from '../../styles/global';
import Container from './styles';

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <Container>
      <GlobalStyle />
      {children}
    </Container>
  );
}
