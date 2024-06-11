import React,{useContext} from 'react'
import UserContext from '../context/UserContext'

const Profile = () => {
    const {user} = useContext(UserContext)

    if(!user) return <div class='text-center bg-slate-800 h-[20vh] text-6xl text-sky-500 font-semibold'>Enter your username</div>
    if(user.username === '') return <div class='text-center bg-slate-800 h-[30vh] text-6xl text-sky-500 font-semibold'>Username can't be empty</div>
    return <div class='text-center bg-slate-800 h-[30vh] text-6xl text-sky-500 font-semibold'> Welcome {user.username}</div>
}

export default Profile