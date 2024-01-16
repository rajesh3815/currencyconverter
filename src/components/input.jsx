import React from 'react'
import { useId } from "react";
function Input({
    label,
    amount,
    onAmtchange,
    onCurchange,
    curOptions = [],
    onselectCur ,
    curSelect='usd',
    amtDisable = false,
    curDisable = false,
    className = "", }
) {
    const uID = useId()
    return (
        <div className={` p-3 rounded-lg text-sm flex `}>
            <div className="w-1/2">
                <label htmlFor={uID} className="text-black/40 mb-2 inline-block">{label}</label>
                <input
                    id={uID}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    min={1}
                    placeholder="Amount"
                    disabled={amtDisable}
                    value={amount}
                    onChange={(e) => onAmtchange && onAmtchange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={curSelect}
                    onChange={(e) => {
                        onCurchange && onCurchange(e.target.value)
                        onselectCur(e.target.value)
                    }}
                    disabled={curDisable}
                >
                    {curOptions.map((cur) =>
                        (<option value={cur} key={cur}>{cur}</option>))}
                </select>
            </div>
        </div>
    );
}

export default Input;