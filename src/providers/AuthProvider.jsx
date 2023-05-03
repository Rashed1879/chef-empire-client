/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useState } from 'react';
import {
	createUserWithEmailAndPassword,
	getAuth,
	signInWithEmailAndPassword,
	signOut,
	GoogleAuthProvider,
	signInWithPopup,
} from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState({});
	const [loading, setLoading] = useState(true);

	const createUser = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};

	const signIn = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};

	const signInWithGoogle = () => {
		return signInWithPopup(auth, googleProvider);
	};

	const logOut = () => {
		setLoading(true);
		return signOut(auth);
	};

	const authInfo = {
		user,
		loading,
		createUser,
		signIn,
		logOut,
		signInWithGoogle,
	};

	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
};

export default AuthProvider;
