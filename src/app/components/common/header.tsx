'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import { Link } from '@/navigation';
const Header = () => {
  const t = useTranslations('Common');
  const [isShowMobileMenu, setIsShowMobileMenu] = useState(false);

  useEffect(() => {
    window.onscroll = function () {
      addStickyToHeader();
    };
    const header = document.querySelector('.fixed-header');
    const sticky = (header as any).offsetTop;
    function addStickyToHeader() {
      if (sticky && window.scrollY > sticky) {
        header?.classList.add('sticky');
      } else {
        header?.classList.remove('sticky');
      }
    }
  }, []);

  return (
    <>
      <div className="flex md:px-32 px-2 justify-between w-full header-border items-center">
        <div className="flex">
          <p>{t('PhoneNumber')}:</p>
          <p className="font-bold ml-2">0000</p>
        </div>
        <div className="items-center md:flex hidden">
          <Link href="/contact">
            <div className="bg-primary p-4 btn-triangle">
              <p className="text-white font-bold">{t('Contact')}</p>
            </div>
          </Link>
        </div>
      </div>
      <div className="fixed-header py-8 md:px-32 px-2 bg-white z-10">
        <div className="flex  justify-between">
          <div className="flex justify-center text-primary ">
            <h1 className="text-lg">{t('CompanyName')}</h1>
          </div>
          <nav className="md:block hidden">
            <ul className="flex justify-center font-bold">
              <li className="mr-4 hover:text-primary font-bold ">
                <Link href="/">{t('Home')}</Link>
              </li>
              <li className="mr-4 hover:text-primary font-bold">
                <Link href="/services">{t('Services')}</Link>
              </li>
              <li className="mr-4 hover:text-primary font-bold">
                <Link href="/modification">{t('Modification')}</Link>
              </li>
              <li className="mr-4 hover:text-primary font-bold">
                <Link href="/contact">{t('Contact')}</Link>
              </li>
            </ul>
          </nav>
          <button
            className="bg-primary w-[30px] h-[30px] rounded md:hidden"
            onClick={() => setIsShowMobileMenu(!isShowMobileMenu)}
          >
            <FontAwesomeIcon icon={faBars} size="sm" color="white" />
          </button>
        </div>
        {isShowMobileMenu && (
          <div className="flex-col">
            <p className="hover:bg-primary hover:text-white font-bold p-[2px] cursor-pointer">
              <Link href="/">{t('Home')}</Link>
            </p>
            <p className="hover:bg-primary hover:text-white font-bold p-[2px] cursor-pointer">
              <Link href="/services">{t('Services')}</Link>
            </p>
            <p className="hover:bg-primary hover:text-white font-bold p-[2px] cursor-pointer">
              <Link href="/modification">{t('Modification')}</Link>
            </p>
            <p className="hover:bg-primary hover:text-white font-bold p-[2px] cursor-pointer">
              <Link href="/contact">{t('Contact')}</Link>
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
