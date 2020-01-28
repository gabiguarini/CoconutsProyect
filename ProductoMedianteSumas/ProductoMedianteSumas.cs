using System;

namespace ProductoMedianteSumas
{
    class ProductoMedianteSumas
    {
        static void Main(string[] args)
        {
            int NumerosDispares = 0, valorValidoUno = 0, valorValidoDos = 0, valorUno = 0, valorDos = 0, resultado = 0;
            while (NumerosDispares != 1)
            {
                if (valorValidoUno != 1)
                {
                    Console.WriteLine("\n ~Ingrese el primer valor~ ");
                    var sValorUno = Console.ReadLine();
                    try
                    {
                        valorUno = Int32.Parse(sValorUno);
                        valorValidoUno++;
                    }
                    catch (FormatException)
                    {
                        Console.WriteLine("\n El valor no es valio, pruebe nuevamente");
                    }
                }
                if (valorValidoDos != 1)
                {
                    Console.WriteLine("\n ~Ingrese el segundo valor ~");
                    var sValorDos = Console.ReadLine();
                    try
                    {
                        valorDos = Int32.Parse(sValorDos);
                        valorValidoDos++;
                    }
                    catch (FormatException)
                    {
                        Console.WriteLine("\n El valor no es valio, pruebe nuevamente");
                    }
                }
                _ = (valorValidoUno == 1 && valorValidoDos == 1) ? NumerosDispares++ : NumerosDispares = 0;
            }
            resultado = Calcular(valorUno, valorDos, resultado);
            Console.WriteLine("\n El resultado final es: {0}", resultado);
        }
        static int Calcular(int valorUno, int valorDos, int resultado)
        {          
            if (valorDos == 0)
            {
                return (resultado);                
            }
            else
            {
                if (resultado == 0)
                {
                    resultado = valorUno + valorUno;
                    Console.WriteLine($"\n ~ {valorUno} + {valorUno} = {resultado} ");
                    valorDos--;
                    Calcular(valorUno, valorDos, resultado);
                }
                else 
                {
                    Console.WriteLine($"\n ~ {resultado} + {valorUno} = {resultado+valorUno} ");
                    resultado += valorUno;                    
                    valorDos--;
                    Calcular(valorUno, valorDos, resultado);
                }
                
            }
            return (resultado);
        }
    }
}
