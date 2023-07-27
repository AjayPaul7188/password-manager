import PasswordManager from './manager/PasswordCreater'
import './App.css'

const profileBackgroundColorNames = [
  'color1',
  'color2',
  'color3',
  'color4',
  'color5',
  'color6',
  'color7',
  'color8',
  'color9',
  'color10',
  'color11',
]

const App = () => <PasswordManager colorClasses={profileBackgroundColorNames} />

export default App
