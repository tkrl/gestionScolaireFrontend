import { useState } from 'react'
import { Button } from './components/ui/button';


function App() {
  const [count, setCount] = useState<number>(0)

  return (
    <div className='flex justify-center items-center h-screen gap-1 '>
      <Button onClick={() => setCount(count + 1)}>Incrémenter</Button>
      <div>{count}</div>
    <Button onClick={() => setCount(count != 0 ? count - 1: count)} disabled={count == 0} >Décrémenter</Button>

    </div>
  )
}

export default App
