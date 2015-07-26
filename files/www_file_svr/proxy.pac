function FindProxyForURL(url, host)
{
    /* Normalize the URL for pattern matching */
    url = url.toLowerCase();
    host = host.toLowerCase();

    /* Don't proxy local hostnames */
    if (isPlainHostName(host))
    {
        return 'DIRECT';
    }

    if (isResolvable(host))
    {
        var hostIP = dnsResolve(host);
 
        /* Don't proxy non-routable addresses (RFC 3330) */
        if (isInNet(hostIP, '0.0.0.0', '255.0.0.0') ||
            isInNet(hostIP, '10.0.0.0', '255.0.0.0') ||
            isInNet(hostIP, '127.0.0.0', '255.0.0.0') ||
            isInNet(hostIP, '169.254.0.0', '255.255.0.0') ||
            isInNet(hostIP, '172.16.0.0', '255.240.0.0') ||
            isInNet(hostIP, '192.0.2.0', '255.255.255.0') ||
            isInNet(hostIP, '192.88.99.0', '255.255.255.0') ||
            isInNet(hostIP, '192.168.0.0', '255.255.0.0') ||
            isInNet(hostIP, '198.18.0.0', '255.254.0.0') ||
            isInNet(hostIP, '224.0.0.0', '240.0.0.0') ||
            isInNet(hostIP, '240.0.0.0', '240.0.0.0'))
        {
            return 'DIRECT';
        }
    }

//    // Use the proxy.  If that fails then go direct
//  return "PROXY 192.168.4.1:3128; DIRECT";

    // Use the proxy
    return "PROXY 192.168.4.1:3128";
}
