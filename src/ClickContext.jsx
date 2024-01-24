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


    const handleClick = (event, type) => {
        event.stopPropagation();
        setClick((prevClick) => ({
            ...prevClick,
            [type] : !prevClick[type],
        }));
    };

    const closeClick = () => {
        setClick(() => ({
            castClick: false,
            createClick:false,
            dotsClick: false,
        }))
    }
    //click anywhere to close the windows
    React.useEffect(() => {
        (click.castClick || click.createClick || click.dotsClick) && document.addEventListener("click", closeClick);
        return () => { 
            (click.castClick || click.createClick || click.dotsClick) && document.removeEventListener("click", closeClick) }
    },[click.castClick, click.createClick , click.dotsClick]);


    

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