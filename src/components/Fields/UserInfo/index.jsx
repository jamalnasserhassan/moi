import './UserInfo.scss'

const UserInfo = ({ toggleSidebarOpen, color='secondary' }) => {

	return (
		<div>
			<div className={`UserInfo is--${color}`}>
				<label className='UserInfo__label'>معلومات المستخدم</label>
				<button className='UserInfo__button' type='button'  onClick={toggleSidebarOpen}>
					<img src='/images/avatar.png'/>
					<span>احمد  سعود نايف الحارثي</span>
				</button>
			</div>
		</div>
	);
};
export default UserInfo;
