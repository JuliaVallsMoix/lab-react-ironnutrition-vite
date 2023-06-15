import { Input } from "antd";

export default function Search({ value, onSearchChange }) {

    return (
        <>
        <label htmlFor="search">Search</label>
        <Input id="search" name="search" value={value} onChange={onSearchChange} />
        
        </>
    )
}