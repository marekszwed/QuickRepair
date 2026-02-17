import { z } from "zod";

export const step1Schema = z.object({
	category: z.string().min(1, "Please select a category"),
});

export const step2Schema = z.object({
	city: z.string().min(1, "Please select a city"),
	district: z.string().optional(),
	remoteOption: z.boolean().optional(),
});

export const step3Schema = z.object({
	description: z
		.string()
		.min(10, "Please describe the problem in at least 10 characters"),
});

export const step4Schema = z.object({
	urgency: z.enum(["high", "medium", "low"]),
	preferredDate: z.string().optional(),
});

export const step5Schema = z.object({
	budget: z
		.object({
			min: z.number().min(0, "Minimum budget must be >= 0"),
			max: z.number().min(0, "Maximum budget must be >= 0"),
		})
		.optional(),
	budgetUnknown: z.boolean().optional(),
});

export const createOrderSchema = z
	.object({
		step1: step1Schema,
		step2: step2Schema,
		step3: step3Schema,
		step4: step4Schema,
		step5: step5Schema,
	})
	.required();
