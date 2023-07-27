import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import YourPasswords from '../YourPasswords'
import './index.css'

class PasswordManager extends Component {
  constructor(props) {
    super(props)
    const {colorClasses} = this.props
    this.state = {
      passwordList: [],
      website: '',
      userName: '',
      password: '',
      searchInput: '',
      colorsList: colorClasses,
    }
  }

  onToggleShowPassword = () => {
    this.temp = true
    this.setState(prevState => ({
      passwordList: prevState.passwordList.map(eachPassword => {
        if (this.temp) {
          return {...eachPassword, showPassword: !eachPassword.showPassword}
        }
        return {...eachPassword, showPassword: !eachPassword.showPassword}
      }),
    }))
  }

  onAddNewPassword = event => {
    event.preventDefault()
    const {website, userName, password, colorsList} = this.state

    const profileClassnames = `profile ${
      colorsList[Math.ceil(Math.random() * colorsList.length - 1)]
    }`

    const newPassword = {
      id: uuidv4(),
      website,
      userName,
      password,
      showPassword: false,
      backgroundColor: profileClassnames,
    }

    this.setState(prevState => ({
      passwordList: [...prevState.passwordList, newPassword],
      website: '',
      userName: '',
      password: '',
    }))
  }

  onChangeWebsite = event => {
    this.setState({website: event.target.value})
  }

  onChangeUsername = event => {
    this.setState({userName: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  deletePassword = id => {
    const {passwordList} = this.state
    const filteredPasswordList = passwordList.filter(
      eachPassword => eachPassword.id !== id,
    )

    this.setState({
      passwordList: filteredPasswordList,
    })
  }

  render() {
    const {passwordList, website, userName, password, searchInput} = this.state

    const searchResults = passwordList.filter(eachPassword =>
      eachPassword.website.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="container">
        <img
          className="app-logo"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
        />

        <div className="password-form-container">
          <form
            className="add-credentials-container"
            onSubmit={this.onAddNewPassword}
          >
            <h1 className="heading">Add New Password</h1>
            <div className="input-element">
              <div className="icon-div">
                <img
                  className="icon"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                />
              </div>
              <input
                value={website}
                onChange={this.onChangeWebsite}
                className="input"
                placeholder="Enter Website"
              />
            </div>

            <div className="input-element">
              <div className="icon-div">
                <img
                  className="icon"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                />
              </div>
              <input
                value={userName}
                onChange={this.onChangeUsername}
                className="input"
                placeholder="Enter Username"
              />
            </div>

            <div className="input-element">
              <div className="icon-div">
                <img
                  className="icon"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                />
              </div>
              <input
                type="password"
                value={password}
                onChange={this.onChangePassword}
                className="input"
                placeholder="Enter Password"
              />
            </div>

            <button className="btn" type="submit">
              Add
            </button>
          </form>

          <img
            className="img-large"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            alt="password manager"
          />
          <img
            className="img-small"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
            alt="password manager"
          />
        </div>

        <div className="your-passwords-container">
          <div className="passwd-header">
            <div className="passwd-ed">
              <h1 className="heading1">Your Passwords </h1>
              <p className="passwd-count">{searchResults.length}</p>
            </div>
            <div className="search-element">
              <div className="icon-div">
                <img
                  className="icon"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  alt="search"
                />
              </div>
              <input
                type="search"
                value={searchInput}
                onChange={this.onChangeSearchInput}
                className="input"
                placeholder="Enter Password"
              />
            </div>
          </div>
          <hr className="line" />

          <div className="check">
            <input
              type="checkbox"
              className="show-password"
              onChange={this.onToggleShowPassword}
              id="showPasswd"
            />
            <label className="label" htmlFor="showPasswd">
              Show Passwords
            </label>
          </div>
          {searchResults.length === 0 ? (
            <div className="no-passwd-img">
              <img
                className="no-list-img"
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                alt="no passwords"
              />
              <p className="heading text">No Passwords</p>
            </div>
          ) : (
            ''
          )}
          <ul className="password-list">
            {searchResults.map(eachPassword => (
              <YourPasswords
                passwdDetails={eachPassword}
                key={eachPassword.id}
                deletePassword={this.deletePassword}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default PasswordManager
