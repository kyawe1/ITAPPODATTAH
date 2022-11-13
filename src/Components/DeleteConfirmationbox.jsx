import {
    Box, AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    Button
} from "@chakra-ui/react";
import React from "react";

export default function DeleteConfirmationbox({header,body,DeleteAction,CloseAction,close}) {
    const cancelRef = React.useRef();
    return (
        <AlertDialog isOpen={close} closeOnEsc={false} finalFocusRef={cancelRef}>
            <AlertDialogOverlay>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        {header}
                    </AlertDialogHeader>
                    <AlertDialogBody>
                        {body}
                    </AlertDialogBody>
                    <AlertDialogFooter>
                        <Button className="">Cancel</Button>
                        <Button className="bg-red-500">Delete</Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialogOverlay>
        </AlertDialog>
    );
}