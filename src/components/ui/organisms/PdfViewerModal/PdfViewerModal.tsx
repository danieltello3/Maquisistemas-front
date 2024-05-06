/* eslint-disable prefer-spread */
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootStateType } from "../../../../redux/store";
import { setModalCV } from "../../../../redux/slice/client.slice";
import { modalStyle } from "../../../../utilities/modal.util";
import { Document, Page, pdfjs } from "react-pdf";
import React, { useState } from "react";

pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.js";

interface PdfViewerModalProps {
  file?: File;
}

export const PdfViewerModal: React.FC<PdfViewerModalProps> = ({file}) => {
  const [numPages, setNumPages] = useState<number>();

  const titulo = "Hoja de Vida";

  const dispatch = useDispatch();
  const { isModalCVOpen } = useSelector((store: RootStateType) => store.client)


  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  return (
    <div>
      <Modal
        open={isModalCVOpen}
        onClose={()=> dispatch(setModalCV(!isModalCVOpen))}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={{...modalStyle,width: '100%', maxWidth: 500}}>
          <Typography id="modal-modal-title" variant="h5" component="h2" p={2} textAlign="center">
            {titulo}
          </Typography>
          <Grid display="flex" style={{width: '100%', overflowY: "auto", maxHeight: 600}} flexDirection="column"  p={2} gap={2}>
            <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
            {Array.apply(null, Array(numPages)).map((x, i) => i+1).map((page) => {
              return (
                <Page pageNumber={page} renderAnnotationLayer={false} renderTextLayer={false} key={page} width={450}/>
              )
            })}
            </Document>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
};
