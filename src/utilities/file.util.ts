export const downloadFileBlob = (blob: BlobPart, fileName: string) => {
  const downloadUrl = window.URL.createObjectURL(new Blob([blob]));
  const link = document.createElement("a");
  link.href = downloadUrl;
  link.setAttribute("download", fileName);
  document.body.appendChild(link);

  link.click();
  link.remove();
};

export const  validateSize = (file: File, maxSize: number): boolean => {
  const sizeBytes = file.size;
  const sizeMb = sizeBytes / (1024 * 1024);

  return sizeMb <= maxSize;
}