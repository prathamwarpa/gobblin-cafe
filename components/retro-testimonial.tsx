"use client";

import React, {useEffect, useState} from "react";

import Image from "next/image";
import {motion} from "framer-motion";
import {ImageProps} from "next/image";
import {ArrowLeft, ArrowRight, Quote, X} from "lucide-react";

import {cn} from "@/lib/utils";

// ===== Types and Interfaces =====
export interface iTestimonial {
	name: string;
	designation: string;
	description: string;
	profileImage: string;
}

interface iCarouselProps {
	items: React.ReactElement<{
		testimonial: iTestimonial;
		index: number;
		layout?: boolean;
	}>[];
	initialScroll?: number;
}

// ===== Components =====
const Carousel = ({items, initialScroll = 0}: iCarouselProps) => {
	const carouselRef = React.useRef<HTMLDivElement>(null);
	const [canScrollLeft, setCanScrollLeft] = React.useState(false);
	const [canScrollRight, setCanScrollRight] = React.useState(true);

	const checkScrollability = () => {
		if (carouselRef.current) {
			const {scrollLeft, scrollWidth, clientWidth} = carouselRef.current;
			setCanScrollLeft(scrollLeft > 0);
			setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
		}
	};

	const handleScrollLeft = () => {
		if (carouselRef.current) {
			carouselRef.current.scrollBy({left: -300, behavior: "smooth"});
		}
	};

	const handleScrollRight = () => {
		if (carouselRef.current) {
			carouselRef.current.scrollBy({left: 300, behavior: "smooth"});
		}
	};

	useEffect(() => {
		if (carouselRef.current) {
			carouselRef.current.scrollLeft = initialScroll;
			checkScrollability();
		}
	}, [initialScroll]);

	return (
		<div className="relative w-full mt-10">
			<div
				className="flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth [scrollbar-width:none] py-5"
				ref={carouselRef}
				onScroll={checkScrollability}
			>
				<div
					className={cn(
						"absolute right-0 z-[1000] h-auto w-[5%] overflow-hidden bg-gradient-to-l",
					)}
				/>
				<div
					className={cn(
						"flex flex-row justify-start gap-4 pl-3",
						"max-w-5xl mx-auto",
					)}
				>
					{items.map((item, index) => {
						return (
							<motion.div
								initial={{opacity: 0, y: 20}}
								animate={{
									opacity: 1,
									y: 0,
									transition: {
										duration: 0.5,
										delay: 0.2 * index,
										ease: "easeOut",
									},
								}}
								key={`card-${index}`}
								className="last:pr-[5%] md:last:pr-[33%] rounded-3xl"
							>
								{item}
							</motion.div>
						);
					})}
				</div>
			</div>
			<div className="flex justify-end gap-2 mt-4">
				<button
					className="relative z-40 h-10 w-10 rounded-full bg-[#4b3f33] flex items-center justify-center disabled:opacity-50 hover:bg-[#4b3f33]/80 transition-colors duration-200"
					onClick={handleScrollLeft}
					disabled={!canScrollLeft}
				>
					<ArrowLeft className="h-6 w-6 text-[#f2f0eb]" />
				</button>
				<button
					className="relative z-40 h-10 w-10 rounded-full bg-[#4b3f33] flex items-center justify-center disabled:opacity-50 hover:bg-[#4b3f33]/80 transition-colors duration-200"
					onClick={handleScrollRight}
					disabled={!canScrollRight}
				>
					<ArrowRight className="h-6 w-6 text-[#f2f0eb]" />
				</button>
			</div>
		</div>
	);
};

