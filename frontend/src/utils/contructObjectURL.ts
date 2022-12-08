export function constructObjectURL(obj: any) {
  try {
    return window.URL.createObjectURL(
      new Blob([Uint8Array.from(obj.buffer.data).buffer], {
        type: obj.mimetype,
      })
    );
  } catch (e) {
    return "";
  }
}
