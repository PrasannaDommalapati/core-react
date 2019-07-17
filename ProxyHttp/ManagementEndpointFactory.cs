using Microsoft.Extensions.Options;

namespace promotion.ProxyHttp
{
    public class ManagementEndpointFactory : EndpointFactory, IManagementEndpointFactory
    {
        public ManagementEndpointFactory(IOptions<ManagementConfiguration> configuration) : base(configuration) { }
    }
}
