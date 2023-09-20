import './Header.scss';
export const HeaderComponent = () => {
    return (
        <header className="header-container">
            <img src="https://bloggytalky.com/wp-content/uploads/2017/07/create-a-free-logo-design-logo-designs-design-a-free-logo-design-a-free-logo-alltech-just-free-logo-design.png" alt="LOGO" />
            <div className="search-bar">
                <div className="search-box">
                    <input type="text" placeholder="Search..." />
                </div>
                <button className="search-btn">Search</button>
            </div>
            <div className="user">
                <img src="https://purepng.com/public/uploads/large/purepng.com-user-iconsymbolsiconsapple-iosiosios-8-iconsios-8-721522596134a4bio.png" alt="user-img" />
            </div>
        </header>
    )
};