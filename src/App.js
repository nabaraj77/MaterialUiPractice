import "./App.css";
import TourCard from "./Components/TourCard.js";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import SearchAppBar from "./Components/AppBar";
function App() {
  return (
    <div className="App">
      <SearchAppBar />
      <Container>
        <Grid container spacing={3}>
          <TourCard />
          <TourCard />
          <TourCard />
          <TourCard />
        </Grid>
      </Container>
    </div>
  );
}

export default App;
