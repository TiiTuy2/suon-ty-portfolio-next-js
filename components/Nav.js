import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from 'react-icons/hi2';

//Navigaiton data
export const navData = [
  { name: 'home', path: '/', icon: <HiHome /> },
  { name: 'about', path: '/about', icon: <HiUser /> },
  { name: 'services', path: '/services', icon: <HiRectangleGroup /> },
  { name: 'work', path: '/work', icon: <HiViewColumns /> },
  {
    name: 'testimonials',
    path: '/testimonials',
    icon: <HiChatBubbleBottomCenterText />,
  },
  {
    name: 'contact',
    path: '/contact',
    icon: <HiEnvelope />,
  },
];

const Nav = () => {
  const { pathname } = useRouter();
  return (
    <nav className='flex flex-col items-center xl:justify-center rounded-full p-20 gap-y-4 fixed z-50 mt-auto bottom-0 xl:right-[2%] h-fit top-0 w-full xl:w-16 xl:max-w-md'>
      {/* inner */}
      <div className='flex w-full xl:flex-col items-center justify-between  xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] rounded-full xl:h-max backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full'>
        {navData.map((link, index) => (
          <Link
            className={link.path === pathname ? 'text-accent' : 'relative flex items-center group hover:text-accent transition-all duration-300'}
            href={link.path}
            key={index}
          >
            {/* tolip */}
            <div className='absolute pr-14 right-0 hidden xl:group-hover:flex'>
                <div className='relative flex bg-white text-primary items-center p-[6px] rounded-[3px] '>
                   <div className='text-[12px] leading-none font-semibold capitalize'>
                      {link.name}
                   </div>
                   {/* triongle */}
                   <div className='border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2'>

                   </div>
                </div>
            </div>
            {/* icon */}
            <div>{link.icon}</div>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
