import { useState } from "react"
import axios from "axios";

function Registration(props) {
    const { ShowReg } = props
    const { SetShowReg } = props
    const { SetPassword } = props
    const { SetEmail } = props
    const { SetCopyPassword } = props
    const { SetUserInfo } = props
    const { SetIsUser } = props
    const { Email } = props
    const { Password } = props
    const { CopyPassword } = props
    const { InfoUser } = props
    const { IsUser } = props


    const [EmailDirty, SetEmailDirty] = useState(true)
    const [PasswordDirty, SetPasswordDirty] = useState(true)
    const [PasswordCopyDirt, SetPasswordCopyDirt] = useState(true)
    const [EmailError, SetEmailError] = useState("")
    const [PasswordError, SetPasswordError] = useState("")
    const [CopyPasswordError, CopySetPasswordError] = useState("")


    const Regist = () => {
        if (EmailDirty && PasswordDirty && PasswordCopyDirt === true) {
        }
        else {
            SetIsUser(true)
        }
        console.log(EmailDirty, PasswordDirty, PasswordCopyDirt, IsUser)
    }

    const ShowError = () => {
        if (InfoUser.Email.length === 0) {
            SetEmailDirty(true)
            SetEmailError("You didn't fill in the field!")
        }
        if (InfoUser.Email.length !== 0) {
            SetEmailDirty(false)
        }
        if (/.+@.+\..+/i.test(InfoUser.Email) === true) {
            SetEmailDirty(false)
        }
        if (/.+@.+\..+/i.test(InfoUser.Email) !== true && InfoUser.Email.length !== 0) {
            SetEmailDirty(true)
            SetEmailError("You didn't fill it in correctly")
        }
    }
    const ShowErrorPassword = () => {
        if (InfoUser.Password.length === 0) {
            SetPasswordDirty(true)
            SetPasswordError("You didn't fill in the field!")
        }
        if (InfoUser.Password.length !== 0) {
            SetPasswordDirty(false)
        }
    }

    const ShowErrorCopyPassword = () => {
        if (InfoUser.CopyPassword !== InfoUser.Password) {
            SetPasswordCopyDirt(true);
            CopySetPasswordError("Password doesn't match")
        }
        if (InfoUser.CopyPassword === InfoUser.Password) {
            SetPasswordCopyDirt(false);
        }
    }

    if (IsUser === true) {
        return (
            <div className="favorite__body register__body">
                <div className="blur"></div>
                <div className="favorite__block register__block">
                    <div className="close" onClick={() => SetShowReg(!ShowReg)}><span>X</span></div>
                    <h1>Registration</h1>
                    <span className="successfully">Are you registered! <p>Happy finding anime.</p> <p>Thank you for choosing us :)</p></span>
                </div>
            </div>
        )
    } else {
        return (
            <div className="favorite__body register__body">
                <div className="blur"></div>
                <div className="favorite__block register__block">
                    <div className="close" onClick={() => SetShowReg(!ShowReg)}><span>X</span></div>
                    <h1>Registration</h1>
                    <form method="post" action="http://localhost:5000">
                        <div className="register__email">
                            <label htmlFor="">Email:</label>
                            <input onBlur={() => ShowError()} type="email" name="email" id="email" placeholder="Email" onChange={(e) => SetEmail(InfoUser.Email = e.target.value)} />
                            {EmailDirty && <div className="error"><span>{EmailError}</span></div>}
                        </div>
                        <div className="register__password">
                            <label htmlFor="">Password:</label>
                            <input onBlur={() => ShowErrorPassword()} type="password" name="password" id="password" placeholder="Password" onChange={(e) => SetPassword(InfoUser.Password = e.target.value)} />
                            {PasswordDirty && <div className="error"><span>{PasswordError}</span></div>}
                        </div>
                        <div className="register__copy-password">
                            <label htmlFor="">Copy Password:</label>
                            <input onBlur={() => ShowErrorCopyPassword()} type="password" name="copy-password" id="copy-password" placeholder="Copy password" onChange={(e) => SetCopyPassword(InfoUser.CopyPassword = e.target.value)} />
                            {PasswordCopyDirt && <div className="error"><span>{CopyPasswordError}</span></div>}
                        </div>
                        <button className="register__ready" type="sumbit" value="submit" onClick={() => Regist()}>
                            <span>Ready</span>
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Registration;

/*
<form method="post" action="http://localhost:5000/register">
                    <div className="register__email">
                        <label htmlFor="">Email:</label>
                        <input onBlur={() => ShowError()} type="email" name="email" id="email" placeholder="Email" onChange={(e) => SetEmail(InfoUser.Email = e.target.value)}/>
                        { EmailDirty && <div className="error"><span>{EmailError}</span></div>}
                    </div>
                    <div className="register__password">
                        <label htmlFor="">Password:</label>
                        <input onBlur={() => ShowErrorPassword()} type="password" name="password" id="" placeholder="Password" onChange={(e) => SetPassword(InfoUser.Password = e.target.value)}/>
                        { PasswordDirty && <div className="error"><span>{PasswordError}</span></div>}
                    </div>
                    <div className="register__copy-password">
                        <label htmlFor="">Copy Password:</label>
                        <input onBlur={() => ShowErrorCopyPassword()} type="password" name="copy-password" id="" placeholder="Copy password" onChange={(e) => SetCopyPassword(InfoUser.CopyPassword = e.target.value)}/>
                        { PasswordCopyDirt && <div className="error"><span>{CopyPasswordError}</span></div>}
                    </div>
                    <button className="register__ready" type="submit" onClick={() => Regist()}>
                        <span>Ready</span>
                    </button>
                </form>
*/