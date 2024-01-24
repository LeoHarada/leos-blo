import React from "react";

type Props = {};

const Header = (props: Props) => {
    return (
        <div className="px-2 py-4 border-b flex justify-between">
            <div className="text-4xl px-2 py-4">LOGO</div>
            <button className="text-white bg-black px-2 py-4">Login</button>
        </div>
    );
};

export default Header;
