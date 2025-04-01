import './App.module.css'
import {Btn} from './components/btn'
import {Menu} from './components/menu'

function App() {

  return(
    <>
    <Menu s1='batata' s2='morango' s3='chocolate'/>
    <main>
      <section id='s1'>
        primeiro <br />
        <Btn text='chocolate' func='#s2'/>
        </section>
      <section id='s2'>
        segunda <br />
      <Btn text='batata' func='#s3'/>
      </section>
      <section id='s3'>
        terceira <br />
      <Btn text='morango' func='#s1'/>
        </section>
    </main>
    </>
  )
}

export default App
