import './display.scss';

import Image from 'next/image';
import Link from 'next/link';

const Display = () => {
	return (
		<div className='display'>
			<Image className='julius' src='/images/julius.png' width={400} height={400} alt='Julius Adams' />
			<div className='a'></div>
			<div className='b'></div>
			<div className='c'></div>
			<div className='display-content'>
				<div className='bio'>
					<p className='job'>musical artist</p>
					<p className='name'>Julius Adams</p>
					<p className='description'>Experience tranquility with Julius&apos; latest release, based on christian vibes unlike anything you&apos;ve heard before.</p>
				</div>
				<div className='places'>
					<div className='line'></div>
					<div className='links'>
						<Link href='https://open.spotify.com/artist/0j1rkk9rCD6ak61ZCgeVVY' passHref target='_blank'>
							<p className='link'>
								<Image src='/svgs/spotify.svg' width={14} height={14} alt='Spotify' />
								Spotify
							</p>
						</Link>
						<Link href='https://music.apple.com/us/artist/julius-adams/251451739' passHref target='_blank'>
							<p className='link'>
								<Image src='/svgs/itunes.svg' width={14} height={14} alt='Spotify' />
								iTunes
							</p>
						</Link>
						{/* <Link href='https://open.spotify.com/artist/5Z5Z1jJZ4Z2Qq9xq6Y1Y5u?si=5e2e9e9c9b3c4b0d' passHref target='_blank'>
							<p className='link'>
								<Image src='/svgs/radio.svg' width={14} height={14} alt='Spotify' />
								Radio
							</p>
						</Link> */}
					</div>
					<div className='line'></div>
				</div>
			</div>
		</div>
	);
};

export default Display;
