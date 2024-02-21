
import './App.css'
import ComplexWithUseState from './components/StartsWithHook/ComplexWithUseState'
import ComplexWithUseState1 from './components/StartsWithHook/ComplexWithUseState1'
import LemonResturent from './components/StartsWithHook/LemonResturent'
import UseState from './components/StartsWithHook/UseState'
import UseEffect from './components/UseEffect/UseEffect'
import UseEffect1 from './components/UseEffect/UseEffect1'

function App() {
  return (
    <>
      <UseState />
      <ComplexWithUseState />
      <ComplexWithUseState1 />
      <LemonResturent></LemonResturent>
      <UseEffect />
      <UseEffect1/>
    </>
  )
}

export default App
