import React, { createContext, useState } from "react";

interface UserContextValues {
	currentUser: null | string;
	setCurrentUser: React.Dispatch<React.SetStateAction<null | string>>;
}

interface ContextProvider {
	children: React.ReactNode;
}

export const UserContext = createContext<UserContextValues>({
	currentUser: null,
	setCurrentUser: () => null,
});
export const UserProvider = ({ children }: ContextProvider) => {
	const [currentUser, setCurrentUser] = useState<null | string>(null);
	const value = { currentUser, setCurrentUser };
	return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
