import Navbar from "@/shared/Navbar/Navbar";

const PagesLayout = ({ children }) => {
    return (
        <>
            <Navbar />
            <main>{ children }</main> 
        </>
    );
};

export default PagesLayout;