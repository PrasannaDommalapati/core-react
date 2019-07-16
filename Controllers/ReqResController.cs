using Microsoft.AspNetCore.Mvc;
using promotion.Models;
using promotion.ProxyHttp;
using System.Threading.Tasks;

namespace promotion.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReqResController : Controller
    {
        public IEndpointFactory EndpointFactory { get; }

        public ReqResController(IEndpointFactory endpointFactory)
        {
            EndpointFactory = endpointFactory;
        }

        [HttpGet("actions")]
        public async Task<Post> Best()
        {
            return await EndpointFactory.Create(Constants.UserDetails)
                .GetAsync<Post>("2").ConfigureAwait(false);
        }
    }
}
