import Container from "./containers/Container";
import TopDoctorsSection from "./sections/TopDoctorsSection";

const App = () => {
  return (
    <div>
      <h1 className="text-orange bg-brown text-4xl font-bold">Welcome to KlinicCon App</h1>
      <div className="doctor-section z-10">
        <Container className="pt-8 pb-4">
          <TopDoctorsSection />
        </Container>
      </div>
    </div>
  );
};

export default App;
