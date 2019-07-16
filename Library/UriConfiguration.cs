namespace promotion.Library
{
    public class UriConfiguration
    {
        public UriConfiguration() { }

        public UriConfiguration(string host, string path)
        {
            Host = host;
            Path = path;
        }

        public string Host { get; set; }
        public string Path { get; set; } = "/";
    }
}
