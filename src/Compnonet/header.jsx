import HeaderTop from './headerTop';
import HeaderBottom from './headerBottom';

const Header = () => {
    

    return(
        <GlobalHeaderScroll.Provider value = {{scrollTop, setScrollTop}} >
            <header>
                <HeaderTop />
                <HeaderBottom />
            </header>
        </GlobalHeaderScroll.Provider>
    
    )
}

export default Header;