using System;
using System.Globalization;

namespace CompararFechas
{
    class CompararFechas
    {
        static void Main(string[] args)
        {
            //string dateString, format;
            int CompararFechas = 0, fechaUno = 0, fechaDos = 0;
            CultureInfo infoCultura = new CultureInfo("es-ES");
            DateTime pFechaUno = DateTime.Now, pFechaDos = DateTime.Now;
            while (CompararFechas != 1) 
            {               
                
                if(fechaUno != 1)
                {
                    Console.WriteLine("\n Ingrese la primera fecha, con el formato '12 Junio 2008' ");
                    var dateStringUno = Console.ReadLine();
                    try
                    {
                        pFechaUno = DateTime.Parse(dateStringUno , infoCultura , DateTimeStyles.NoCurrentDateDefault);
                        fechaUno++;

                    }
                    catch (FormatException)
                    {
                        Console.WriteLine("Formato Incorreto");
                    }
                }
                if (fechaUno == 1 & fechaDos != 1)
                {
                    Console.WriteLine("\n Ingrese la segunda fecha, con el mismo formato.");
                    var dateStringDos = Console.ReadLine();
                    try
                    {
                        pFechaDos = DateTime.Parse(dateStringDos, infoCultura, DateTimeStyles.NoCurrentDateDefault);
                        fechaDos++;

                    }
                    catch (FormatException)
                    {
                        Console.WriteLine("Formato Incorreto");
                    }
                }
                _ = (fechaDos == 1 && fechaUno == 1) ? CompararFechas++ : CompararFechas = 0;

            }
            int totalDias = (pFechaDos.Date - pFechaUno.Date).Days;
            Console.WriteLine("La diferencia total de dias es: {0}", totalDias);
            var semanas = 0;
            if (totalDias > 7)
            {
                for (int i = totalDias; i > 1; i--)
                {
                    semanas += semanas;
                }
            }
            Console.WriteLine("La diferencia total de semanas es: {0}", semanas);

        }
    }
}
