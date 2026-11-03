import PlayersList from './component/PlayerList.jsx';
import './App.css'

function App() {
  

  return (
    <>
       <main className="app">

      <header className="text-center py-5">
        <p className="eyebrow mb-2">THE BEAUTIFUL GAME</p>

        <h1 className="display-4 fw-bold">
          FIFA Player Cards
        </h1>

        <p className="lead">
          Meet some of football's biggest stars.
        </p>
      </header>

      <PlayersList />

    </main>
    </>
  )
}

export default App
