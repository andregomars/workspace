using System;
using System.IO;
using Chilkat;

namespace netCoreConsoleDemo
{
  public class Reader
  {
    static readonly string INPUT_PATH;

    static Reader()
    {
      INPUT_PATH = Directory.GetCurrentDirectory() + "/input/sample.csv";
    }

    public static void PrintPath()
    {
      Console.WriteLine(Directory.GetCurrentDirectory());
    }

    public static void ReadCsv()
    {
      Csv csv = new Csv();
      csv.HasColumnNames = true;

      bool success = csv.LoadFile(INPUT_PATH);
      if (!success)
      {
        Console.WriteLine(csv.LastErrorText);
      }

      int rowCount = csv.NumRows;
      int colCount = csv.NumColumns;

      for(int i = 0; i < rowCount; i++)
      {
        for(int j = 0; j < colCount; j++)
        {
          Console.Write(csv.GetCell(i, j)+",");
        }
        Console.WriteLine();
      }

    }
  }
}