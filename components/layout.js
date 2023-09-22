import Navbar from './navbar'

 
export default function Layout({ children }) {
  return (
    <div className='bg-green-100 h-fit '>
      <Navbar />
      <main>{children}</main>
      
    </div>
  )
}