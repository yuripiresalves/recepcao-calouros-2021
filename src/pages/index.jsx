import { Container } from '../components/Container';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Terminal } from '../components/Terminal';

export default function Home() {
  console.log(
    '%c Bitzinho',
    'color: blue; background: tomato; padding: 32px; font-size: 24px; font-weight: bold; border-radius: 16px;'
  );
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
