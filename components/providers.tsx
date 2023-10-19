'use client';

// Progress Bar - NextJS Toploader
import Progress from 'nextjs-toploader';

// Unified Settings - Recoil
import { RecoilRoot } from 'recoil';

type ProvidersProps = {
	children: React.ReactNode;
};

const Providers = ({ children }: ProvidersProps) => {
	return (
		<RecoilRoot>
			<Progress height={2} color='#197CF7' />
			{children}
		</RecoilRoot>
	);
};

export default Providers;
