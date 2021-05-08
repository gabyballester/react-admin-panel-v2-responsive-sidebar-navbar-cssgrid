import './Navbar.css';
import avatar from '../../assets/avatar.svg';

const Navbar = ({ openSidebar }) => {
  return (
    <div className="navbar">
      <div
        className="nav_icon"
        onClick={() => openSidebar()}
      >
        <i className="fa fa-bars"></i>
        <div className="navbar__left">
          <a>Subscribers</a>
          <a>Video Management</a>
          <a className="active_link">Admin</a>
        </div>
        <div className="navbar__right">
          <a>
            <i className="fa fa-search"></i>
          </a>
          <a>
            <i className="fa fa-clock-o"></i>
          </a>
          <a>
            <img width="30" src={avatar} alt="avatar" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
