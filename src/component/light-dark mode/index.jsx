import UseLocalStroage from "./useLocalStroage"
import './styles.css'
export default function LightDarkMode(){
    const[theme,setTheme]=UseLocalStroage("theme",'dark')
    function handleToggleTheme(){
      setTheme(theme ==='light'?'dark':'light')  
    }
   console.log(theme)
    return<div className="light-dark-mode" data-theme={theme}>
        <div className="container">
            <p>Hello World</p>
            <button onClick={handleToggleTheme}>change Theme</button>

        </div>
    </div>
}