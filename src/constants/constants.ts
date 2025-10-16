export enum Pages {
	Services = "Services",
	Login = "Log in",
}

export const typedKeys = Object.keys(Pages) as Array<keyof typeof Pages>;

export enum Roles {
	Customer = "customer",
	Specialist = "specialist",
}

export const typedRoles = Object.keys(Roles) as Array<keyof typeof Roles>;
