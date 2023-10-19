import Menu from '@/components/menu';
import './layout.scss';

import Providers from '@/components/providers';
import Footer from '@/components/footer';

type LayoutProps = {
	children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
	// Todo: Add menu here
	// Todo: Add Smultar Branding here

	return (
		<html>
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
