import { Box, Container, Spinner, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { default as axios } from "axios";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [alertDiv, setAlertDiv] = useState(false);
    const [message, setMessage] = useState("");
    const emailOnChange = (e) => {
        setEmail(e.target.value);
    }
    const passwordOnChange = (e) => {
        setPassword(e.target.value);
    }
    function ajax() {
        setLoading(true);
        axios.post("https://localhost:7009/api/user/login", {
            employee_id: email,
            password: password
        }).then(
            (json) => {
                setLoading(false);
                console.log(json)
                setAlertDiv(true)
                setMessage(json.data.message)
            }
        ).catch((error) => {
            setLoading(false);
            console.log(error);
        });
    }
    return (
        <Box className=" flex place-items-center h-screen box-border overflow-auto ">
            <Box className="bg-sky-500 py-4 px-10 mx-auto w-2/6 max-sm:w-full  lg:h-screen  border-1 border-gray-50 shadow">
                <div className="p-3 bg-red-300" style={alertDiv ? { display: "block" } : { display: "none" }}>
                    {message}
                </div>
                <Box>
                    <img src="/logo.png" alt="Profile" className="block mx-auto" />
                    <h2 className="text-center text-xl font-semibold">Log In Page</h2>
                </Box>
                <Container className="lg:my-2">
                    <div className="w-full mb-1">
                        Email
                    </div>
                    <input type="email" className="w-full rounded border-1 border p-2" onChange={emailOnChange} value={email} placeholder="Email"></input>
                </Container>
                <Container className="lg:my-2">
                    <div className="w-full mb-1">
                        Password
                    </div>
                    <input type="password" className="w-full rounded border border-1 p-2" onChange={passwordOnChange} value={password} placeholder="Password"></input>
                </Container>
                <Container>
                    <button className="rounded p-2 bg-white mx-auto my-1 block w-3/4 bg-sky-400" onClick={ajax}>Login</button>
                </Container>
            </Box>
            <Box className="w-full max-sm:hidden">
                <img src="/login-cover1.jpg" className="h-screen mx-auto overflow-auto max-sm:hidden" alt="cover"/>
            </Box>
            <Box className="fixed h-screen w-full bg-black opacity-75" id="loading" style={loading ? { display: "block" } : { display: "none" }}>
                <div className="flex place-items-center h-screen w-screen items-center">
                    <div className="mx-auto block">
                        <Spinner size='xl' />
                    </div>
                </div>
            </Box>
        </Box>
    );
}