export function constructObjectURL(obj: any) {
  console.log("obj: ", obj);
  try {
    return window.URL.createObjectURL(
      new Blob([Uint8Array.from(obj.data.data).buffer])
    );
  } catch (e) {
    return "";
  }
}
