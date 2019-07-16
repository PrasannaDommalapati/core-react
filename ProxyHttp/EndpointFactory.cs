using Microsoft.Extensions.Options;
using promotion.Library;
using System.Net.Http;

namespace promotion.ProxyHttp
{
    public class EndpointFactory : IEndpointFactory
    {
        public EndpointFactory(IOptions<UriConfiguration> uriConfiguration) : this(uriConfiguration.Value) { }

        public EndpointFactory(UriConfiguration uriConfiguration)
        {
            UriConfiguration = uriConfiguration;
        }

        public EndpointFactory(HttpClient client, UriConfiguration uriConfiguration)
        {
            HttpClient = client;
            UriConfiguration = uriConfiguration;
        }

        public UriConfiguration UriConfiguration { get;}
        public HttpClient HttpClient { get; set; }

        public IEndpoint Create(string path)
        {
            var uriConfiguration = new UriConfiguration
            {
                Host = UriConfiguration.Host,
                Path = path
            };

            var endpoint = new Endpoint(uriConfiguration);
            return endpoint;
        }
    }
}
