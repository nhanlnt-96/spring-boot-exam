import React from 'react';
import { Link } from 'react-router-dom';

interface IProps {
  className?: string;
}

const LogoSvg: React.FC<{ className: string }> = (props) =>
  React.cloneElement(
    <svg width='156' height='40' viewBox='0 0 156 40' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M28.21 10.76V11.36C27.83 11.44 27.41 11.67 26.95 12.05C26.49 12.41 26.12 13.05 25.84 13.97L20.17 32.15C20.13 32.15 20.09 32.15 20.05 32.15C20.01 32.15 19.97 32.15 19.93 32.15C19.89 32.15 19.85 32.15 19.81 32.15C19.77 32.15 19.73 32.15 19.69 32.15L13.33 13.28C13.07 12.5 12.78 11.99 12.46 11.75C12.14 11.51 11.84 11.38 11.56 11.36V10.76C11.92 10.78 12.37 10.8 12.91 10.82C13.45 10.84 13.97 10.85 14.47 10.85C15.25 10.85 15.98 10.84 16.66 10.82C17.34 10.8 17.89 10.78 18.31 10.76V11.36C17.71 11.38 17.23 11.44 16.87 11.54C16.53 11.64 16.33 11.86 16.27 12.2C16.23 12.54 16.33 13.1 16.57 13.88L21.04 27.71L20.62 28.07L24.58 15.62C24.94 14.52 25.1 13.67 25.06 13.07C25.04 12.45 24.82 12.02 24.4 11.78C23.98 11.52 23.35 11.38 22.51 11.36V10.76C23.09 10.78 23.68 10.8 24.28 10.82C24.88 10.84 25.44 10.85 25.96 10.85C26.48 10.85 26.91 10.84 27.25 10.82C27.59 10.8 27.91 10.78 28.21 10.76ZM7.24 10.76V11.36C6.72 11.4 6.34 11.5 6.1 11.66C5.88 11.82 5.77 12.08 5.77 12.44C5.79 12.78 5.9 13.26 6.1 13.88L10.75 28.07L10 28.82L14.2 15.41L14.65 16.13L9.7 32.15C9.66 32.15 9.62 32.15 9.58 32.15C9.54 32.15 9.5 32.15 9.46 32.15C9.42 32.15 9.38 32.15 9.34 32.15C9.3 32.15 9.26 32.15 9.22 32.15L2.86 13.28C2.6 12.5 2.27 11.99 1.87 11.75C1.47 11.51 1.11 11.38 0.79 11.36V10.76C1.19 10.78 1.68 10.8 2.26 10.82C2.86 10.84 3.44 10.85 4 10.85C4.66 10.85 5.27 10.84 5.83 10.82C6.41 10.8 6.88 10.78 7.24 10.76ZM38.8682 10.76V11.36C38.1882 11.38 37.6682 11.46 37.3082 11.6C36.9682 11.72 36.7382 11.96 36.6182 12.32C36.4982 12.66 36.4382 13.2 36.4382 13.94V28.82C36.4382 29.54 36.4982 30.08 36.6182 30.44C36.7382 30.8 36.9682 31.04 37.3082 31.16C37.6682 31.28 38.1882 31.36 38.8682 31.4V32C38.4082 31.96 37.8282 31.94 37.1282 31.94C36.4482 31.92 35.7582 31.91 35.0582 31.91C34.2782 31.91 33.5482 31.92 32.8682 31.94C32.1882 31.94 31.6382 31.96 31.2182 32V31.4C31.8982 31.36 32.4082 31.28 32.7482 31.16C33.1082 31.04 33.3482 30.8 33.4682 30.44C33.5882 30.08 33.6482 29.54 33.6482 28.82V13.94C33.6482 13.2 33.5882 12.66 33.4682 12.32C33.3482 11.96 33.1082 11.72 32.7482 11.6C32.4082 11.46 31.8982 11.38 31.2182 11.36V10.76C31.6382 10.78 32.1882 10.8 32.8682 10.82C33.5482 10.84 34.2782 10.85 35.0582 10.85C35.7582 10.85 36.4482 10.84 37.1282 10.82C37.8282 10.8 38.4082 10.78 38.8682 10.76ZM62.0242 10.76V11.36C61.3442 11.38 60.8242 11.48 60.4642 11.66C60.1242 11.84 59.8942 12.13 59.7742 12.53C59.6542 12.93 59.5942 13.5 59.5942 14.24V32.15C59.4742 32.15 59.3542 32.15 59.2342 32.15C59.1342 32.15 59.0242 32.15 58.9042 32.15L46.3042 12.68V28.52C46.3042 29.24 46.3642 29.81 46.4842 30.23C46.6242 30.63 46.8842 30.92 47.2642 31.1C47.6642 31.26 48.2542 31.36 49.0342 31.4V32C48.6742 31.96 48.2042 31.94 47.6242 31.94C47.0442 31.92 46.4942 31.91 45.9742 31.91C45.4742 31.91 44.9642 31.92 44.4442 31.94C43.9442 31.94 43.5242 31.96 43.1842 32V31.4C43.8642 31.36 44.3742 31.26 44.7142 31.1C45.0742 30.92 45.3142 30.63 45.4342 30.23C45.5542 29.81 45.6142 29.24 45.6142 28.52V13.94C45.6142 13.2 45.5542 12.66 45.4342 12.32C45.3142 11.96 45.0742 11.72 44.7142 11.6C44.3742 11.46 43.8642 11.38 43.1842 11.36V10.76C43.5242 10.78 43.9442 10.8 44.4442 10.82C44.9642 10.84 45.4742 10.85 45.9742 10.85C46.4142 10.85 46.8342 10.84 47.2342 10.82C47.6342 10.8 47.9942 10.78 48.3142 10.76L58.9042 27.08V14.24C58.9042 13.5 58.8342 12.93 58.6942 12.53C58.5742 12.13 58.3142 11.84 57.9142 11.66C57.5342 11.48 56.9542 11.38 56.1742 11.36V10.76C56.5342 10.78 57.0042 10.8 57.5842 10.82C58.1842 10.84 58.7342 10.85 59.2342 10.85C59.7542 10.85 60.2642 10.84 60.7642 10.82C61.2842 10.8 61.7042 10.78 62.0242 10.76ZM75.9808 10.34C77.2808 10.34 78.3308 10.54 79.1308 10.94C79.9308 11.32 80.6808 11.77 81.3808 12.29C81.6408 12.49 81.8408 12.59 81.9808 12.59C82.3608 12.59 82.6108 11.98 82.7308 10.76H83.4208C83.3808 11.5 83.3508 12.4 83.3308 13.46C83.3108 14.52 83.3008 15.92 83.3008 17.66H82.6108C82.4708 16.82 82.3008 16.01 82.1008 15.23C81.9008 14.45 81.5708 13.78 81.1108 13.22C80.5308 12.48 79.7708 11.91 78.8308 11.51C77.8908 11.09 76.9208 10.88 75.9208 10.88C74.9208 10.88 74.0108 11.13 73.1908 11.63C72.3908 12.11 71.7008 12.81 71.1208 13.73C70.5408 14.65 70.0908 15.76 69.7708 17.06C69.4708 18.34 69.3208 19.79 69.3208 21.41C69.3208 25.01 69.9008 27.65 71.0608 29.33C72.2208 30.99 74.0208 31.82 76.4608 31.82C77.1808 31.82 77.8008 31.72 78.3208 31.52C78.8608 31.3 79.2808 31.09 79.5808 30.89C79.9608 30.63 80.2008 30.39 80.3008 30.17C80.4008 29.93 80.4508 29.62 80.4508 29.24V26.36C80.4508 25.54 80.3708 24.93 80.2108 24.53C80.0508 24.13 79.7508 23.86 79.3108 23.72C78.8908 23.58 78.2608 23.5 77.4208 23.48V22.88C77.7808 22.9 78.2008 22.92 78.6808 22.94C79.1608 22.94 79.6608 22.95 80.1808 22.97C80.7208 22.97 81.2108 22.97 81.6508 22.97C82.3108 22.97 82.9008 22.96 83.4208 22.94C83.9608 22.92 84.4108 22.9 84.7708 22.88V23.48C84.1108 23.52 83.6908 23.68 83.5108 23.96C83.3308 24.24 83.2408 24.94 83.2408 26.06V32H82.6408C82.6208 31.66 82.5408 31.29 82.4008 30.89C82.2808 30.49 82.0908 30.29 81.8308 30.29C81.7108 30.29 81.5908 30.32 81.4708 30.38C81.3508 30.44 81.1408 30.58 80.8408 30.8C80.1808 31.3 79.4808 31.7 78.7408 32C78.0008 32.28 77.1408 32.42 76.1608 32.42C73.0608 32.42 70.6408 31.48 68.9008 29.6C67.1808 27.7 66.3208 25.08 66.3208 21.74C66.3208 19.4 66.7408 17.38 67.5808 15.68C68.4208 13.98 69.5608 12.67 71.0008 11.75C72.4608 10.81 74.1208 10.34 75.9808 10.34ZM113.893 10.76C113.813 11.52 113.753 12.26 113.713 12.98C113.693 13.68 113.683 14.22 113.683 14.6C113.683 15.08 113.693 15.53 113.713 15.95C113.733 16.37 113.753 16.74 113.773 17.06H113.083C112.943 15.66 112.753 14.56 112.513 13.76C112.273 12.94 111.853 12.35 111.253 11.99C110.653 11.63 109.723 11.45 108.463 11.45H106.843V28.52C106.843 29.32 106.913 29.92 107.053 30.32C107.213 30.72 107.513 30.99 107.953 31.13C108.393 31.27 109.033 31.36 109.873 31.4V32C109.353 31.96 108.693 31.94 107.893 31.94C107.093 31.92 106.283 31.91 105.463 31.91C104.563 31.91 103.713 31.92 102.913 31.94C102.133 31.94 101.503 31.96 101.023 32V31.4C101.863 31.36 102.503 31.27 102.943 31.13C103.383 30.99 103.673 30.72 103.813 30.32C103.973 29.92 104.053 29.32 104.053 28.52V11.45H102.433C101.193 11.45 100.263 11.63 99.6428 11.99C99.0428 12.35 98.6228 12.94 98.3828 13.76C98.1428 14.56 97.9528 15.66 97.8128 17.06H97.1228C97.1628 16.74 97.1828 16.37 97.1828 15.95C97.2028 15.53 97.2128 15.08 97.2128 14.6C97.2128 14.22 97.1928 13.68 97.1528 12.98C97.1328 12.26 97.0828 11.52 97.0028 10.76C97.8428 10.78 98.7528 10.8 99.7328 10.82C100.733 10.84 101.733 10.85 102.733 10.85C103.733 10.85 104.643 10.85 105.463 10.85C106.283 10.85 107.183 10.85 108.163 10.85C109.163 10.85 110.163 10.84 111.163 10.82C112.163 10.8 113.073 10.78 113.893 10.76ZM132.796 10.76C132.716 11.46 132.656 12.14 132.616 12.8C132.596 13.46 132.586 13.96 132.586 14.3C132.586 14.66 132.596 15.01 132.616 15.35C132.636 15.67 132.656 15.94 132.676 16.16H131.986C131.866 14.98 131.696 14.05 131.476 13.37C131.256 12.67 130.876 12.18 130.336 11.9C129.816 11.6 129.026 11.45 127.966 11.45H125.476C124.796 11.45 124.276 11.51 123.916 11.63C123.576 11.73 123.346 11.96 123.226 12.32C123.106 12.66 123.046 13.2 123.046 13.94V28.82C123.046 29.54 123.106 30.08 123.226 30.44C123.346 30.8 123.576 31.04 123.916 31.16C124.276 31.26 124.796 31.31 125.476 31.31H127.666C128.926 31.31 129.876 31.14 130.516 30.8C131.176 30.46 131.646 29.91 131.926 29.15C132.226 28.37 132.446 27.32 132.586 26H133.276C133.216 26.54 133.186 27.26 133.186 28.16C133.186 28.54 133.196 29.09 133.216 29.81C133.256 30.51 133.316 31.24 133.396 32C132.376 31.96 131.226 31.94 129.946 31.94C128.666 31.92 127.526 31.91 126.526 31.91C125.926 31.91 125.126 31.91 124.126 31.91C123.146 31.91 122.096 31.92 120.976 31.94C119.856 31.94 118.806 31.96 117.826 32V31.4C118.506 31.36 119.016 31.28 119.356 31.16C119.716 31.04 119.956 30.8 120.076 30.44C120.196 30.08 120.256 29.54 120.256 28.82V13.94C120.256 13.2 120.196 12.66 120.076 12.32C119.956 11.96 119.716 11.72 119.356 11.6C119.016 11.46 118.506 11.38 117.826 11.36V10.76C118.806 10.78 119.856 10.8 120.976 10.82C122.096 10.84 123.146 10.85 124.126 10.85C125.126 10.85 125.926 10.85 126.526 10.85C127.446 10.85 128.486 10.85 129.646 10.85C130.826 10.83 131.876 10.8 132.796 10.76ZM127.636 21.02C127.636 21.02 127.636 21.12 127.636 21.32C127.636 21.52 127.636 21.62 127.636 21.62H122.146C122.146 21.62 122.146 21.52 122.146 21.32C122.146 21.12 122.146 21.02 122.146 21.02H127.636ZM128.506 17.06C128.426 18.2 128.386 19.07 128.386 19.67C128.406 20.27 128.416 20.82 128.416 21.32C128.416 21.82 128.426 22.37 128.446 22.97C128.466 23.57 128.516 24.44 128.596 25.58H127.906C127.826 24.94 127.726 24.32 127.606 23.72C127.506 23.1 127.266 22.6 126.886 22.22C126.526 21.82 125.906 21.62 125.026 21.62V21.02C125.906 21.02 126.516 20.79 126.856 20.33C127.216 19.87 127.446 19.33 127.546 18.71C127.646 18.09 127.736 17.54 127.816 17.06H128.506ZM146.337 10.61L153.657 29.48C153.957 30.24 154.297 30.75 154.677 31.01C155.057 31.25 155.407 31.38 155.727 31.4V32C155.327 31.96 154.837 31.94 154.257 31.94C153.677 31.92 153.097 31.91 152.517 31.91C151.737 31.91 151.007 31.92 150.327 31.94C149.647 31.94 149.097 31.96 148.677 32V31.4C149.697 31.36 150.347 31.19 150.627 30.89C150.907 30.57 150.847 29.9 150.447 28.88L144.867 13.97L145.347 13.58L140.127 27.14C139.707 28.22 139.507 29.07 139.527 29.69C139.547 30.29 139.777 30.72 140.217 30.98C140.657 31.24 141.297 31.38 142.137 31.4V32C141.577 31.96 140.987 31.94 140.367 31.94C139.767 31.92 139.207 31.91 138.687 31.91C138.187 31.91 137.757 31.92 137.397 31.94C137.057 31.94 136.737 31.96 136.437 32V31.4C136.837 31.3 137.247 31.07 137.667 30.71C138.087 30.33 138.467 29.69 138.807 28.79L145.857 10.61C145.937 10.61 146.017 10.61 146.097 10.61C146.177 10.61 146.257 10.61 146.337 10.61ZM149.997 23.36V23.96H141.057L141.357 23.36H149.997Z'
        fill='currentColor'
      />
    </svg>,
    props
  );

const Logo: React.FC<IProps> = ({ className = '' }) => {
  return (
    <Link to='/' className={`block max-w-[155px] w-full text-white hover:text-white ${className}`}>
      <div className='w-full relative' style={{ paddingBottom: 'calc(40 / 155 * 100%)' }}>
        <LogoSvg className='absolute w-full h-full left-0 top-0 object-contain' />
      </div>
    </Link>
  );
};

export default Logo;