using System;

namespace MultiplosDeTres
{
    class MultiplosDeTres
    {
        static void Main(string[] args)
        {
            int valorUno = 0, valorValido = 0;
            while (valorValido != 1)
            {
                Console.WriteLine("\n ~ Ingrese la cantidad de multiplos a buscar ~ ");
                var sValorUno = Console.ReadLine();
                try
                {
                    valorUno = Int32.Parse(sValorUno);
                    valorValido++;
                }
                catch (FormatException)
                {
                    Console.WriteLine("\n El valor no es valio, pruebe nuevamente");
                }
            }            
            int PutoElqueLee = 0, it = 0;
            while (it != valorUno) 
            {                
                if (PutoElqueLee % 3 == 0 && PutoElqueLee % 5 != 0)
                {
                    Console.WriteLine($"\n El {PutoElqueLee} es multiplo de 3 pero no de 5. ");
                    it++;
                }
                PutoElqueLee++;
            }
            
        }
    }
}
