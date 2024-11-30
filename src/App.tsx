import { useRoutes } from 'react-router';

import routes from './router';

function App() {
  return (
    <div className="h-screen w-screen bg-[url('/images/backgroud.png')] bg-cover bg-center">{useRoutes(routes)}</div>
  );
}

export default App;
