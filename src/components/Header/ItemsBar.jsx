import React from 'react';
import CollapseBtn from "./CollapseBtn";

const ItemsBar = ({items, render}) => {
    let width = window.innerWidth;
    const [size, setSize] = React.useState(width);
    const [open, setOpen] = React.useState(false);

    window.addEventListener('resize', () => {
        setSize(window.innerWidth);
    });

    React.useEffect(() => {
        width = size;
    }, [size]);


    if (width >= 768) {
        return (
            <nav className="items w-full">
                <div className={`w-full md:block md:w-auto`} id="items">

                    <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                        {items && items.map(render)}
                    </ul>
                </div>
            </nav>
        );

    } else if (!open) {
        return <nav className="items w-full">
            <CollapseBtn
                onClick={() => setOpen(!open)}
            />
        </nav>
    }

    return (
        <React.Fragment>
            <nav className="items w-full">
                <CollapseBtn
                    onClick={() => setOpen(!open)}/>

                <div className={` flex w-1/3 md:block md:w-auto   absolute left-0 
                transition  bg-secondary flex  flex-col justify-start space-y-2 h-full shadow top-10
                `} id="items">
                    <ul className=" text-white font-bold flex-col py-4  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                        {items && items.map(render)}
                    </ul>
                </div>
            </nav>
        </React.Fragment>)
};

export default ItemsBar;
