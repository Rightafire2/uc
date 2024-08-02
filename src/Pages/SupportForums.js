import Navigation from "../Components/Navbar";

export const SupportForums = ({ mode, toggleMode }) => {
    return(
        <>
        <br />
        <h1 className={`text-${mode === 'light' ? 'dark' : 'white'}`}>Support Forums</h1>
        <p className={`text-${mode === 'light' ? 'dark' : 'white'}`}>
            Support Forums I am aware of.
        </p>
        <p className={`text-${mode === 'light' ? 'dark' : 'white'}`}>
            Note: I didn’t post anything on these forums, but reading the posts were very helpful for me.
        </p>
        <br />
        <p className={`text-${mode === 'light' ? 'dark' : 'white'}`}>
            To Do: Listing of reddit pages and other forums I used
        </p>
        </>
    )
};
