'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import { Link } from '@/navigation';
import { MdArrowRightAlt } from 'react-icons/md';
import { BiLogoFacebook } from 'react-icons/bi';
import Image from 'next/image';
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
        <div className="flex text-sm">
          <p>{t('PhoneNumber')}</p>
          <a className="text-decoration-none hover:text-primary" href="tel:(514) 269-7537">
            <p className="font-bold ml-2">(514) 269-7537</p>
          </a>
        </div>
        <div className="items-center flex">
          <BiLogoFacebook />
          <Link href="/contact">
            <div
              className="bg-primary p-3 btn-triangle font-bold h-[54px] w-[167px] items-center justify-evenly ml-4 md:flex hidden"
              style={{
                clipPath: 'polygon(90% 0%, 100% 50%, 90% 100%, 0% 100%, 0% 0%)',
              }}
            >
              <p className="text-white font-bold">{t('Contact')}</p>
              <MdArrowRightAlt color="white" />
            </div>
          </Link>
        </div>
      </div>
      <div className="fixed-header py-2 md:px-32 px-2 bg-white z-10">
        <div className="flex  justify-between items-center">
          <div className="flex justify-center text-primary ">
            <Link href="/">
              <Image
                width={140}
                height={90}
                src="https://conteneurjd.com/wp-content/uploads/2023/06/LOGOMODIFIE-05.svg"
                alt=""
              />
            </Link>
          </div>
          <nav className="md:block hidden">
            <ul className="flex justify-center font-bold">
              <li className="px-[20px] py-[40px] hover:text-primary font-bold ">
                <Link href="/">{t('Home')}</Link>
              </li>
              <li className="px-[20px] py-[40px] hover:text-primary font-bold">
                <Link href="/services">{t('Services')}</Link>
              </li>
              <li className="px-[20px] py-[40px] hover:text-primary font-bold">
                <Link href="/modification">{t('Modification')}</Link>
              </li>
              <li className="px-[20px] py-[40px] hover:text-primary font-bold">
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
