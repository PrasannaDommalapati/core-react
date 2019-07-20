namespace promotion.ProxyHttp
{
    public interface IEndpointFactory
    {
        IEndpoint Create(string path);
    }
}
