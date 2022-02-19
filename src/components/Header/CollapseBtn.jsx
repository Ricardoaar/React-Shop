import React from 'react';

const CollapseBtn = ({onClick}) => {
    return (
        <button data-toggle="items" type="button"
                onClick={onClick}
                className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100
            focus:outline-none
            focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
            <svg width="25" height="21" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M1 0.730769C0.447715 0.730769 0 1.17848 0 1.73077C0 2.28305 0.447715 2.73077 1 2.73077V0.730769ZM24 2.73077C24.5523 2.73077 25 2.28305 25 1.73077C25 1.17848 24.5523 0.730769 24 0.730769V2.73077ZM1 9.5C0.447715 9.5 0 9.94772 0 10.5C0 11.0523 0.447715 11.5 1 11.5V9.5ZM12.5 11.5C13.0523 11.5 13.5 11.0523 13.5 10.5C13.5 9.94772 13.0523 9.5 12.5 9.5V11.5ZM1 18.2692C0.447715 18.2692 0 18.7169 0 19.2692C0 19.8215 0.447715 20.2692 1 20.2692V18.2692ZM24 20.2692C24.5523 20.2692 25 19.8215 25 19.2692C25 18.7169 24.5523 18.2692 24 18.2692V20.2692ZM1 2.73077H24V0.730769H1V2.73077ZM1 11.5H12.5V9.5H1V11.5ZM1 20.2692H24V18.2692H1V20.2692Z"
                    fill="black"/>
            </svg>
        </button>

    );
};

export default CollapseBtn;
