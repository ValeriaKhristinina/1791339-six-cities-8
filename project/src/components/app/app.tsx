import MainPage from '../main-page/main-page';
// import LoginPage from '../login-page/login-page';
// import FavoritesPage from '../favorites-page/favorites-page';
// import RoomPage from '../room-page/room-page';


type AppProps = {
  rentsCount: number;
}

function App({rentsCount}: AppProps): JSX.Element {
  return (
    <div>
      {/* <LoginPage/>
      <FavoritesPage/>
      <RoomPage/> */}
      <MainPage rentsCount= {rentsCount}/>
    </div>
  );
}

export default App;
