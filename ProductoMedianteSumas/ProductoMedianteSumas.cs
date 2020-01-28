using System;

namespace ProductoMedianteSumas
{
    class ProductoMedianteSumas
    {
        static void Main(string[] args)
        {
            int NumerosDispares = 0, valorValidoUno = 0, valorValidoDos = 0;
            while (NumerosDispares != 1)
            {
                if (valorValidoUno != 1)
                {
                    Console.WriteLine("\n Ingrese el primer valor ");
                    var sValorUno = Console.ReadLine();
                    try
                    {
                        int valorUno = Int32.Parse(sValorUno);
                        valorValidoUno++;
                    }
                    catch (FormatException)
                    {
                        Console.WriteLine("Ingrese un valor valido");
                    }
                }
                if (valorValidoDos != 1)
                {
                    Console.WriteLine("\n Ingrese el primer valor ");
                    var sValorDos = Console.ReadLine();
                    try
                    {
                        int valorDos = Int32.Parse(sValorDos);
                        valorValidoDos++;
                    }
                    catch (FormatException)
                    {
                        Console.WriteLine("Ingrese un valor valido");
                    }
                }
                _ = (valorValidoUno == 1 && valorValidoDos == 1) ? NumerosDispares++ : NumerosDispares = 0;
            }
            //Tengo los valores validos, ahora calcular suma
        }
        void calcular()
        {
            //sasd
        }
    }
}
