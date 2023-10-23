import './footer.scss';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
	return (
		<footer>
			<div className='footer-content'>
				<p>Julius Adams © 2023</p>
				<div className='links'>
					<Link href='https://open.spotify.com/artist/0j1rkk9rCD6ak61ZCgeVVY' target='_blank' passHref>
						<Image className='link' src='/svgs/spotify.svg' width={18} height={18} alt='Music Logo' />
					</Link>
					<Link href='https://music.apple.com/us/artist/julius-adams/251451739' target='_blank' passHref>
						<Image className='link' src='/svgs/itunes.svg' width={18} height={18} alt='Music Logo' />
					</Link>
					<Link href='https://www.facebook.com/SingerJuliusAdams' target='_blank' passHref>
						<Image className='link' src='/svgs/facebook.svg' width={18} height={18} alt='Music Logo' />
					</Link>
					<Link href='https://www.tiktok.com/@julius_adams' target='_blank' passHref>
						<Image className='link' src='/svgs/tiktok.svg' width={18} height={18} alt='Music Logo' />
					</Link>
					<Link href='https://x.com/juliusadams14' target='_blank' passHref>
						<Image className='link' src='/svgs/twitter.svg' width={18} height={18} alt='Music Logo' />
					</Link>
					<Link href='https://www.instagram.com/juliusvadams' target='_blank' passHref>
						<Image className='link' src='/svgs/instagram.svg' width={18} height={18} alt='Music Logo' />
					</Link>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
