function FindProxyForURL(url, host)
{
    // Normalize the URL for pattern matching
//    url = url.toLowerCase();
//    host = host.toLowerCase();

//    // Use the proxy.  If that fails then go direct
//  return "PROXY 192.168.4.1:3128; DIRECT";

    // Use the proxy
    return "PROXY 192.168.4.1:3128";
}
