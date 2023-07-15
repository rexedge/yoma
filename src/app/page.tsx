import CardComponent from '../components/cardComponent';
import Body from '@/components/body';
import Section from '@/components/ui/section';

export default function Home() {
	return (
		<>
			<div className='flex-row w-[100%] items-center text-center mt-[40px] pb-[50px] justify-center'>
				<h6 className='font-bold text-[36px]'>Top Carers</h6>
				<div className='flex flex-wrap  justify-around w-[90%] m-auto'>
					<CardComponent
						image='/imgSrc/first-person.jpg'
						name='Jane Doe'
						careType='Dementia Care'
						location='Lagos State, Nigeria'
						recNo='39 Recommendations'
					/>
					<CardComponent
						image='/imgSrc/second-person.jpg'
						name='Jane Doe'
						careType='Dementia Care'
						location='Lagos State, Nigeria'
						recNo='39 Recommendations'
					/>
					<CardComponent
						image='/imgSrc/third-person.jpg'
						name='Jane Doe'
						careType='Dementia Care'
						location='Lagos State, Nigeria'
						recNo='39 Recommendations'
					/>
					<CardComponent
						image='/imgSrc/fourth-person.jpg'
						name='Jane Doe'
						careType='Dementia Care'
						location='Lagos State, Nigeria'
						recNo='39 Recommendations'
					/>
					<CardComponent
						image='/imgSrc/fifth-person.webp'
						name='Jane Doe'
						careType='Dementia Care'
						location='Lagos State, Nigeria'
						recNo='39 Recommendations'
					/>
					<CardComponent
						image='/imgSrc/sixth-person.webp'
						name='Jane Doe'
						careType='Dementia Care'
						location='Lagos State, Nigeria'
						recNo='39 Recommendations'
					/>
				</div>
			</div>
			<Section p='none'>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
					<Body />
					<Body />
					<Body />
				</div>
			</Section>
		</>
	);
}
