import './password.css';
import logo from '../../assets/images/lock.png';
import {useState} from 'react';
import {ReadPassword} from "../../../wailsjs/go/main/App"

function Password() {
    const [resultText, setResultText] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const updateName = (e: any) => setName(e.target.value);
    const updatePassword = (e: any) => setName(e.target.value);

    const updateResult = (result: string) => setResultText(result);

    function submit() {
        ReadPassword(name).then(updateResult);
    }

    return (
        <div className="password">
            <div className='box'>
                <img className="logo" src={logo} id="logo" alt="logo"/>
                <p className="label">password</p>
                <input
                    className="input"
                    onChange={updatePassword}
                    autoComplete="off"
                    name="input"
                    type="password"
                />

                <button 
                    className="btn"
                    onClick={submit}>Ok
                </button>
                <div className="result">{resultText}</div>  
            </div>
        </div>
    )
}

export default Password
