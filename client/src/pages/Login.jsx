import { Link } from 'react-router-dom'
import '../styles/login.css'
import useAuthContext from '../context/AuthContext'

const Login = () => {
    const { loginUser, updateLoginInfo, loginError, loginInfo, isLoginLoading } = useAuthContext();

    return (
        <div className='login'>
            <div className="container container__registerLogin">
                <div className='__content'>
                    <div className='__image'>
                        <img src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=710&q=80" alt="" />
                    </div>

                    <form className='__form' 
                        onSubmit={loginUser}
                    >
                        <h2>FoodBlog</h2>
                        <h3>Login</h3>
                        <div className='input__container'>
                            <input type="text" required
                                onChange={e => updateLoginInfo({...loginInfo, email: e.target.value})}
                            />
                            <label htmlFor="">Email </label>
                        </div>
                        <div className='input__container'>
                            <input type="password" required
                                onChange={e => updateLoginInfo({...loginInfo, password: e.target.value})}
                            />
                            <label htmlFor="">Password</label>
                        </div>
                        <button type='submit' className='btn btn-primary'>
                            {
                                isLoginLoading ? "Getting you in..." : "Login"
                            }
                        </button>

                        <span>
                            You're not a member yet? <br/>
                            <Link to="/register">Register now!</Link>
                        </span>

                        {
                            loginError?.error && (
                                <div className="danger">
                                    {loginError?.message}
                                </div>
                            )
                        }
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
