"use client";
import * as S from "./styled";
import { Radios } from "@/components";
import { Roles } from "@/constants/constants";
import { useUpdateRole } from "@/hooks/useUpdateRole";
import { useRouter } from "next/navigation";
import { Routes } from "@/routes/routes";

function RolePage() {
	const updateRole = useUpdateRole();
	const location = useRouter();

	const handleChangeModalState = (value: Roles) => {
		updateRole.mutate(
			{ role: value },
			{ onSuccess: () => location.push(Routes.clientPanel) }
		);
	};
	return (
		<S.RoleBox>
			<Radios
				name="role"
				options={[
					{ label: "Customer", value: Roles.Customer },
					{ label: "Specialist", value: Roles.Specialist },
				]}
				onChange={(value) => handleChangeModalState(value as Roles)}
			/>
		</S.RoleBox>
	);
}

export default RolePage;
