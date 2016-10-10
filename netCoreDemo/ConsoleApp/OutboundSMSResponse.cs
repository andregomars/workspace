namespace NetCoreDemo
{
    public class OutboundSMSResponse
    {
        public string messageId { get; set; }
        public ResourceReference resourceReference { get; set; }

    }
    
    public class OutboundSMSResponseWrapper
    {
        public OutboundSMSResponse outboundSMSResponse;
        
        public override string ToString()
        {
            return $"Message id is {outboundSMSResponse.messageId}";
        }
    }
    
}