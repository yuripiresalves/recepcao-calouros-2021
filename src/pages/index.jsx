import { Container } from '../components/Container';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Terminal } from '../components/Terminal';

export default function Home() {
  console.log('Bit');
  return (
    <>
      <Container>
        <Header />
        <Terminal />
      </Container>
      <Footer />
    </>
  );
}
