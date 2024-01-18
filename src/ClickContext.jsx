import React from "react";

const ClickContext = React.createContext();

export const ClickProvider = ({ children }) => {
    const [click, setClick] = React.useState({
        castClick: false,
        createClick: false,
        allButtonClick: true,
        mentionsButtonClick: false,
        dotsClick: false,
        subPagesettingsClick: false,
    });


    const handleClick = (type) => {
        // console.log('handleClick called :', type);
        setClick((prevClick) => ({
            ...prevClick,
            [type] : !prevClick[type],
        }));
    };
    // console.log("before:",click);

    // const closeClick = () => {
    //     console.log("Closing clicks...");
    //     setClick(() => ({
    //         castClick: false,
    //         createClick:false,
    //         dotsClick: false,
    //     }))
    // }
    // //click anywhere to close the windows
    // React.useEffect(() => {
    //     console.log("Effect is running...");
    //     (click.castClick || click.createClick || click.dotsClick) && document.addEventListener("click", closeClick);
    //     return () => { 
    //         console.log("Cleanup function is running...");
    //         (click.castClick || click.createClick || click.dotsClick) && document.removeEventListener("click", closeClick) }
    // },[click.castClick, click.createClick , click.dotsClick]);

    // console.log("after:",click);

    

    return (
        <ClickContext.Provider value={{ click, setClick, handleClick,}}>
            { children}
        </ClickContext.Provider>
    );
};



export const useClick = () => {
    const context = React.useContext(ClickContext);
    if(!context){
        throw new Error("Not within a Click provider");
    }
    return context;
};