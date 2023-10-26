import { CardQuiz } from "./components/CardQuiz/CardQuiz"
import { CardResult } from "./components/CardResult/CardResult"

function App() {
  return (
    <main className="layout">
      <div className="wrapperTitle">
        <h1 className="h2_bold">Country quiz</h1>
      </div>
      <CardResult />
    </main>
  )
}

export default App
