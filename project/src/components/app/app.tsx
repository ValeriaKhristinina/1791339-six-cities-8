import MainPage from '../main-page/main-page';

type AppProps = {
  rentsCount: number;
}

function App({rentsCount}: AppProps): JSX.Element {
  return (
    <MainPage rentsCount= {rentsCount}/>
  );
}

export default App;
