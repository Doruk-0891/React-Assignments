import './Header.scss';
import { LOGO_URL } from '../../utils/constants';

export const HeaderComponent = () => {
    return (
        <header>
            <div className="logo-container">
                <img src={LOGO_URL} alt="zomato logo" />
            </div>
            <div className="login-signup-container">
                <button className='login'>Login</button>
                <button className='signup'>Sign Up</button>
            </div>
        </header>
    )
};