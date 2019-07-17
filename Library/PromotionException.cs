using System;
using System.Runtime.Serialization;

namespace promotion.Library
{
    [Serializable]
    public class PromotionException : Exception
    {
        public PromotionException() { }

        public PromotionException(string message) : base(message) { }

        public PromotionException(string message, Exception innerException)
            : base(message, innerException) { }

        public PromotionException(SerializationInfo info, in StreamingContext context)
            : base(info, context) { }
    }
}
