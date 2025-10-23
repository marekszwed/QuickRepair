import { useMutation } from "@tanstack/react-query";

export function useAuthMutation<T>(url: string, successMessage: string) {
	return useMutation({
		mutationFn: async (data: T) => {
			const res = await fetch(url, {
				method: "POST",
				body: JSON.stringify(data),
				headers: { "Content-Type": "application/json" },
			});

			if (!res.ok) throw new Error(`Response status: ${res.status}`);

			return res.json();
		},

		onSuccess: (data: unknown) => alert(successMessage),

		onError: (err: unknown) => {
			if (err instanceof Error) alert(err.message);
		},
	});
}
