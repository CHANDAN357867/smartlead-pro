function Navbar() {
  return (
    <nav className="navbar">
      <h2>SmartLead Pro</h2>

      <div className="nav-links">
        <a href="#">Dashboard</a>
        <a href="#">Leads</a>
        <a href="#">Customers</a>
        <a href="#">Reports</a>
      </div>

      <button className="login-btn">
        Login
      </button>
    </nav>
  )
}

export default Navbar