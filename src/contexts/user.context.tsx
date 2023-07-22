import React, { createContext, useEffect, useState } from "react";

import type { User } from "firebase/auth";

import {
	createUserDocumentFromAuth,
	onAuthStateChangedListener,
} from "../utils/firebase/firebase.utils.js";

type currentUser = null | User | undefined;
interface UserContextValues {
	currentUser: currentUser;
	setCurrentUser: React.Dispatch<React.SetStateAction<currentUser>>;
}

interface ContextProvider {
	children: React.ReactNode;
}

export const UserContext = createContext<UserContextValues>({
	currentUser: null,
	setCurrentUser: () => null,
});
export const UserProvider = ({ children }: ContextProvider) => {
	const [currentUser, setCurrentUser] = useState<currentUser>(null);
	const value = { currentUser, setCurrentUser };

	useEffect(() => {
		const unsubscribe = onAuthStateChangedListener((user: User) => {
			if (user) {
				createUserDocumentFromAuth(user);
			}
			setCurrentUser(user);
		});
		return unsubscribe;
	}, []);
	return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
