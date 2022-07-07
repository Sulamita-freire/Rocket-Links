import { Header } from "./components/Header"
import { Button } from "./components/Button"
import './style.css'
import { Footer } from "./components/Footer"

export function App(){
  return(
    <main>
      <Header title="Sulamita Freire" description="@sulamita"/>
      <Button title="🎬 Youtube"/>
      <Button title="📷 Instagram"/>
      <Button title="💻 Facebook"/>
      <Button title="🐱 Github"/>
      <Footer description="Feito com ♥ pela Rocketseat"/>
    </main>
  )
}