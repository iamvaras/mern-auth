import { Link } from "react-router-dom"

const Header = () => {
    return (
        <nav className='bg-slate-200'>
            <div className='flex justify-between items-center max-w-6xl p-3 mx-auto'>
                <Link to='/'>
                    <h2 className="font-bold">
                        MERN Auth
                    </h2>
                </Link>
                <ul className='flex items-center gap-4'>
                    <Link to='/'><li>Home</li></Link>
                    <Link to='/about'><li>About</li></Link>
                    <Link to='/signin'><li>Sign-In</li></Link>
                </ul>
            </div>
        </nav>
    )
}

export default Header