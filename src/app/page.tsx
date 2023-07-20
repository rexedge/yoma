import CardComponent from "../components/carer-card";
import Body from "@/components/body";
import Section from "@/components/ui/section";
import PricingPlans from "../components/pricing-plans";
import HowItWorks from "../components/howitworks";

export default function Home() {
	return (
		<>
			<Section>
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
			</Section>
			<Section>
				<div className='mx-auto font-bold text-3xl justify-center text-center max-w-7xl bg-[#fefefe] px-0 py-24 w-[100%]'>
					<h3 className='pb-24 text-color-[#020202] text-center'>
						How It Works
					</h3>
					{<HowItWorks />}
				</div>
			</Section>
			<Section>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
					<Body />
					<Body />
					<Body />
				</div>
			</Section>
			<Section>
				<div className='bg-[#fefefe] h-[100%] w-[100%] px-0  py-[100px]'>
					<div className='mx-auto justify-center px-0 pb-8 max-w-7xl'>
						<h1 className='text-2xl text-center text-[#020202] font-bold sm:leading-tight sm:tracking-tight'>
							Lets Care For You, Subscribe To A Care Plan!
						</h1>
					</div>
					<PricingPlans />
				</div>
			</Section>
		</>
	);
}
