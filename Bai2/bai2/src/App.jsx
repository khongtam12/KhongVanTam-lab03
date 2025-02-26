import { useState } from 'react'

import Caculator from './components/Caculator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Caculator/>
    </>
  )
}

export default App
