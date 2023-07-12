import { Link } from 'react-router-dom'
import '../styles/login.css'
import useAuthContext from '../context/AuthContext'

const Register = () => {
    const { 
        registerInfo, 
        updateRegisterInfo, 
        registerUser, 
        registerError, 
        isRegisterLoading,
        user
    } = useAuthContext();

    console.log(user)

    return (
        <div className='login'>
            <div className="container container__registerLogin">
                <div className='__content'>
                    <div className='__image'>
                        <img src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=710&q=80" alt="" />
                    </div>

                    <form className='__form' 
                        onSubmit={registerUser}
                    >
                        <h2>FoodBlog</h2>
                        <h3>Register</h3>
                        <div className='input__container'>
                            <input type="text" required
                                onChange={e => updateRegisterInfo({...registerInfo, name: e.target.value})}
                            />
                            <label htmlFor="">Name</label>
                        </div>
                        <div className='input__container'>
                            <input type="text" required
                                onChange={e => updateRegisterInfo({...registerInfo, email: e.target.value})}
                            />
                            <label htmlFor="">Email </label>
                        </div>
                        <div className='input__container'>
                            <input type="password" required
                                onChange={e => updateRegisterInfo({...registerInfo, password: e.target.value})}
                            />
                            <label htmlFor="">Password</label>
                        </div>
                        <button type='submit' className='btn btn-primary'>
                            {
                                isRegisterLoading ? "Creating your account" : "Register"
                            }
                        </button>

                        <span>
                            Already have an account? <br/>
                            <Link to="/login">Sign in now!</Link>
                        </span>
                        {
                             registerError?.error && 
                             <div className="danger">
                                 <p>
                                     {registerError?.message}
                                 </p>
                             </div>
                        }
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register
