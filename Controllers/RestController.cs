using Microsoft.AspNetCore.Mvc;
using promotion.Models;
using promotion.ProxyHttp;
using System.Threading.Tasks;

namespace promotion.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RestController : Controller
    {
        public IManagementEndpointFactory EndpointFactory { get; set; }

        public RestController(IManagementEndpointFactory endpointFactory) => EndpointFactory = endpointFactory;

        [HttpGet("users/{id}")]
        public async Task<PostData> GetUser(string id)
        {
            return await EndpointFactory
                .Create(UriPaths.GetUserEndpoint)
                .GetAsync<PostData>(id)
                .ConfigureAwait(false);
        }

        [HttpGet("unknown")]
        public async Task<PostData> GetList()
        {
            return await EndpointFactory
                .Create(UriPaths.GetUsersListEndpoint)
                .GetAsync<PostData>()
                .ConfigureAwait(false);
        }
    }
}
