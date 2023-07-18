import Header from '@/components/header';
import './globals.css';

export const metadata = {
	title: 'Yoma Care',
	description: 'Yoma Care',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={''}>
				<Header />
				{children}
			</body>
		</html>
	);
}
