import "./sidebar.css"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg" alt="" />
                <p>
                The children are eager to work and want to successfully complete the mission of the District to ease the pain
          They will be very nice to us to see who it is.
                </p>
                </div>
                <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Style</li>
                    <li className="sidebarListItem">Sport</li>
                    <li className="sidebarListItem">Tech</li>
                    <li className="sidebarListItem">Cinema</li>
                </ul>
                </div>
                <div className="sidebarItem">
                    <span className="sidebarTitle">FOLLOW US</span>
                    <div className="sidebarSocial">
                        <i id="sidebarIcon" class="fab fa-facebook-square"></i>
                        <i id="sidebarIcon" class="fab fa-instagram"></i>
                        <i id="sidebarIcon" class="fab fa-youtube"></i>
                        <i id="sidebarIcon" class="fab fa-twitter-square"></i>
                    </div>
                </div>
        </div>
    )
}
