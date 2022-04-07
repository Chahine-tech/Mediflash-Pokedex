import React from 'react';

export default function Card(props: any) {
    console.log(props)
    return (
        <div className="flex justify-center">
            <div className="flex flex-col md:flex-row md:max-w-xl w-full rounded-lg bg-white shadow-lg">
                <img className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`} alt="" />
                <div className="p-6 flex flex-col justify-start">
                    <h5 className="text-gray-900 text-xl font-medium mb-2">{props.title}</h5>
                </div>
            </div>
        </div>
    )
}