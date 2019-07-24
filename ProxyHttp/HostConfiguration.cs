using promotion.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace promotion.ProxyHttp
{
    public class HostConfiguration
    {
        public HostConfiguration() { }

        public HostConfiguration(string host, string path)
        {
            Host = host;
            Path = path;
        }

        public string Host { get; set; }

        public Credntial Credential { get; set; }

        public string Path { get; set; } = "/";
    }
}
