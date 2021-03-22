import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer'

const HomeLayout: React.FC = ({children}) => {
  return (
    <>
      <Navbar/>
      {children}
      <Footer/>
    </>
  )
}

export default HomeLayout
