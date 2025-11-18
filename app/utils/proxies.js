import axios from "axios";



async function X402Proxy_GET(request, endpoint) {
  
  const forwardedHeaders = Object.fromEntries(
    Object.entries(request.headers).filter(([k]) => k.toLowerCase() !== "host")
  );

  const backendResp = await axios.get(endpoint, {
    headers: forwardedHeaders,
    //responseType: "arraybuffer",
    validateStatus: () => true,
  });

  // Return a response-like object
  return {
    content: backendResp.data,
    status: backendResp.status,
    headers: backendResp.headers,
    mediaType: backendResp.headers["content-type"] || null,
  };
}





async function X402Proxy_POST(request, endpoint) {
  // copy all request headers except host
  const forwardedHeaders = Object.fromEntries(
    Object.entries(request.headers).filter(([k]) => k.toLowerCase() !== "host")
  );

  // read body (Next.js Request -> arrayBuffer())
  //const bodyBuffer = await request.arrayBuffer();
  const body=await request.body

  const backendResp = await axios.post(endpoint, body, {
    headers: forwardedHeaders,
    //responseType: "arraybuffer",
    validateStatus: () => true,
  });

  return {
    content: backendResp.data,        // raw buffer
    status: backendResp.status,       // HTTP status
    headers: backendResp.headers,     // response headers
    mediaType: backendResp.headers["content-type"] || null,
  };
}


export {X402Proxy_GET,X402Proxy_POST}