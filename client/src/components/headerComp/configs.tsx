import { ReactElement } from 'react';

interface IHeaderLink {
  label: string;
  path: string;
}

interface IHeaderToolbar {
  label: string;
  path: string;
  icon: ReactElement<'svg'>;
}

export const headerLinks: IHeaderLink[] = [
  {
    label: 'Homepage',
    path: '/'
  },
  {
    label: 'Shop',
    path: '/shop'
  },
  {
    label: 'About us',
    path: '/about-us'
  },
  {
    label: 'Contact us',
    path: '/contact-us'
  }
];

export const headerToolbar: IHeaderToolbar[] = [
  {
    label: 'Login',
    path: '/login',
    icon: (
      <svg fill='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' aria-hidden='true' className='w-6 h-6'>
        <path
          clipRule='evenodd'
          fillRule='evenodd'
          d='M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z'
        ></path>
      </svg>
    )
  }
];
