import Link from "next/link";
import { useState } from "react";
import useClickOutside from "../../utils/outsideClick";


const MobileMenu = ({ isToggled, toggleClick, categogry }) => {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    });

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            });
        } else {
            setIsActive({
                status: true,
                key,
            });
        }
    };

    let domNode = useClickOutside(() => {
        setIsActive({
            status: false,
        });
    });
    return (
        <>
            <div
                className={
                    isToggled
                        ? "mobile-header-active mobile-header-wrapper-style sidebar-visible"
                        : "mobile-header-active mobile-header-wrapper-style"
                }
            >
                <div className="mobile-header-wrapper-inner">
                    <div className="mobile-header-top">
                        <div className="mobile-header-logo">
                            <Link href="/">

                                <img
                                    src="/img/Silver-amigo-wb-logo.png"
                                    alt="logo"
                                />

                            </Link>
                        </div>
                        <div className="mobile-menu-close close-style-wrap close-style-position-inherit">
                            <button
                                className="close-style search-close"
                                onClick={toggleClick}
                            >
                                <i className="icon-top"></i>
                                <i className="icon-bottom"></i>
                            </button>
                        </div>
                    </div>
                    <div className="mobile-header-content-area">

                        <div className="mobile-menu-wrap mobile-header-border">
                           

                            <nav>
                                <ul className="mobile-menu" ref={domNode}>
                                    
                                    {categogry && categogry.map((item, i) => (
                                        <li key={i} className={
                                            isActive.key == item.id
                                                ? "menu-item-has-children active"
                                                : "menu-item-has-children"
                                        }>
                                            <a href={`/collections/${item.slug}`}>{item.name}</a>
                                            
                                            
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                         
                    </div>
                </div>
            </div>
        </>
    );
};

export default MobileMenu;
