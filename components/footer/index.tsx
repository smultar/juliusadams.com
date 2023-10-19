import './footer.scss';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
	return (
		<footer>
			<div className='footer-content'>
				<p>Julius Adams © 2023</p>
				<div className='links'>
					<Link href='/'>
						<Image className='link' src='/svgs/spotify.svg' width={18} height={18} alt='Music Logo' />
					</Link>
					<Link href='/'>
						<Image className='link' src='/svgs/itunes.svg' width={18} height={18} alt='Music Logo' />
					</Link>
					<Link href='/'>
						<Image className='link' src='/svgs/facebook.svg' width={18} height={18} alt='Music Logo' />
					</Link>
					<Link href='/'>
						<Image className='link' src='/svgs/twitter.svg' width={18} height={18} alt='Music Logo' />
					</Link>
					<Link href='/'>
						<Image className='link' src='/svgs/instagram.svg' width={18} height={18} alt='Music Logo' />
					</Link>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
