import {Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button} from "@chakra-ui/react";

export default function Navbar(){
    return (
        <>
            <Box className="flex justify-between">
                <Breadcrumb>
                    <BreadcrumbItem>
                        <BreadcrumbLink>Home</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
                <Button className="">
                    Home
                </Button>
            </Box>
        </>
    );
}