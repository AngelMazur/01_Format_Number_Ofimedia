import FormatNumber from '@Components/FormatNumber'
import { AppWrapperContent, AppTitle } from '../style/home.style'

const Home = () => {
  return (
    <>
      <AppWrapperContent>
        <AppTitle>Conversor de números Mazur</AppTitle>
        <FormatNumber />
      </AppWrapperContent>
    </>
  )
}

export default Home
