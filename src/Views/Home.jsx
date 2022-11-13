import { Box } from "@chakra-ui/react";
import { useState } from "react";

export default function Home() {

    return (
        <>
            <Filters></Filters>
            <Table></Table>
        </>
    )
}

function Filters() {
    const [name, setName] = useState("");
    const [id, setId] = useState("")
    const [departmentId, setDepartmentId] = useState("")
    const [positionId, setPositionId] = useState("")
    function nameOnChange(e) {
        setName(e.target.value)
    }
    function idOnChange(e) {
        setId(e.target.value)
    }
    function DepartmentOnChange(e) {
        setDepartmentId(e.target.value)
    }
    function PositionOnChange(e) {
        setPositionId(e.target.value)
    }
    return (
        <Box className="shadow p-4 border-gray-200 rounded-xl mx-3 my-4">
            <Box className="flex flex-wrap ">
                <div className="w-1/2 p-1">
                    <label className="w-full mb-1 block">Employee Name</label>
                    <input type='text' className="p-2 m-1 w-5/6 rounded border-gray-400 border" onChange={nameOnChange} placeholder="Employee Name" value={name}></input>
                </div>
                <div className="w-1/2 p-1">
                    <label className="w-full mb-1 block">Employee Email</label>
                    <input type='text' className="p-2 m-1 w-5/6 rounded border-gray-400 border" onChange={idOnChange} placeholder="Employee Email" value={id}></input>
                </div>
                <div className="w-1/2 p-1">
                    <label className="w-full mb-1 block">Employee Department</label>
                    <select type='text' className="p-2 m-1 rounded block w-5/6 border border-gray-400" onChange={DepartmentOnChange} placeholder="Employee Name" value={departmentId}>
                        <option value=""></option>
                    </select>
                </div>
                <div className="w-1/2 p-1">
                    <label className="w-full mb-1 block">Employee Position</label>
                    <select type='text' className="p-2 m-1 rounded block w-5/6 border border-gray-400" onChange={PositionOnChange} placeholder="Employee Name" value={positionId}>
                        <option value=""></option>
                    </select>
                </div>
            </Box>
            <Box className="mx-auto w-full block text-center gap-2">
                <button className="bg-sky-400 p-2 border border-gray-300 rounded m-2">Search</button>
                <button className="bg-sky-400 p-2 border border-gray-300 rounded m-2">Download</button>
            </Box>
        </Box>
    );
}


function Table() {
    return (
        <table className="bg-sky-300">
            <thead>
                <tr>
                    <th className="p-3">Name</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="p-2">Myanmar</td>
                </tr>
                <tr>
                    <td className="p-2">Myanmar</td>
                </tr>
                <tr>
                    <td className="p-2">Myanmar</td>
                </tr>
                <tr>
                    <td className="p-2">Myanmar</td>
                </tr>
                <tr>
                    <td className="p-2">Myanmar</td>
                </tr>
                <tr>
                    <td className="p-2">Myanmar</td>
                </tr>
                <tr>
                    <td className="p-2">Myanmar</td>
                </tr>
                <tr>
                    <td className="p-2">Myanmar</td>
                </tr>
                <tr>
                    <td className="p-2">Myanmar</td>
                </tr>
                <tr>
                    <td className="p-2">Myanmar</td>
                </tr>
            </tbody>
        </table>
    );
}