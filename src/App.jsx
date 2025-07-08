import {
  About,
  Cart,
  Checkout,
  Error,
  HomeLayout,
  Landing,
  Login,
  Orders,
  Products,
  Register,
  SingleProduct,
} from './pages'

const App = () => {
  return (
    <>
      <h1 className='text-7xl font-bold underline'>Tailwind project</h1>
      <button className='btn btn-primary'>Daisy UI button</button>
      <About />
      <Cart />
    </>
  )
}

export default App
