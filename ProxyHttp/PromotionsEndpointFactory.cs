using Microsoft.Extensions.Options;

namespace promotion.ProxyHttp
{
    public class PromotionsEndpointFactory: EndpointFactory, IPromotionsEndpointFactory
    {
        public PromotionsEndpointFactory(IOptions<PromotionsConfiguration> configuration) : base(configuration) { }
    }
}
