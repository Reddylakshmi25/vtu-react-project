import HomeScreen from "./Screens/HomeScreen";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
     <Header />
     <Container>
      <main>
        <HomeScreen/>
      </main>
     </Container>
     <Footer />
    </>
  );
}

export default App;
