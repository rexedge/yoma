import SearchInputBtn from '@/components/searchInputBtn';
import Section from '@/components/ui/section';
import PricingPlans from '../components/pricing-plans';
import HowItWorks from '../components/howitworks';
import CarerCard from '@/components/carer-card';

export default function Home() {
	return (
		<>
			<Section>
				<div className='h-screen flex items-center justify-center'>
					<SearchInputBtn />
				</div>
			</Section>
			<Section>
				<div className='flex-row w-[100%] items-center text-center mt-[40px] pb-[50px] justify-center'>
					<h6 className='font-bold text-[36px]'>Top Carers</h6>
					<div className='flex flex-wrap  justify-around w-[90%] m-auto'>
						<CarerCard
							image='/imgSrc/first-person.jpg'
							name='Jane Doe'
							careType='Dementia Care'
							location='Lagos State, Nigeria'
							recNo='39 Recommendations'
						/>
						<CarerCard
							image='/imgSrc/second-person.jpg'
							name='Jane Doe'
							careType='Dementia Care'
							location='Lagos State, Nigeria'
							recNo='39 Recommendations'
						/>
						<CarerCard
							image='/imgSrc/third-person.jpg'
							name='Jane Doe'
							careType='Dementia Care'
							location='Lagos State, Nigeria'
							recNo='39 Recommendations'
						/>
						<CarerCard
							image='/imgSrc/fourth-person.jpg'
							name='Jane Doe'
							careType='Dementia Care'
							location='Lagos State, Nigeria'
							recNo='39 Recommendations'
						/>
						<CarerCard
							image='/imgSrc/fifth-person.webp'
							name='Jane Doe'
							careType='Dementia Care'
							location='Lagos State, Nigeria'
							recNo='39 Recommendations'
						/>
						<CarerCard
							image='/imgSrc/sixth-person.webp'
							name='Jane Doe'
							careType='Dementia Care'
							location='Lagos State, Nigeria'
							recNo='39 Recommendations'
						/>
					</div>
				</div>
			</Section>
			<Section>
				<div className='mx-auto justify-center text-center max-w-7xl w-screen bg-[#fefefe] px-0 py-16 h-[676px] '>
					<h3>How It Works</h3>
				</div>
				<HowItWorks />
			</Section>
			<Section>
				<div className='mx-auto justify-center w-screen px-0 py-12 h-full'>
					<h1 className='text-2xl text-center text-[#020202] font-bold  sm:leading-tight sm:tracking-tight'>
						Lets Care For You, Subscribe To A Care Plan!
					</h1>
				</div>
				<PricingPlans />
			</Section>
		</>
	);
}
