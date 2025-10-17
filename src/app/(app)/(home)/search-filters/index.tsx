"use client";
interface Props {
    data: any;
};

export const SearchFilters = () => ({
    data,
    }:Props) => {
        return (
        <div>
            {JSON.stringify(data.docs, null, 2)}
        </div>
    );
};