import Navbar from '../Navbar/Navbar';

const HomeLayout: React.FC = ({children}) => {
  return (
    <>
      <Navbar/>
      {children}
    </>
  )
}

export default HomeLayout
