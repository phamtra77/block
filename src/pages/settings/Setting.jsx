import Sidebar from '../../components/sidebar/Sidebar'
import "./setting.css"

export default function Setting() {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingTitle">
                    <span className="settingsUpdateTitle">Update Your Account</span>
                    <span className="settingsDeleteTitle">Delete Account</span>
                </div>
                <form className="settingsForm">
                    <label>ProFile Picture</label>
                    <div className="settingsPP">
                        <img src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                        <label htmlFor="fileInput">
                        <i className=" settingsPPIcon fas fa-user-circle"></i>
                        </label>
                        <input type="file" id="fileInput" style={{display:"none"}} />
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder="Username" />
                    <label>Email</label>
                    <input type="email" placeholder="Email" />
                    <label>Password</label>
                    <input type="password" />
                    <button className="settingsSubmit">Submit</button>
                </form>
            </div>
            <Sidebar />
        </div>
    )
}
