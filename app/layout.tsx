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
