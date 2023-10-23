import './menu.scss';

import Image from 'next/image';
import Link from 'next/link';

const Menu = () => {
	return (
		<div className='menu'>
			<div className='menu-content'>
				<div className='brand'>
					<Image src='/svgs/music.svg' width={26} height={26} alt='Music Logo' />
					<p>
						Julius <span>Adams</span>
					</p>
				</div>
				{/* <div className='links'>
					<Link href='/'>Home</Link>
					<Link href='/store'>Store</Link>
					<Link href='/music'>Music</Link>
					<Link href='/contact'>Contact</Link>
				</div> */}
				{/* <div className='account'>
					<Link href='/account'>
						<Image src='/svgs/account.svg' width={26} height={26} alt='Sign-in' />
					</Link>
				</div> */}
			</div>
		</div>
	);
};

export default Menu;
