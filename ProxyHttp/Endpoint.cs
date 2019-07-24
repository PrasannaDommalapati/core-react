﻿using Microsoft.Extensions.Options;
using Newtonsoft.Json;
using promotion.Library;
using promotion.Models;
using System;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace promotion.ProxyHttp
{
    public class Endpoint : IEndpoint
    {
        public HttpClient Client { get; set; }

        public HostConfiguration Configuration { get; set; }

        public Endpoint(IOptions<HostConfiguration> configuration) : this(configuration.Value) { }

        public Endpoint(HostConfiguration configuration) : this(new HttpClient(), configuration) { }

        public Endpoint(HttpClient client, HostConfiguration configuration)
        {
            Client = client;
            Configuration = configuration;
        }

        public string Uri => (Configuration.Host ?? "").CombineUri(Configuration.Path);

        public void AddHeader(string name, string value) => Client.DefaultRequestHeaders.Add(name, value);

        public async Task<TResponse> GetAsync<TResponse>(params string[] parameters) where TResponse : class
        {
            var response = await Client.GetAsync(string.Format(Uri, parameters)).ConfigureAwait(false);
            if (response.StatusCode == HttpStatusCode.OK)
            {
                return Utility.Deserialize<TResponse>(await response
                    .Content
                    .ReadAsStringAsync()
                    .ConfigureAwait(false));
            }
            else
            {
                var content = await response
                    .Content
                    .ReadAsStringAsync()
                    .ConfigureAwait(false);
                throw new PromotionException($"Response Status: '{response.StatusCode}' Content: '{content}'");
            }
        }

        public async Task<TResponse> PostAsync<TRequest, TResponse>(TRequest data)
            where TRequest : class
            where TResponse : class
        {
            var response = await Client
                .PostAsync(
                    Uri,
                    new StringContent(
                        Utility.Serialize(data),
                        Encoding.UTF8,
                        "application/json"))
                .ConfigureAwait(false);
            var responseContent = await response
                .Content
                .ReadAsStringAsync()
                .ConfigureAwait(false);

            if (response.StatusCode == HttpStatusCode.Accepted)
            {
                return Utility.Deserialize<TResponse>(responseContent);
            }
            else
            {
                throw new PromotionException($"Response Status: '{response.StatusCode}' Content: '{responseContent}'");
            }
        }
    }
}
