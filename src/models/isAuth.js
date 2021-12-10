import { auth } from "../firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";
import { createModel } from "hox";

function useAuthData() {
	const [user, loading, error] = useAuthState(auth);
	const loggedIn = user !== null;
	return { user, loading, error, loggedIn };

	// will add isAdmin / isAuthor

	//how this works is, import useAuthData from this file, then use it in your component
	// const { user, loading, error, loggedIn } = useAuthData();
	// <h1>Welcome {user.name}</h1>
	// {isAuthor && <a>Post new blog</a>} etc...
}

export const userData = createModel(useAuthData);

// import loggedIn
