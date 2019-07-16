using System;

namespace promotion.Library
{
    [Serializable]
    public class PromotionException : Exception
    {
        public PromotionException() { }

        public PromotionException(string message) : base(message) { }

        public PromotionException(string message, Exception innerException)
            : base(message, innerException) { }

        protected PromotionException(System.Runtime.Serialization.SerializationInfo info, in System.Runtime.Serialization.StreamingContext context)
            : base(info, context) { }
    }
}
