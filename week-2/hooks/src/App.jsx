
import './App.css'
import ComplexWithUseState from './components/StartsWithHook/ComplexWithUseState'
import ComplexWithUseState1 from './components/StartsWithHook/ComplexWithUseState1'
import LemonResturent from './components/StartsWithHook/LemonResturent'
import UseState from './components/StartsWithHook/UseState'
import UseEffect from './components/UseEffect/UseEffect'

function App() {
  return (
    <>
      <UseState />
      <ComplexWithUseState />
      <ComplexWithUseState1 />
      <LemonResturent></LemonResturent>
      <UseEffect />
    </>
  )
}

export default App
