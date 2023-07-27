import './index.css'

const YourPasswords = props => {
  const {passwdDetails, deletePassword} = props

  const {
    id,
    website,
    userName,
    password,
    showPassword,
    backgroundColor,
  } = passwdDetails

  const onDeleteClick = () => {
    deletePassword(id)
  }

  const secretPassword =
    showPassword === false ? (
      <img
        className="stars"
        src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
        alt="stars"
      />
    ) : (
      password
    )

  const profileLetter = website[0].toUpperCase()

  return (
    <li className="each-password">
      <p className={backgroundColor}>{profileLetter}</p>
      <div className="details-section">
        <p className="name">{website}</p>
        <p className="name">{userName}</p>
        <p className="name">{secretPassword}</p>
      </div>
      <button
        data-testid="delete"
        className="delete-btn"
        type="button"
        onClick={onDeleteClick}
      >
        <img
          className="dlt-img"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default YourPasswords
