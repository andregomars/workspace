using System;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using Newtonsoft.Json;
using System.Collections.Generic;

namespace NetCoreDemo
{
    public class Product
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public decimal Price { get; set; }
        public string Category { get; set; }
    }
    
    class HttpClientSample
    {
        static HttpClient client = new HttpClient();
        private const string url_GetProduct = "http://www.mocky.io/v2/57ee053f2600002d0b1110a4";

        static void ShowProduct(Product product)
        {
            Console.WriteLine($"Name: {product.Name}\tPrice: {product.Price}\tCategory: {product.Category}");
        }


        static async Task<string> GetProductAsync(string path)
        {
            Console.WriteLine("start GetProductAsync!");
            await Task.Delay(5000);
            string productString = null;
            HttpResponseMessage response = await client.GetAsync(path);
            if (response.IsSuccessStatusCode)
            {
                productString = await response.Content.ReadAsStringAsync();
            }
            return productString;
        }

        public static void Run()
        {
            RunAsync().Wait();
        }

        static async Task RunAsync()
        {
            client.BaseAddress = new Uri("http://www.mocky.io/");
            client.DefaultRequestHeaders.Accept.Clear();
            client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));

            try
            {
                // Get the product
                string path = "v2/57ee053f2600002d0b1110a4";
                // string productString = await GetProductAsync(path);
                Task<string> task = GetProductAsync(path);
                Console.WriteLine("waiting for product...");
                string productString = await task;
                Product product = JsonConvert.DeserializeObject<Product>(productString);
                ShowProduct(product);
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
            }

        }

    }
}