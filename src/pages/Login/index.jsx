import {useState} from 'react'
import Cookies from 'js-cookie'
import {Redirect, useHistory} from 'react-router-dom'
import './index.css'

const Login = () => {
  const [username, setuserName] = useState('')
  const [password, setPassword] = useState('')
  const [errorMsg, setErrorMsg] = useState('')

  const history = useHistory()

  const onSubmitLogin = async event => {
    event.preventDefault()

    const userDetails = {
      username,
      password,
    }

    const url = 'https://apis.ccbp.in/login'

    const options = {
      method: 'POST',

      body: JSON.stringify(userDetails),
    }

    try {
      const response = await fetch(url, options)
      const data = await response.json()

      if (response.ok) {
        Cookies.set('jwt_token', data.jwt_token, {
          expires: 30,
        })

        history.replace('/')
      } else {
        setErrorMsg(data.error_msg)
      }
    } catch (error) {
      setErrorMsg('Something went wrong. Please try again.')
    }
  }

  const jwtToken = Cookies.get('jwt_token')

  if (jwtToken !== undefined) {
    return <Redirect to="/" />
  }

  return (
    <form className="form-container" onSubmit={onSubmitLogin}>
      <div className="login-container">
        <div className="input-container">
          <label className="label-name" htmlFor="username">
            Username
          </label>

          <input
            type="text"
            id="username"
            placeholder="Enter Username"
            autoComplete="username"
            value={username}
            onChange={e => setuserName(e.target.value)}
          />
        </div>

        <div className="input-container">
          <label className="label-name" htmlFor="password">
            Password
          </label>

          <input
            type="password"
            id="password"
            placeholder="Enter Password"
            autoComplete="current-password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>

        <button className="login-btn" type="submit">
          Login
        </button>

        {errorMsg && <p>{errorMsg}</p>}
      </div>
    </form>
  )
}

export default Login