const TestimonialCard = ({
	testimonial,
	index,
	layout = false,
	backgroundImage = "https://images.unsplash.com/photo-1686806372726-388d03ff49c8?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
}: {
	testimonial: iTestimonial;
	index: number;
	layout?: boolean;
	backgroundImage?: string;
}) => {
	const [isExpanded, setIsExpanded] = useState(false);

	const handleToggle = () => {
		setIsExpanded((previous) => !previous);
	};

	return (
		<motion.div
			layoutId={layout ? `card-${testimonial.name}` : undefined}
			onClick={handleToggle}
			onKeyDown={(event) => {
				if (event.key === "Enter" || event.key === " ") {
					event.preventDefault();
					handleToggle();
				}
				if (event.key === "Escape" && isExpanded) {
					event.preventDefault();
					setIsExpanded(false);
				}
			}}
			role="button"
			tabIndex={0}
			className="outline-none"
			whileHover={
				isExpanded
					? undefined
					: {
							rotateX: 2,
							rotateY: 2,
							rotate: 3,
							scale: 1.02,
							transition: {duration: 0.3, ease: "easeOut"},
						}
			}
		>
			<div
				className={`${index % 2 === 0 ? "rotate-0" : "-rotate-0"} rounded-3xl bg-gradient-to-b from-[#f2f0eb] to-[#fff9eb] min-h-[500px] md:min-h-[550px] w-80 md:w-96 overflow-hidden flex flex-col items-center justify-center relative z-10 shadow-md transition-all duration-300 ease-in-out ${
					isExpanded ? "py-6 md:py-8" : ""
				}`}
			>
				{isExpanded && (
					<button
						type="button"
						className="absolute top-4 right-4 h-8 w-8 rounded-full flex items-center justify-center bg-[#4b3f33] z-20"
						onClick={(event) => {
							event.stopPropagation();
							setIsExpanded(false);
						}}
						aria-label="Collapse item details"
					>
						<X className="h-5 w-5 text-white" />
					</button>
				)}
					<div className="absolute opacity-30" style={{inset: "-1px 0 0"}}>
						<div className="absolute inset-0">
							<Image
								className="block w-full h-full object-center object-cover"
								src={backgroundImage}
								alt="Background layer"
								layout="fill"
								objectFit="cover"
							/>
						</div>
					</div>
					<ProfileImage src={testimonial.profileImage} alt={testimonial.name} />
					<motion.p
						layoutId={layout ? `title-${testimonial.name}` : undefined}
						className="text-[rgba(31, 27, 29, 0.7)] text-2xl md:text-2xl font-normal text-center [text-wrap:balance] font-tiemposHeadline mt-4 lowercase px-3"
					>
						{testimonial.name}
					</motion.p>
					<motion.p
						layoutId={layout ? `designation-${testimonial.name}` : undefined}
						className="text-[rgba(31, 27, 29, 0.7)] text-base md:text-base font-thin font-tiemposHeadline italic text-center mt-1 lowercase underline underline-offset-8 decoration-1"
					>
						{testimonial.designation}
					</motion.p>
					<div
						className={`w-full px-5 md:px-7 overflow-hidden transition-all duration-300 ease-in-out ${
							isExpanded ? "max-h-64 md:max-h-72 opacity-100 mt-5" : "max-h-0 opacity-0 mt-0"
						}`}
					>
						<div className="border-t border-[rgba(31,27,29,0.16)] pt-4 text-[rgba(31, 27, 29, 0.7)] text-base md:text-lg lowercase font-thin font-tiemposHeadline leading-snug tracking-wide">
							<Quote className="h-6 w-6 text-[rgba(31, 27, 29, 0.7)] dark:text-neutral-900 mb-2" />
							{testimonial.description}
						</div>
					</div>
				</div>
			</motion.div>
	);
};

const ProfileImage = ({src, alt, ...rest}: ImageProps) => {
	const [isLoading, setLoading] = useState(true);

	return (
		<div className="w-[90px] h-[90px] md:w-[150px] md:h-[150px] opacity-80 overflow-hidden rounded-[1000px] border-[3px] border-solid border-[rgba(59,59,59,0.6)] aspect-[1/1] flex-none saturate-[0.2] sepia-[0.46] relative">
			<Image
				className={cn(
					"transition duration-300 absolute top-0 inset-0 rounded-inherit object-cover z-50",
					isLoading ? "blur-sm" : "blur-0",
				)}
				onLoad={() => {
					return setLoading(false);
				}}
				src={src}
				width={150}
				height={150}
				loading="lazy"
				decoding="async"
				blurDataURL={typeof src === "string" ? src : undefined}
				alt={alt || "Profile image"}
				{...rest}
			/>
		</div>
	);
};

// Export the components
export {Carousel, TestimonialCard, ProfileImage};
