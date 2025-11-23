"use client";
import * as S from "./styled";
import { Radios } from "@/components";
import { Roles } from "@/constants/constants";
import { useUpdateRole } from "@/hooks/useUpdateRole";
import { useRouter } from "next/navigation";
import { Routes } from "@/routes/routes";
import { useState } from "react";

function RolePage() {
	const [selectedRole, setSelectedRole] = useState<Roles | "">("");
	const updateRole = useUpdateRole();
	const location = useRouter();

	const handleChangeModalState = (value: Roles) => {
		setSelectedRole(value);
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
					{ id: "customer", label: "Customer", value: Roles.Customer },
					{ id: "specialist", label: "Specialist", value: Roles.Specialist },
				]}
				selected={selectedRole}
				onChange={(value) => handleChangeModalState(value as Roles)}
			/>
		</S.RoleBox>
	);
}

export default RolePage;
