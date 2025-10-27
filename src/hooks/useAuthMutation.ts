import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";

export type UseAuthMutationOptions<TData, TResponse> = UseMutationOptions<
	TResponse,
	AxiosError,
	TData
> & {
	successMessage?: string;
};

export function useAuthMutation<TData, TResponse>(
	url: string,
	options?: UseAuthMutationOptions<TData, TResponse>
) {
	return useMutation<TResponse, AxiosError, TData>({
		mutationFn: async (data: TData) => {
			const response = await axios.post<TResponse>(url, data, {
				headers: { "Content-Type": "application/json" },
			});
			return response.data;
		},

		onSuccess: (data, variables, mutation, context) => {
			if (options?.successMessage) alert(options.successMessage);
			options?.onSuccess?.(data, variables, mutation, context);
		},

		onError: (error, variables, mutation, context) => {
			if (axios.isAxiosError(error)) {
				const message =
					(error.response?.data as { message?: string })?.message ||
					error.message ||
					"Unknown error";
				alert(message);
			} else {
				alert("Unexpected error occurred");
			}
			options?.onError?.(error, variables, mutation, context);
		},

		...options,
	});
}
