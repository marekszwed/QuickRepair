import gardening from "../../public/lottieAnimation/categories/Gardening.json";
import carServices from "../../public/lottieAnimation/categories/CarServices.json";
import aplianceRepair from "../../public/lottieAnimation/categories/ApplianceRepair.json";
import cleaning from "../../public/lottieAnimation/categories/Cleaning.json";
import generalContractor from "../../public/lottieAnimation/categories/GeneralContractor.json";
import interiorFinishing from "../../public/lottieAnimation/categories/InteriorFinishing.json";
import plumber from "../../public/lottieAnimation/categories/Plumbers.json";
import realEstate from "../../public/lottieAnimation/categories/RealEstate.json";
import technology from "../../public/lottieAnimation/categories/Technology.json";

export const professions = [
	{
		category: "Home Services",
		professions: [
			"Plumber",
			"Electrician",
			"Handyman",
			"Carpenter",
			"Locksmith",
		],
		animation: plumber,
	},
	{
		category: "Construction & Renovation",
		professions: ["Bricklayer", "Plasterer", "Tiler", "Roofer", "Joiner"],
		animation: realEstate,
	},
	{
		category: "Interior Finishing",
		professions: [
			"Painter",
			"Wallpaper Installer",
			"Furniture Assembler",
			"Glazier",
			"Floor Layer",
		],
		animation: interiorFinishing,
	},
	{
		category: "Outdoor & Garden",
		professions: ["Gardener", "Paver", "Fence Installer", "Landscape Designer"],
		animation: gardening,
	},
	{
		category: "Automotive Services",
		professions: [
			"Mechanic",
			"Car Painter",
			"Panel Beater",
			"Auto Electrician",
		],
		animation: carServices,
	},
	{
		category: "Cleaning & Maintenance",
		professions: [
			"Cleaner",
			"Window Cleaner",
			"Upholstery Cleaner",
			"Building Maintenance Technician",
		],
		animation: cleaning,
	},
	{
		category: "Technology & Installations",
		professions: [
			"IT Technician",
			"Solar Panel Installer",
			"Alarm System Installer",
			"Air Conditioning Specialist",
		],
		animation: technology,
	},
	{
		category: "Other Services",
		professions: ["General Contractor", "Mover", "Welder", "Machine Operator"],
		animation: generalContractor,
	},
	{
		category: "Appliance Repair",
		professions: [
			"Washing Machine Technician",
			"Refrigerator Repair Specialist",
			"Oven & Stove Repairman",
			"Dishwasher Technician",
			"TV & Audio Equipment Repairer",
		],
		animation: aplianceRepair,
	},
] as const;
