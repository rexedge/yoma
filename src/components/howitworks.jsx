import { howItWorks } from "../utils/data";

export default function howitworks() {
	return (
		<div className='grid lg:grid-cols-3 gap-10 mx-auto max-w-7xl lg:gap-10 sm:px-6 lg:px-8 '>
			{howItWorks.map((plan) => (
				<div
					key={plan.title}
					className={`w-[300px] h-[220px]   mx-auto relative border border-slate-200 shadow-xl rounded-3xl `}
				>
					<h3
						className={`text-2xl text-center font-semibold px-0 pt-16 pb-4`}
					>
						{plan.title}
					</h3>

					<p className='px-8 text-xl font-semibold '>
						{plan.description}
					</p>
					<div
						className={`bg-[#45214A] px-6 py-8 rounded-lg  w-[124px] h-[164px] absolute ml-[-100px] mt-[-50px] -translate-y-1/2`}
					>
						<div className='h-100 w-88 '>{plan.svgPath}</div>
					</div>
				</div>
			))}
		</div>
	);
}
