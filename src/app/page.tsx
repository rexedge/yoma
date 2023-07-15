import Body from '@/components/body';
import Section from '@/components/ui/section';

export default function Home() {
	return (
		<Section p='none'>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
				<Body />
				<Body />
				<Body />
			</div>
		</Section>
	);
}
