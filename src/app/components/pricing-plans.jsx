"use client";
import { useState } from "react";
import { pricingPlans } from "./data";

export default function PricingPlans() {
	const [hoveredCard, setHoveredCard] = useState(null);

	return (
		<div className='grid lg:grid-cols-3 gap-10 mx-auto max-w-7xl lg:gap-8 py-6 px-4 sm:px-6 lg:px-8 h-[500px]'>
			{pricingPlans.map((plan, index) => {
				const isHovered = index === hoveredCard;

				return (
					<div
						key={plan.title}
						className={`max-w-[388px] mx-auto relative border border-slate-200 shadow-xl rounded-3xl flex flex-col ${
							isHovered ? "bg-[#45214A]" : "bg-[#fefefe]"
						}`}
						onMouseEnter={() => setHoveredCard(index)}
						onMouseLeave={() => setHoveredCard(null)}
					>
						{/* Card SVG (heart) */}
						<div className='w-20 h-20 pt-8 mx-auto'>
							<div
								dangerouslySetInnerHTML={{
									__html: plan.svgPath,
								}}
								className={
									isHovered
										? "fill-[#EBB10A]"
										: "#EBB10A"
								}
							/>
						</div>

						{/* Card top info */}
						<h3
							className={`text-center font-semibold h-[28px] pt-[40px] py-[24px] px-0 ${
								isHovered
									? "text-white"
									: "text-[#020202]"
							}`}
						>
							{plan.title}
						</h3>
						<div>
							<p
								className={`px-32 py-[2.67px] text-sm ${
									isHovered ? "text-white" : ""
								}`}
							>
								<span className='absolute font-semibold'>
									{plan.currency}
								</span>
								<span
									className={`font-bold px-[.7rem] text-2xl ${
										isHovered ? "text-white" : ""
									}`}
								>
									{plan.price}
								</span>
								<span>{plan.frequency}</span>
							</p>

							{/* Straight Line SVG */}
							<div className='w-[80%] h1 m-auto p-3'>
								<svg
									viewBox='0 0 300 1'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<line
										y1='0.5'
										x2='300'
										y2='0.5'
										stroke={
											isHovered
												? "#FFFFFF"
												: "#CCCCCC"
										}
									/>
								</svg>
							</div>
						</div>

						{/* Features */}
						<ul className='mt-4 mx-12 space-y-4 flex-1'>
							{plan.features.map((feature, index) => (
								<li
									key={index}
									className={`text-sm leading-6 flex ${
										isHovered ? "text-white" : ""
									}`}
								>
									{/* Features SVG */}
									<svg
										className='h-5 w-5 shrink-0'
										viewBox='0 0 24 24'
										fill={
											isHovered
												? "#FFFFFF"
												: "currentColor"
										}
										xmlns='http://www.w3.org/2000/svg'
									>
										<path d='M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z' />
									</svg>

									<span className='ml-6'>
										{feature}
									</span>
								</li>
							))}
						</ul>

						{/* Call to action */}
						<a
							href='#'
							className={`text-white text-center mt-8 block px-6 py-4 text-sm font-semibold leading-4 rounded-2xl shadow-md w-[244px] h-[48px] ml-16 translate-y-1/2 bottom-0 ${
								isHovered
									? "bg-yellow-400 text-purple-900"
									: "bg-[#45214A] text-white"
							}`}
						>
							{plan.cta}
						</a>
					</div>
				);
			})}
		</div>
	);
}
