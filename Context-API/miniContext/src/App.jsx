import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'

function App() {
  

  return (
    <UserContextProvider>
      <div class=' bg-slate-800'>
      <h1 class='text-6xl font-bold text-cyan-400 text-center h-[20vh] pt-9 underline'>Context API Example</h1>
      <Login />
      <Profile />
      </div>
    </UserContextProvider>
  )
}

export default App
