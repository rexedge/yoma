import React from 'react';

export default function Section({
	children,
	p,
}: {
	children: React.ReactNode;
	p?: 'none' | 'sm' | 'md' | 'lg';
}) {
	const padding = `${
		p === 'none'
			? 'py-0'
			: p === 'sm'
			? 'py-4'
			: p === 'md'
			? 'py-12'
			: p === 'lg'
			? 'py-28'
			: ''
	}`;
	return (
		<div className='w-full'>
			<div className={`max-w-[90rem] mx-auto ${padding} px-5`}>
				{children}
			</div>
		</div>
	);
}
