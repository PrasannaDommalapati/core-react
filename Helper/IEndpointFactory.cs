namespace promotion.Helper
{
    public interface IEndpointFactory
    {
        IEndpoint Create(string path);
    }
}
