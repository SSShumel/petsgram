import { Add } from "@mui/icons-material";
import { Fab, Tooltip } from "@mui/material";

export default function AddButton({openModal, ...props}) {
    return (
        <>
            <Tooltip title="Delete" sx={{position:'fixed', bottom:20, left:{xs:'calc(50%-25px)', md:30}}} onClick={openModal}>
                <Fab color="primary" aria-label="add">
                    <Add  />
                </Fab>
            </Tooltip>
        </>
    )
}