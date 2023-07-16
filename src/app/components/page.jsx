import PricingPlans from "../components/pricing-plans";
export default function page() {
	return (
		<>
			<div className='mx-auto max-w-7xl justify-center w-screen bg-[#fefefe] px-0 py-12 w-96 h-full'>
				<h1 className='text-2xl text-center text-[#020202] font-bold  sm:leading-tight sm:tracking-tight'>
					Lets Care For You, Subscribe To A Care Plan!
				</h1>
			</div>
      <PricingPlans/>
		</>
	);
}
