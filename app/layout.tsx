import './layout.scss';
import Menu from '@/components/menu';

import Providers from '@/components/providers';
import Footer from '@/components/footer';

import type { Metadata } from 'next';

type LayoutProps = {
	children: React.ReactNode;
};

const metadata: Metadata = {
	title: 'Julius Adams',
	description: 'Julius Adams is a musical artist based in the United States.',
	twitter: {
		card: 'summary',
		site: '@juliusadams14',
	},
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: 'https://juliusadams.com',
		siteName: 'Julius Adams',
		description: 'Julius Adams is a musical artist based in the United States.',
		images: [
			{
				url: 'https://juliusadams.com/images/og.png',
				width: 1200,
				height: 600,
				alt: 'Julius Adams',
			},
		],
	},
};

const Layout = ({ children }: LayoutProps) => {
	// Todo: Add menu here
	// Todo: Add Smultar Branding here

	return (
		<html>
			<link rel='icon' href='/svgs/music.svg' sizes='any' />
			<body>
				<Providers>
					<Menu />
					<div className='layout'>{children}</div>
					<Footer />
				</Providers>
			</body>
		</html>
	);
};

export default Layout;
export { metadata };
