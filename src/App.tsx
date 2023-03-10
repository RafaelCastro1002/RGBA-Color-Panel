import { useState } from 'react'
import ColorPanel from './components/ColorPanel'
import { CustomColorPanel, InputRange } from './styles'

const App = () => {
  const [redColor, setRedColor] = useState(100)
  const [greeColor, setGreeColor] = useState(200)
  const [blueColor, setblueColor] = useState(255)
  const [alpha, setAlpha] = useState(255)

  return (
    <>
      <ColorPanel background={{
        red: redColor,
        green: greeColor,
        blue: blueColor,
        alpha
      }} />
      <CustomColorPanel>
        <InputRange type="range" />
      </CustomColorPanel>
    </>
  )
}

export default App
