type ApiResponse<T> = Omit<Response, "json"> & { json: () => Promise<T> };

export async function api<T>(
  url: string,
  requestinit?: RequestInit
): Promise<ApiResponse<T>> {
  return (await fetch(url, requestinit)) as ApiResponse<T>;
}
