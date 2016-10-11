using System;
using System.Collections.Generic;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace NetCoreDemo
{
   public class JsonSample
   {
       public static void Serialize()
       {
        //    OutboundSMSResponse res = new OutboundSMSResponse();
        //    res.resourceReference = new ResourceReference { resourceURL = "http://test.com" };
        //    res.messageId = "SMS28ca5569a880c17e";
        //    OutboundSMSResponseWrapper wrapper = new OutboundSMSResponseWrapper { outboundSMSResponse = res };
            
        //    string json = JsonConvert.SerializeObject(wrapper);
        //    Console.WriteLine("serialized string is: {0}", json);

            InboundSmsMessageListWrapper res = new InboundSmsMessageListWrapper();
            res.InboundSmsMessageList = new InboundSmsMessageList();
            res.InboundSmsMessageList.InboundSmsMessage = new List<InboundSmsMessage>();
            res.InboundSmsMessageList.InboundSmsMessage.Add(
                new InboundSmsMessage { DestinationAddress = "dest",
                    MessageId = "msg id",
                    Message = "new", 
                    SenderAddress = "tel" }
            );
            res.InboundSmsMessageList.NumberOfMessagesInThisBatch = "1";
            res.InboundSmsMessageList.ResourceUrl = "http://test.org";
            res.InboundSmsMessageList.TotalNumberOfPendingMessages = "5";

            string json = JsonConvert.SerializeObject(res);
            Console.WriteLine("serialized string is: {0}", json);
       }
       public static void Deserialize()
       {
          string json = @"{
                ""outboundSMSResponse"": {
                    ""messageId"": ""SMS28ca5569a880c17e"",
                    ""resourceReference"": {
                        ""resourceURL"": ""https://ewr2-api.att.com/sms/v3/messaging/outbox/SMS28ca5569a880c17e""
                    }
                }
            }
            "; 
            
          
          var outboundSMSResponse = 
            JsonConvert.DeserializeObject<OutboundSMSResponseWrapper>(json, new JsonSerializerSettings {
                Error = HandleDeserializationError
            });

          Console.WriteLine(outboundSMSResponse);
       }
       
       public static void HandleDeserializationError(object sender, ErrorEventArgs errorArgs)
        {
            var currentError = errorArgs.ErrorContext.Error.Message;
            errorArgs.ErrorContext.Handled = true;
            Console.WriteLine("Json deserialization Error is: {0}", currentError);
        }

 
   } 
}